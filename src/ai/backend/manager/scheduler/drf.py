from __future__ import annotations

import logging
from collections import defaultdict
from decimal import Decimal
from typing import Any, Dict, Mapping, Optional, Sequence, Set

import trafaret as t

from ai.backend.common.logging import BraceStyleAdapter
from ai.backend.common.types import (
    AccessKey,
    AgentId,
    AgentSelectionStrategy,
    ResourceSlot,
    SessionId,
)
from ai.backend.manager.scheduler.utils import select_agent

from ..models import AgentRow, SessionRow
from ..models.scaling_group import ScalingGroupOpts
from .types import AbstractScheduler, KernelInfo, SchedulingContext

log = BraceStyleAdapter(logging.getLogger("ai.backend.manager.scheduler"))


class DRFScheduler(AbstractScheduler):
    config_iv = t.Dict({}).allow_extra("*")
    per_user_dominant_share: Dict[AccessKey, Decimal]
    total_capacity: ResourceSlot

    def __init__(self, sgroup_opts: ScalingGroupOpts, config: Mapping[str, Any]) -> None:
        super().__init__(sgroup_opts, config)
        self.per_user_dominant_share = defaultdict(lambda: Decimal(0))

    def pick_session(
        self,
        total_capacity: ResourceSlot,
        pending_sessions: Sequence[SessionRow],
        existing_sessions: Sequence[SessionRow],
    ) -> Optional[SessionId]:
        self.total_capacity = total_capacity

        # Calculate the initial dominant shares of all users.
        for existing_sess in existing_sessions:
            dominant_share = Decimal(0)
            self.total_capacity.sync_keys(existing_sess.occupying_slots)
            for slot, value in existing_sess.occupying_slots.items():
                slot_cap = Decimal(self.total_capacity[slot])
                if slot_cap == 0:
                    continue
                slot_share = Decimal(value) / slot_cap
                if dominant_share < slot_share:
                    dominant_share = slot_share
            if self.per_user_dominant_share[existing_sess.access_key] < dominant_share:
                self.per_user_dominant_share[existing_sess.access_key] = dominant_share
        log.debug("per-user dominant share: {}", dict(self.per_user_dominant_share))

        # Find who has the least dominant share among the pending session.
        users_with_pending_session: Set[AccessKey] = {
            pending_sess.access_key for pending_sess in pending_sessions
        }
        if not users_with_pending_session:
            return None
        least_dominant_share_user, dshare = min(
            ((akey, self.per_user_dominant_share[akey]) for akey in users_with_pending_session),
            key=lambda item: item[1],
        )
        log.debug("least dominant share user: {} ({})", least_dominant_share_user, dshare)

        # Pick the first pending session of the user
        # who has the lowest dominant share.
        for pending_sess in pending_sessions:
            if pending_sess.access_key == least_dominant_share_user:
                return SessionId(pending_sess.id)

        return None

    async def _assign_agent(
        self,
        possible_agents: Sequence[AgentRow],
        pending_session_or_kernel: SessionRow | KernelInfo,
        agent_selection_strategy: AgentSelectionStrategy,
        agent_selection_resource_priority: list[str],
        sgroup_name: Optional[str] = None,
        sched_ctx: Optional[SchedulingContext] = None,
        requested_architecture: Optional[str] = None,
    ) -> Optional[AgentId]:
        # If some predicate checks for a picked session fail,
        # this method is NOT called at all for the picked session.
        # In such case, we just skip updating self.per_user_dominant_share state
        # and the scheduler dispatcher continues to pick another session within the same scaling group.
        access_key = pending_session_or_kernel.access_key
        requested_slots = pending_session_or_kernel.requested_slots

        # We have one or more agents that can host the picked session.

        # Update the dominant share.
        # This is required to use to the latest dominant share information
        # when iterating over multiple pending sessions in a single scaling group.
        dominant_share_from_request = Decimal(0)
        for slot, value in requested_slots.items():
            self.total_capacity.sync_keys(requested_slots)
            slot_cap = Decimal(self.total_capacity[slot])
            if slot_cap == 0:
                continue
            slot_share = Decimal(value) / slot_cap
            if dominant_share_from_request < slot_share:
                dominant_share_from_request = slot_share
        if self.per_user_dominant_share[access_key] < dominant_share_from_request:
            self.per_user_dominant_share[access_key] = dominant_share_from_request

        return await select_agent(
            possible_agents,
            pending_session_or_kernel,
            agent_selection_strategy,
            agent_selection_resource_priority,
            sgroup_name,
            sched_ctx,
            requested_architecture,
        )

    async def assign_agent_for_session(
        self,
        possible_agents: Sequence[AgentRow],
        pending_session: SessionRow,
        agent_selection_strategy: AgentSelectionStrategy,
        agent_selection_resource_priority: list[str],
        sgroup_name: Optional[str] = None,
        sched_ctx: Optional[SchedulingContext] = None,
        requested_architecture: Optional[str] = None,
    ) -> Optional[AgentId]:
        return await self._assign_agent(
            possible_agents,
            pending_session,
            agent_selection_strategy,
            agent_selection_resource_priority,
            sgroup_name,
            sched_ctx,
            requested_architecture,
        )

    async def assign_agent_for_kernel(
        self,
        possible_agents: Sequence[AgentRow],
        pending_kernel: KernelInfo,
        agent_selection_strategy: AgentSelectionStrategy,
        agent_selection_resource_priority: list[str],
        sgroup_name: Optional[str] = None,
        sched_ctx: Optional[SchedulingContext] = None,
        requested_architecture: Optional[str] = None,
    ) -> Optional[AgentId]:
        return await self._assign_agent(
            possible_agents,
            pending_kernel,
            agent_selection_strategy,
            agent_selection_resource_priority,
            sgroup_name,
            sched_ctx,
            requested_architecture,
        )
