import type { GameplayCategory, Mechanic, Role } from "@/content/schema";
import { categoryLabels, priorityRank } from "@/lib/labels";
import { getDungeon } from "@/lib/content-index";

export interface ExplorerFilters {
  query: string;
  dungeon: string;
  role: string;
  category: string;
  priority: string;
  kind: string;
  dispel: string;
  sourceType: string;
}

export const defaultFilters: ExplorerFilters = { query: "", dungeon: "", role: "", category: "", priority: "", kind: "", dispel: "", sourceType: "" };

const normalize = (value: string) => value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function filterMechanics(list: Mechanic[], filters: ExplorerFilters): Mechanic[] {
  const query = normalize(filters.query.trim());
  return list.filter((mechanic) => {
    const dungeon = getDungeon(mechanic.dungeonId);
    const haystack = normalize([
      mechanic.name,
      dungeon?.name ?? "",
      mechanic.sources.map((source) => source.name).join(" "),
      mechanic.summary,
      mechanic.spellRefs.map((ref) => ref.spellId).join(" "),
      categoryLabels[mechanic.primaryCategory],
    ].join(" "));
    return (!query || haystack.includes(query))
      && (!filters.dungeon || mechanic.dungeonId === filters.dungeon)
      && (!filters.role || mechanic.relevantRoles.includes(filters.role as Role))
      && (!filters.category || [mechanic.primaryCategory, ...mechanic.secondaryCategories].includes(filters.category as GameplayCategory))
      && (!filters.priority || mechanic.priority === filters.priority)
      && (!filters.kind || mechanic.kind === filters.kind)
      && (!filters.dispel || mechanic.dispelType === filters.dispel)
      && (!filters.sourceType || mechanic.sourceType === filters.sourceType);
  }).sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority] || a.name.localeCompare(b.name));
}

export function filtersFromSearchParams(params: Record<string, string | string[] | undefined>): ExplorerFilters {
  const get = (key: keyof ExplorerFilters) => typeof params[key] === "string" ? params[key] as string : "";
  return { query: get("query"), dungeon: get("dungeon"), role: get("role"), category: get("category"), priority: get("priority"), kind: get("kind"), dispel: get("dispel"), sourceType: get("sourceType") };
}
