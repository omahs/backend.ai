"""add audit_logs table

Revision ID: 41f6bbb4a04a
Revises: 75ea2b136830
Create Date: 2024-03-31 14:57:34.598304

"""

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = "41f6bbb4a04a"
down_revision = "75ea2b136830"
branch_labels = None
depends_on = None


auditlogaction_choices = (
    "CREATE",
    "CHANGE",
    "DELETE",
    "PURGE",
)

auditlogtargettype_choices = (
    "user",
    "keypair",
    "group",
    "vfolder",
    "compute-session",
)

auditlogaction = postgresql.ENUM(*auditlogaction_choices)
auditlogtargettype = postgresql.ENUM(*auditlogtargettype_choices)


def upgrade():
    auditlogaction.create(op.get_bind())
    auditlogtargettype.create(op.get_bind())
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "audit_logs",
        sa.Column("user_id", sa.String(length=256), nullable=False),
        sa.Column("access_key", sa.String(length=20), nullable=False),
        sa.Column("email", sa.String(length=64), nullable=False),
        sa.Column(
            "action", sa.Enum(*auditlogaction_choices, name="auditlogaction"), nullable=False
        ),
        sa.Column("data", postgresql.JSONB(astext_type=sa.Text()), nullable=True),
        sa.Column(
            "target_type",
            sa.Enum(*auditlogtargettype_choices, name="auditlogtargettype"),
            nullable=False,
        ),
        sa.Column("target", sa.String(length=64), nullable=True),
        sa.Column(
            "created_at", sa.DateTime(timezone=True), server_default=sa.text("now()"), nullable=True
        ),
        sa.Column("success", sa.Boolean(), server_default=sa.text("true"), nullable=False),
        sa.Column("rest_api_path", sa.String(length=256), nullable=True),
        sa.Column("gql_query", sa.String(length=256), nullable=True),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("audit_logs")
    # ### end Alembic commands ###
