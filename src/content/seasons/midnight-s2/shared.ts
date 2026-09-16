import type { MechanicReference, Mechanic, SpellReference } from "../../schema";

export const recheck = {
  status: "needs-recheck" as const,
  gameVersion: "12.1",
  verifiedAt: "2026-09-16",
  verifiedBy: "M+ Debuff Encyclopedia curators",
};

export function wowhead(spellId: number, slug: string): MechanicReference {
  return { label: "Wowhead spell", url: `https://www.wowhead.com/spell=${spellId}/${slug}`, type: "wowhead" };
}

export function guide(url: string, label = "Season 2 dungeon guide"): MechanicReference {
  return { label, url, type: "guide" };
}

export function refs(spellId: number, slug: string, guideUrl: string): MechanicReference[] {
  return [wowhead(spellId, slug), guide(guideUrl)];
}

export function appliedAura(spellId: number): SpellReference {
  return { spellId, purpose: "applied-aura", trackable: true };
}

export function cast(spellId: number): SpellReference {
  return { spellId, purpose: "cast", trackable: false };
}

export function enemyAura(spellId: number): SpellReference {
  return { spellId, purpose: "enemy-aura", trackable: false };
}

export function makeMechanic(mechanic: Omit<Mechanic, "seasonId" | "review">): Mechanic {
  return { ...mechanic, seasonId: "midnight-s2", review: recheck };
}
