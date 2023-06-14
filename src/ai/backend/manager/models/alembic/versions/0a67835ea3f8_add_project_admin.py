"""add_project_admin

Revision ID: 0a67835ea3f8
Revises: b4eb4eb9e12d
Create Date: 2023-06-14 15:21:29.609973

"""
import enum
import textwrap
from uuid import UUID

import sqlalchemy as sa
from alembic import op
from sqlalchemy.sql import text

from ai.backend.manager.models.user import UserRole, users

# revision identifiers, used by Alembic.
revision = "0a67835ea3f8"
down_revision = "b4eb4eb9e12d"
branch_labels = None
depends_on = None


enum_name = UserRole.__name__.lower()


class LegacyUserRole(str, enum.Enum):
    SUPERADMIN = "superadmin"
    ADMIN = "admin"
    USER = "user"
    MONITOR = "monitor"


role_values = set([role.value for role in UserRole])
legacy_role_values = set([role.value for role in LegacyUserRole])

new_names = role_values - legacy_role_values
legacy_names = legacy_role_values - role_values


BATCH_SIZE = 100


def _delete_enum_value(connection, enum_name, val):
    connection.execute(text(textwrap.dedent(f"""DELETE FROM pg_enum
                    WHERE enumlabel = '{val}'
                    AND enumtypid = (
                    SELECT oid FROM pg_type WHERE typname = '{enum_name}'
                );""")))


def _update_role_value(connection, from_, to_) -> None:
    while True:
        stmt = (
            sa.select([users.c.uuid])
            .where(users.c.role == from_)
            .order_by(users.c.uuid)
            .limit(BATCH_SIZE)
        )
        user_ids: list[UUID] = connection.scalars(stmt).all()
        if not user_ids:
            break
        connection.execute(sa.update(users).where(users.c.uuid.in_(user_ids)).values(role=to_))
        if len(user_ids) < BATCH_SIZE:
            break


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    conn = op.get_bind()

    for n in new_names:
        conn.execute(text(f"ALTER TYPE {enum_name} ADD VALUE '{n}';"))
    conn.commit()

    # replace "admin" to "domain_admin"
    _update_role_value(conn, LegacyUserRole.ADMIN, UserRole.DOMAIN_ADMIN)

    for n in legacy_names:
        _delete_enum_value(conn, enum_name, n)
    conn.commit()
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    conn = op.get_bind()

    for n in legacy_names:
        conn.execute(text(f"ALTER TYPE {enum_name} ADD VALUE '{n}';"))
    conn.commit()

    # replace "domain_admin" to "admin"
    _update_role_value(conn, UserRole.DOMAIN_ADMIN, LegacyUserRole.ADMIN)

    for n in new_names:
        _delete_enum_value(conn, enum_name, n)
    conn.commit()
    # ### end Alembic commands ###
