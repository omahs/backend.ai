from __future__ import annotations

import logging
import uuid
from typing import TYPE_CHECKING, Any, Sequence

import graphene
import sqlalchemy as sa
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm.exc import NoResultFound

from ai.backend.common.logging_utils import BraceStyleAdapter

if TYPE_CHECKING:
    from .gql import GraphQueryContext

from .base import GUID, Base, IDColumn, privileged_mutation
from .gql_relay import AsyncNode
from .user import UserRole

log = BraceStyleAdapter(logging.getLogger(__spec__.name))  # type: ignore

__all__: Sequence[str] = (
    "AssociationContainerRegistriesUsersRow",
    "AssociationContainerRegistriesUsers",
    "CreateAssociationContainerRegistriesUsersInput",
    "CreateAssociationContainerRegistriesUsers",
    "DeleteAssociationContainerRegistriesUsersInput",
    "DeleteAssociationContainerRegistriesUsers",
)


class AssociationContainerRegistriesUsersRow(Base):
    __tablename__ = "association_container_registries_users"
    id = IDColumn()
    container_registry_id = sa.Column(
        "container_registry_id",
        GUID,
        sa.ForeignKey("container_registries.id", onupdate="CASCADE", ondelete="CASCADE"),
        nullable=False,
    )
    user_id = sa.Column(
        "user_id",
        GUID,
        sa.ForeignKey("users.uuid", onupdate="CASCADE", ondelete="CASCADE"),
        nullable=False,
    )

    def __init__(self, container_registry_id: uuid.UUID, user_id: uuid.UUID):
        self.container_registry_id = container_registry_id
        self.user_id = user_id

    @classmethod
    async def get(
        cls,
        session: AsyncSession,
        id: str | uuid.UUID,
    ) -> "AssociationContainerRegistriesUsers":
        query = sa.select(AssociationContainerRegistriesUsers).where(
            AssociationContainerRegistriesUsers.id == id
        )
        result = await session.execute(query)
        row = result.scalar()
        if row is None:
            raise NoResultFound
        return row

    @classmethod
    async def get_by_registry_id_and_user_id(
        cls,
        session: AsyncSession,
        registry_id: str | uuid.UUID,
        user_id: str | uuid.UUID,
    ) -> "AssociationContainerRegistriesUsers":
        query = sa.select(AssociationContainerRegistriesUsers).where(
            AssociationContainerRegistriesUsers.user_id == user_id
            and AssociationContainerRegistriesUsers.container_registry_id == registry_id
        )
        result = await session.execute(query)
        row = result.scalar()
        if row is None:
            raise NoResultFound
        return row


class AssociationContainerRegistriesUsers(graphene.ObjectType):
    class Meta:
        interfaces = (AsyncNode,)

    id = graphene.ID()
    container_registry_id = graphene.UUID(required=True)
    user_id = graphene.UUID(required=True)

    @classmethod
    def from_row(
        cls, ctx: GraphQueryContext, row: AssociationContainerRegistriesUsersRow
    ) -> "AssociationContainerRegistriesUsers":
        return cls(
            id=row.id,
            container_registry_id=row.container_registry_id,
            user_id=row.user_id,
        )

    @classmethod
    async def load(
        cls, ctx: GraphQueryContext, id: str | uuid.UUID
    ) -> "AssociationContainerRegistriesUsers":
        async with ctx.db.begin_readonly_session() as session:
            return cls.from_row(
                ctx,
                await AssociationContainerRegistriesUsersRow.get(
                    session,
                    id,
                ),
            )

    @classmethod
    async def load_by_registry_id_and_user_id(
        cls, ctx: GraphQueryContext, registry_id: str | uuid.UUID, user_id: str | uuid.UUID
    ) -> "AssociationContainerRegistriesUsers":
        async with ctx.db.begin_readonly_session() as session:
            return cls.from_row(
                ctx,
                await AssociationContainerRegistriesUsersRow.get_by_registry_id_and_user_id(
                    session,
                    registry_id,
                    user_id,
                ),
            )

    @classmethod
    async def list_by_registry_id(
        cls, ctx: GraphQueryContext, registry_id: str | uuid.UUID
    ) -> list["AssociationContainerRegistriesUsers"]:
        async with ctx.db.begin_readonly_session() as session:
            query = sa.select(AssociationContainerRegistriesUsers).where(
                AssociationContainerRegistriesUsers.container_registry_id == registry_id
            )
            result = await session.execute(query)
            return [cls.from_row(ctx, row) for row in result.scalars().all()]

    # @classmethod
    # async def list_by_project(
    #     cls, ctx: GraphQueryContext, project: str
    # ) -> list["AssociationContainerRegistriesUsers"]:
    #     async with ctx.db.begin_readonly_session() as session:
    #         query = sa.select(AssociationContainerRegistriesUsers).where(
    #             AssociationContainerRegistriesUsers.registry_id == registry_id
    #         )
    #         result = await session.execute(query)
    #         return [cls.from_row(ctx, row) for row in result.scalars().all()]

    @classmethod
    async def list_by_user_id(
        cls, ctx: GraphQueryContext, user_id: str | uuid.UUID
    ) -> list["AssociationContainerRegistriesUsers"]:
        async with ctx.db.begin_readonly_session() as session:
            query = sa.select(AssociationContainerRegistriesUsers).where(
                AssociationContainerRegistriesUsers.user_id == user_id
            )
            result = await session.execute(query)
            return [cls.from_row(ctx, row) for row in result.scalars().all()]


class CreateAssociationContainerRegistriesUsersInput(graphene.InputObjectType):
    container_registry_id = graphene.UUID(required=True)
    user_id = graphene.UUID(required=True)


class CreateAssociationContainerRegistriesUsers(graphene.Mutation):
    allowed_roles = (UserRole.SUPERADMIN,)
    id = graphene.UUID(required=True)
    association = graphene.Field(AssociationContainerRegistriesUsers)

    class Arguments:
        props = CreateAssociationContainerRegistriesUsersInput(required=True)

    @classmethod
    @privileged_mutation(
        UserRole.SUPERADMIN,
        lambda id, **kwargs: (None, id),
    )
    async def mutate(
        cls, root, info: graphene.ResolveInfo, props: CreateAssociationContainerRegistriesUsersInput
    ) -> "CreateAssociationContainerRegistriesUsers":
        ctx: GraphQueryContext = info.context

        input_config: dict[str, Any] = {
            "container_registry_id": props.container_registry_id,
            "user_id": props.user_id,
        }

        async with ctx.db.begin_session() as db_session:
            association_row = AssociationContainerRegistriesUsersRow(**input_config)
            db_session.add(association_row)
            await db_session.flush()
            await db_session.refresh(association_row)

            return cls(
                id=association_row.id,
                association=AssociationContainerRegistriesUsers.from_row(ctx, association_row),
            )


class DeleteAssociationContainerRegistriesUsersInput(graphene.InputObjectType):
    id = graphene.String(
        required=True, description="Object id. Can be either global id or object id"
    )


class DeleteAssociationContainerRegistriesUsers(graphene.Mutation):
    allowed_roles = (UserRole.SUPERADMIN,)
    id = graphene.UUID(required=True)

    class Arguments:
        props = DeleteAssociationContainerRegistriesUsersInput(required=True)

    @classmethod
    @privileged_mutation(
        UserRole.SUPERADMIN,
        lambda id, **kwargs: (None, id),
    )
    async def mutate(
        cls, root, info: graphene.ResolveInfo, props: DeleteAssociationContainerRegistriesUsersInput
    ) -> "DeleteAssociationContainerRegistriesUsers":
        ctx: GraphQueryContext = info.context

        async with ctx.db.begin_session() as db_session:
            _, _id = AsyncNode.resolve_global_id(info, props.id)
            association_id = uuid.UUID(_id) if _id else uuid.UUID(props.id)
            association_row = await AssociationContainerRegistriesUsers.load(ctx, association_id)
            await db_session.execute(
                sa.delete(AssociationContainerRegistriesUsers).where(
                    AssociationContainerRegistriesUsers.id == association_id
                )
            )

            return cls(
                association=AssociationContainerRegistriesUsers.from_row(ctx, association_row),
            )
