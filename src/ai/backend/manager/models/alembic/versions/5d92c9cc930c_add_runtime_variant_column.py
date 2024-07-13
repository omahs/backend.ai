"""add runtime_variant column

Revision ID: 5d92c9cc930c
Revises: 679e5721e94d
Create Date: 2024-06-05 15:47:57.541242

"""

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "5d92c9cc930c"
down_revision = "679e5721e94d"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "endpoints",
        sa.Column("runtime_variant", sa.VARCHAR, nullable=True, server_default="custom"),
    )
    conn = op.get_bind()
    conn.exec_driver_sql("UPDATE endpoints SET runtime_variant = 'custom';")
    op.alter_column("endpoints", "runtime_variant", nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("endpoints", "runtime_variant")
    # ### end Alembic commands ###