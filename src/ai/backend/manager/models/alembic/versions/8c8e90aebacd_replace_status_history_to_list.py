"""Replace sessions, kernels's status_history's type map with list

Revision ID: 8c8e90aebacd
Revises: dddf9be580f5
Create Date: 2024-01-26 11:19:23.075014

"""

from alembic import op

# revision identifiers, used by Alembic.
revision = "8c8e90aebacd"
down_revision = "dddf9be580f5"
branch_labels = None
depends_on = None


def upgrade():
    op.execute(
        """
        WITH data AS (
            SELECT id,
                (jsonb_each(status_history)).key AS status,
                (jsonb_each(status_history)).value AS timestamp
            FROM kernels
        )
        UPDATE kernels
        SET status_history = (
            SELECT jsonb_agg(
                jsonb_build_object('status', status, 'timestamp', timestamp)
            )
            FROM data
            WHERE data.id = kernels.id
        );
    """
    )
    op.execute("UPDATE kernels SET status_history = '[]'::jsonb WHERE status_history IS NULL;")
    op.alter_column("kernels", "status_history", nullable=False, default=[])

    op.execute(
        """
        WITH data AS (
            SELECT id,
                (jsonb_each(status_history)).key AS status,
                (jsonb_each(status_history)).value AS timestamp
            FROM sessions
        )
        UPDATE sessions
        SET status_history = (
            SELECT jsonb_agg(
                jsonb_build_object('status', status, 'timestamp', timestamp)
            )
            FROM data
            WHERE data.id = sessions.id
        );
    """
    )
    op.execute("UPDATE sessions SET status_history = '[]'::jsonb WHERE status_history IS NULL;")
    op.alter_column("sessions", "status_history", nullable=False, default=[])


def downgrade():
    op.execute(
        """
        WITH data AS (
            SELECT id,
                jsonb_object_agg(
                    elem->>'status', elem->>'timestamp'
                ) AS new_status_history
            FROM kernels,
            jsonb_array_elements(status_history) AS elem
            GROUP BY id
        )
        UPDATE kernels
        SET status_history = data.new_status_history
        FROM data
        WHERE data.id = kernels.id;
    """
    )
    op.alter_column("kernels", "status_history", nullable=True, default=None)
    op.execute("UPDATE kernels SET status_history = NULL WHERE status_history = '[]'::jsonb;")

    op.execute(
        """
        WITH data AS (
            SELECT id,
                jsonb_object_agg(
                    elem->>'status', elem->>'timestamp'
                ) AS new_status_history
            FROM sessions,
            jsonb_array_elements(status_history) AS elem
            GROUP BY id
        )
        UPDATE sessions
        SET status_history = data.new_status_history
        FROM data
        WHERE data.id = sessions.id;
    """
    )
    op.alter_column("sessions", "status_history", nullable=True, default=None)
    op.execute("UPDATE sessions SET status_history = NULL WHERE status_history = '[]'::jsonb;")
