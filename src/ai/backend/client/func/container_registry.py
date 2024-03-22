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
    async def associate_container_registry_with_user(cls, container_registry_id: str, user_id: str):
        """
        Associate container_registry with user.

        :param container_registry_id:
        :param user_id:
        """
        query = textwrap.dedent(
            """\
            mutation($container_registry_id: String!, $user_id: String!) {
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
    async def disassociate_container_registry_with_user(
        cls, container_registry_id: str, user_id: str
    ):
        """
        Disassociate container_registry with user.

        :param container_registry_id:
        :param user_id:
        """
        query = textwrap.dedent(
            """\
            mutation($container_registry_id: String!, $user_id: String!) {
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
