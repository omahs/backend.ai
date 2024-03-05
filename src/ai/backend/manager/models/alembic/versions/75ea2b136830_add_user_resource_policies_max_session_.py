"""add user_resource_policies.max_session_count_per_model_session

Revision ID: 75ea2b136830
Revises: 589c764a18f1
Create Date: 2024-03-04 22:21:49.888739

"""

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "75ea2b136830"
down_revision = "589c764a18f1"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "user_resource_policies",
        sa.Column("max_session_count_per_model_session", sa.Integer(), nullable=True, default=10),
    )
    op.execute("UPDATE user_resource_policies SET max_session_count_per_model_session = 10")
    op.alter_column("user_resource_policies", "max_session_count_per_model_session", nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("user_resource_policies", "max_session_count_per_model_session")
    # ### end Alembic commands ###
