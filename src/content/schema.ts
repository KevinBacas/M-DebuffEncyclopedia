export type Role = "tank" | "healer" | "dps";

export type MechanicKind =
  | "player-debuff"
  | "enemy-buff"
  | "cast"
  | "ground-effect"
  | "other";

export type GameplayCategory =
  | "dispel-immediately"
  | "dispel-when-safe"
  | "use-defensive"
  | "tank-mechanic"
  | "avoidable"
  | "healer-check"
  | "ignore-low-priority";

export type DispelType =
  | "magic"
  | "poison"
  | "disease"
  | "curse"
  | "bleed"
  | "enrage";

export type Priority = "critical" | "high" | "medium" | "low";

export type SpellPurpose =
  | "applied-aura"
  | "cast"
  | "enemy-aura"
  | "damage"
  | "visual"
  | "ground-effect";

export interface SpellReference {
  spellId: number;
  purpose: SpellPurpose;
  trackable: boolean;
}

export interface MechanicReference {
  label: string;
  url: string;
  type: "official" | "wowhead" | "logs" | "guide" | "other";
}

export interface Mechanic {
  id: string;
  seasonId: string;
  dungeonId: string;
  name: string;
  kind: MechanicKind;
  sourceType: "boss" | "trash" | "environment";
  sources: Array<{ name: string; npcId?: number; encounterId?: number }>;
  relevantRoles: Role[];
  primaryCategory: GameplayCategory;
  secondaryCategories: GameplayCategory[];
  dispelType?: DispelType;
  priority: Priority;
  spellRefs: SpellReference[];
  summary: string;
  recommendedResponse: string;
  trackProminently: boolean;
  highKeyNotes?: string;
  avoidable?: boolean;
  references: MechanicReference[];
  review: {
    status: "draft" | "reviewed" | "needs-recheck";
    gameVersion: string;
    verifiedAt: string;
    verifiedBy: string;
  };
}

export interface Dungeon {
  id: string;
  name: string;
  expansion: string;
  displayOrder: number;
  status: "pilot" | "needs-review" | "planned";
  blizzardSlug?: string;
}

export interface Season {
  id: string;
  name: string;
  expansion: string;
  patch: string;
  status: "active" | "archived";
  lastReviewedAt: string;
  dungeonIds: string[];
}

export interface SpellMetadata {
  spellId: number;
  name: string;
  iconUrl: string;
  wowheadUrl: string;
  syncedAt: string;
}

export interface Preset {
  id: string;
  label: string;
  description: string;
  mechanicIds?: string[];
  filters?: Partial<{
    roles: Role[];
    categories: GameplayCategory[];
    dispels: DispelType[];
    trackableOnly: boolean;
  }>;
}
