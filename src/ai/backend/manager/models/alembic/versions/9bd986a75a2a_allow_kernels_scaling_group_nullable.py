"""allow_kernels_scaling_group_nullable

Revision ID: 9bd986a75a2a
Revises: 513164749de4
Create Date: 2019-09-20 14:39:57.761791

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "9bd986a75a2a"
down_revision = "513164749de4"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column(
        "kernels",
        "scaling_group",
        existing_type=sa.VARCHAR(length=64),
        nullable=True,
        existing_server_default=sa.text("'default'::character varying"),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column(
        "kernels",
        "scaling_group",
        existing_type=sa.VARCHAR(length=64),
        nullable=False,
        existing_server_default=sa.text("'default'::character varying"),
    )
    # ### end Alembic commands ###
