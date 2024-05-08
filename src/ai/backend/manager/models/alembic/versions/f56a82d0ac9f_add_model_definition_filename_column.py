"""add model_definition_path column

Revision ID: f56a82d0ac9f
Revises: dddf9be580f5
Create Date: 2024-04-24 23:17:02.139270

"""

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "f56a82d0ac9f"
down_revision = "dddf9be580f5"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "endpoints", sa.Column("model_definition_path", sa.String(length=512), nullable=True)
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("endpoints", "model_definition_path")
    # ### end Alembic commands ###
