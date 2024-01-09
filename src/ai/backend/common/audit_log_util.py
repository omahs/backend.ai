import contextvars
from typing import Any

import sqlalchemy as sa
from aiohttp import web
from aiohttp.typedefs import Handler
from pydantic.v1.utils import deep_update

from ai.backend.manager.models import audit_logs
from ai.backend.storage.context import RootContext, log

audit_log_data: contextvars.ContextVar[dict[str, Any]] = contextvars.ContextVar(
    "audit_log_data", default={}
)


@web.middleware
async def audit_log_middleware(request: web.Request, handler: Handler) -> web.StreamResponse:
    # TODO: in near future we can change this condition to dict so we can add more conditions

    if request.method == "GET":
        return await handler(request)

    root_ctx: RootContext = request.app["_root.context"]
    user_uuid = str(request["user"]["uuid"])
    access_key = request["keypair"]["access_key"]
    user_email = request["user"]["email"]

    from datetime import datetime

    audit_log_data.set({
        "user_id": user_uuid,
        "access_key": access_key,
        "email": user_email,
        "action": None,
        "data": {"before": {}, "after": {}},
        "target_type": None,
        "target": None,
        "created_at": datetime.utcnow(),
        "success": True,
        "rest_api_path": f"{request.method} {request.path}",
    })
    log.info("AUDIT_LOG in middleware: {}", audit_log_data.get())

    try:
        return await handler(request)
    except Exception:
        audit_log_data.set(
            updated_data(
                new_data={
                    "success": False,
                }
            )
        )
        raise
    finally:
        try:
            log.info("AUDIT_LOG in after middleware try: {}", audit_log_data.get())
            async with root_ctx.db.begin_session() as sess:
                await sess.execute(sa.insert(audit_logs).values(audit_log_data.get()))
        except Exception as e:
            log.error("Failed to write audit log {}", e, exc_info=True)


def updated_data(new_data: dict[str, Any]) -> dict[str, Any]:
    current_audit_log_data = audit_log_data.get().copy()
    return deep_update(current_audit_log_data, new_data)
