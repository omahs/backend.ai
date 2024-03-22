import textwrap

from ..session import api_session
from .base import BaseFunction, api_function

__all__ = ("ContainerRegistry",)


class ContainerRegistry(BaseFunction):
    """
    .. note::

      All methods in this function class require your API access key to
      have the *admin* privilege.
    """

    @api_function
    @classmethod
    async def associate_with_user(cls, container_registry_id: str, user_id: str):
        """
        Associate container_registry with user.

        :param container_registry_id: The id of the container registry to associate with the user.
        :param user_id: The id of the user to associate with the container registry.
        """
        query = textwrap.dedent(
            """\
            mutation($container_registry_id: UUID!, $user_id: UUID!) {
                associate_container_registry_with_user(
                        container_registry_id: $container_registry_id, user_id: $user_id) {
                    ok msg
                }
            }
        """
        )
        variables = {"container_registry_id": container_registry_id, "user_id": user_id}
        data = await api_session.get().Admin._query(query, variables)
        return data["associate_container_registry_with_user"]

    @api_function
    @classmethod
    async def disassociate_with_user(cls, container_registry_id: str, user_id: str):
        """
        Disassociate container_registry with user.

        :param container_registry_id: The id of the container registry to disassociate with the user.
        :param user_id: The id of the user to disassociate with the container registry.
        """
        query = textwrap.dedent(
            """\
            mutation($container_registry_id: UUID!, $user_id: UUID!) {
                disassociate_container_registry_with_user(
                        container_registry_id: $container_registry_id, user_id: $user_id) {
                    ok msg
                }
            }
        """
        )
        variables = {"container_registry_id": container_registry_id, "user_id": user_id}
        data = await api_session.get().Admin._query(query, variables)
        return data["disassociate_container_registry_with_user"]
