import sys

import click

from ai.backend.cli.types import ExitCode
from ai.backend.client.session import Session

from ..extensions import pass_ctx_obj
from ..types import CLIContext
from . import admin


@admin.group()
def container_registry() -> None:
    """
    Container registry administration commands.
    """


@container_registry.command()
@pass_ctx_obj
@click.argument("container_registry_id", type=str, metavar="CONTAINER_REGISTRY_ID")
@click.argument("user_id", type=str, metavar="USER_ID")
def associate_container_registry_with_user(ctx: CLIContext, container_registry_id, user_id):
    """
    Associate a container registry with a user.

    \b
    CONTAINER_REGISTRY_ID:
    USER_ID:
    """
    with Session() as session:
        try:
            data = session.ContainerRegistry.associate_container_registry_with_user(
                container_registry_id, user_id
            )
        except Exception as e:
            ctx.output.print_mutation_error(
                e,
                item_name="container_registry",
                action_name="container_registry_association",
            )
            sys.exit(ExitCode.FAILURE)
        if not data["ok"]:
            ctx.output.print_mutation_error(
                msg=data["msg"],
                item_name="container_registry",
                action_name="container_registry_association",
            )
            sys.exit(ExitCode.FAILURE)
        ctx.output.print_mutation_result(
            data,
            extra_info={
                "detail_msg": "Container registry {} is associated with user {}.".format(
                    container_registry_id, user_id
                ),
            },
        )


@container_registry.command()
@pass_ctx_obj
@click.argument("container_registry_id", type=str, metavar="CONTAINER_REGISTRY_ID")
@click.argument("user_id", type=str, metavar="USER_ID")
def disassociate_container_registry_with_user(ctx: CLIContext, container_registry_id, user_id):
    """
    Dissociate a container registry with a user.

    \b
    CONTAINER_REGISTRY_ID:
    USER_ID:
    """
    with Session() as session:
        try:
            data = session.ContainerRegistry.associate_container_registry_with_user(
                container_registry_id, user_id
            )
        except Exception as e:
            ctx.output.print_mutation_error(
                e,
                item_name="container_registry",
                action_name="container_registry_association",
            )
            sys.exit(ExitCode.FAILURE)
        if not data["ok"]:
            ctx.output.print_mutation_error(
                msg=data["msg"],
                item_name="container_registry",
                action_name="container_registry_association",
            )
            sys.exit(ExitCode.FAILURE)
        ctx.output.print_mutation_result(
            data,
            extra_info={
                "detail_msg": "Container registry {} is associated with user {}.".format(
                    container_registry_id, user_id
                ),
            },
        )
