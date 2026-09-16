import { dungeons, mechanics, presets, season } from "@/content/seasons/midnight-s2";
import type { Dungeon, Mechanic, Preset } from "@/content/schema";

export { mechanics };
export { dungeons, presets, season };

export function getDungeon(id: string): Dungeon | undefined {
  return dungeons.find((dungeon) => dungeon.id === id);
}

export function getMechanic(id: string): Mechanic | undefined {
  return mechanics.find((mechanic) => mechanic.id === id);
}

export function getMechanicsForDungeon(id: string): Mechanic[] {
  return mechanics.filter((mechanic) => mechanic.dungeonId === id);
}

export function getPreset(id: string): Preset | undefined {
  return presets.find((preset) => preset.id === id);
}

export function getSpellIds(mechanicList: Mechanic[], includeNonAura = false): number[] {
  return Array.from(new Set(mechanicList.flatMap((mechanic) => mechanic.spellRefs
    .filter((ref) => includeNonAura || (ref.trackable && ref.purpose === "applied-aura"))
    .map((ref) => ref.spellId))));
}

export function getDungeonsWithCounts() {
  return dungeons.map((dungeon) => ({ ...dungeon, count: getMechanicsForDungeon(dungeon.id).length }));
}
