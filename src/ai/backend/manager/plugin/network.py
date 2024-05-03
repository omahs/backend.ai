from abc import ABCMeta, abstractmethod
from typing import Any

from ai.backend.common.plugin import AbstractPlugin, BasePluginContext

from ..models.session import SessionRow


class AbstractNetworkManagerPlugin(AbstractPlugin, metaclass=ABCMeta):
    @abstractmethod
    async def create_network(
        self, session: SessionRow, *, options: dict[str, Any] = {}
    ) -> dict[str, Any]:
        """
        Creates a cross-container network and returns network config which later will be passed to agent.
        """
        raise NotImplementedError

    @abstractmethod
    async def destroy_network(
        self,
        session: SessionRow,
    ) -> None:
        """
        Destroys network which were used to bind containers.
        """
        raise NotImplementedError


class NetworkPluginContext(BasePluginContext[AbstractNetworkManagerPlugin]):
    plugin_group = "backendai_network_manager_v1"