import { dungeons, mechanics, season } from "../src/lib/content-index";

const ids = new Set<string>();
const errors: string[] = [];
for (const mechanic of mechanics) {
  if (ids.has(mechanic.id)) errors.push(`Duplicate mechanic ID: ${mechanic.id}`);
  ids.add(mechanic.id);
  if (!season.dungeonIds.includes(mechanic.dungeonId)) errors.push(`Unknown dungeon for ${mechanic.id}`);
  if (!mechanic.name || !mechanic.summary || !mechanic.recommendedResponse) errors.push(`Missing copy for ${mechanic.id}`);
  if (!mechanic.references.length) errors.push(`Missing references for ${mechanic.id}`);
  if (!mechanic.spellRefs.length) errors.push(`Missing spell refs for ${mechanic.id}`);
}
for (const dungeonId of season.dungeonIds) {
  if (!dungeons.some((dungeon) => dungeon.id === dungeonId)) errors.push(`Season references unknown dungeon: ${dungeonId}`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${mechanics.length} mechanics across ${dungeons.length} season dungeons.`);
console.log("Coverage report:");
for (const dungeon of dungeons.sort((a, b) => a.displayOrder - b.displayOrder)) {
  const dungeonMechanics = mechanics.filter((mechanic) => mechanic.dungeonId === dungeon.id);
  const needsReview = dungeonMechanics.filter((mechanic) => mechanic.review.status !== "reviewed").length;
  console.log(`- ${dungeon.name}: ${dungeonMechanics.length} mechanics (${needsReview} needs re-check)`);
}
