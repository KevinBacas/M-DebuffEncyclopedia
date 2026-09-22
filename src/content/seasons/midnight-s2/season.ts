import type { Dungeon, Preset, Season } from "../../schema";

export const season: Season = {
  id: "midnight-s2",
  name: "Midnight Season 2",
  expansion: "Midnight",
  patch: "12.1",
  status: "active",
  lastReviewedAt: "2026-09-22",
  dungeonIds: [
    "altar-of-fangs",
    "murder-row",
    "den-of-nalorakk",
    "the-blinding-vale",
    "voidscar-arena",
    "kings-rest",
    "ruby-life-pools",
    "temple-of-sethraliss",
  ],
};

export const dungeons: Dungeon[] = [
  { id: "altar-of-fangs", name: "Altar of Fangs", expansion: "Midnight", displayOrder: 1, status: "pilot" },
  { id: "murder-row", name: "Murder Row", expansion: "Midnight", displayOrder: 2, status: "needs-review" },
  { id: "den-of-nalorakk", name: "Den of Nalorakk", expansion: "Midnight", displayOrder: 3, status: "needs-review" },
  { id: "the-blinding-vale", name: "The Blinding Vale", expansion: "Midnight", displayOrder: 4, status: "needs-review" },
  { id: "voidscar-arena", name: "Voidscar Arena", expansion: "Midnight", displayOrder: 5, status: "needs-review" },
  { id: "kings-rest", name: "King's Rest", expansion: "Battle for Azeroth", displayOrder: 6, status: "needs-review" },
  { id: "ruby-life-pools", name: "Ruby Life Pools", expansion: "Dragonflight", displayOrder: 7, status: "pilot" },
  { id: "temple-of-sethraliss", name: "Temple of Sethraliss", expansion: "Battle for Azeroth", displayOrder: 8, status: "needs-review" },
];

export const presets: Preset[] = [
  { id: "tank-dangerous", label: "Tank dangerous", description: "High-impact tank mechanics and defensives.", filters: { roles: ["tank"], trackableOnly: true } },
  { id: "important-dispels", label: "Important dispels", description: "Player auras where the dispel decision matters most.", filters: { categories: ["dispel-immediately", "dispel-when-safe"], trackableOnly: true } },
  { id: "healer-checks", label: "Healer checks", description: "Auras and events that test healer throughput or triage.", filters: { roles: ["healer"], categories: ["healer-check", "dispel-immediately"], trackableOnly: false } },
];
