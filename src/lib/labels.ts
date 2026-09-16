import type { GameplayCategory, MechanicKind, Priority, Role } from "@/content/schema";

export const categoryLabels: Record<GameplayCategory, string> = {
  "dispel-immediately": "Dispel immediately",
  "dispel-when-safe": "Dispel when safe",
  "use-defensive": "Use a defensive",
  "tank-mechanic": "Tank mechanic",
  avoidable: "Avoidable",
  "healer-check": "Healer check",
  "ignore-low-priority": "Low priority",
};

export const roleLabels: Record<Role, string> = { tank: "Tank", healer: "Healer", dps: "DPS" };
export const kindLabels: Record<MechanicKind, string> = { "player-debuff": "Player debuff", "enemy-buff": "Enemy aura", cast: "Cast", "ground-effect": "Ground effect", other: "Mechanic" };
export const priorityLabels: Record<Priority, string> = { critical: "Critical", high: "High", medium: "Medium", low: "Low" };
export const priorityRank: Record<Priority, number> = { critical: 0, high: 1, medium: 2, low: 3 };

export const priorityClass: Record<Priority, string> = {
  critical: "priority-critical",
  high: "priority-high",
  medium: "priority-medium",
  low: "priority-low",
};
