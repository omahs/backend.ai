import enum
import itertools
import json
from collections import defaultdict

import click
import colorama
import tabulate
from colorama import Fore, Style

from ai.backend.plugin.entrypoint import (
    scan_entrypoint_from_buildscript,
    scan_entrypoint_from_package_metadata,
    scan_entrypoint_from_plugin_checkouts,
)


class FormatOptions(enum.StrEnum):
    CONSOLE = "console"
    JSON = "json"


@click.group()
def main():
    """The root entrypoint for unified CLI of the plugin subsystem"""
    pass


@main.command()
@click.argument("group_name")
@click.option(
    "--format",
    type=click.Choice([*FormatOptions]),
    default=FormatOptions.CONSOLE,
    show_default=True,
    help="Set the output format.",
)
def scan(group_name: str, format: FormatOptions) -> None:
    duplicate_count: dict[str, int] = defaultdict(int)
    rows = []
    for source, entrypoint in itertools.chain(
        (("buildscript", item) for item in scan_entrypoint_from_buildscript(group_name)),
        (("plugin-checkout", item) for item in scan_entrypoint_from_plugin_checkouts(group_name)),
        (("python-package", item) for item in scan_entrypoint_from_package_metadata(group_name)),
    ):
        duplicate_count[entrypoint.name] += 1
        rows.append((source, entrypoint.name, entrypoint.module))
    match format:
        case FormatOptions.CONSOLE:
            if not rows:
                print(f"No plugins found for the entrypoint {group_name!r}")
                return
            colorama.init(autoreset=True)
            ITALIC = "\x1b[3m"
            rows.sort(key=lambda row: (row[2], row[1], row[0]))
            src_style = {
                "buildscript": Fore.LIGHTYELLOW_EX,
                "plugin-checkout": Fore.LIGHTGREEN_EX,
                "python-package": Fore.LIGHTBLUE_EX,
            }
            display_headers = (
                f"{ITALIC}Source{Style.RESET_ALL}",
                f"{ITALIC}Name{Style.RESET_ALL}",
                f"{ITALIC}Module Path{Style.RESET_ALL}",
            )
            display_rows = []
            for source, name, module_path in rows:
                name_style = Style.BRIGHT
                if duplicate_count[name] > 1:
                    name_style = Fore.RED + Style.BRIGHT
                display_rows.append((
                    f"{src_style[source]}{source}{Style.RESET_ALL}",
                    f"{name_style}{name}{Style.RESET_ALL}",
                    module_path,
                ))
            print(tabulate.tabulate(display_rows, display_headers))
            if duplicate_count:
                print(f"\n💥 {Fore.LIGHTRED_EX}Detected duplicated entrypoint(s)!{Style.RESET_ALL}")
        case FormatOptions.JSON:
            output_rows = []
            for source, name, module_path in rows:
                output_rows.append({
                    "source": source,
                    "name": name,
                    "module_path": module_path,
                })
            print(json.dumps(output_rows, indent=2))