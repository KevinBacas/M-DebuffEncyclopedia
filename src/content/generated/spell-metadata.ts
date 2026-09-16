import type { SpellMetadata } from "../schema";

const icon = (name: string) => `https://wow.zamimg.com/images/wow/icons/large/${name}.jpg`;

/** Objective metadata is kept separate from editorial mechanic guidance. */
export const spellMetadata: Record<number, SpellMetadata> = {
  372808: { spellId: 372808, name: "Chillstorm", iconUrl: icon("spell_frost_ice-shards"), wowheadUrl: "https://www.wowhead.com/spell=372808", syncedAt: "2026-09-08" },
  372858: { spellId: 372858, name: "Primal Chill", iconUrl: icon("spell_frost_frostshock"), wowheadUrl: "https://www.wowhead.com/spell=372858", syncedAt: "2026-09-08" },
  372863: { spellId: 372863, name: "Storming", iconUrl: icon("spell_nature_chainlightning"), wowheadUrl: "https://www.wowhead.com/spell=372863", syncedAt: "2026-09-08" },
  372682: { spellId: 372682, name: "Infuse", iconUrl: icon("ability_shaman_astralshift"), wowheadUrl: "https://www.wowhead.com/spell=372682", syncedAt: "2026-09-08" },
  1234001: { spellId: 1234001, name: "Toxic Atrophy", iconUrl: icon("spell_nature_corrosivebreath"), wowheadUrl: "https://www.wowhead.com/spell=1234001", syncedAt: "2026-09-08" },
  1234002: { spellId: 1234002, name: "Fang Empowered", iconUrl: icon("ability_poisonsting"), wowheadUrl: "https://www.wowhead.com/spell=1234002", syncedAt: "2026-09-08" },
  1234003: { spellId: 1234003, name: "Caustic Mist", iconUrl: icon("spell_nature_acid_01"), wowheadUrl: "https://www.wowhead.com/spell=1234003", syncedAt: "2026-09-08" },
  1234004: { spellId: 1234004, name: "Venomous Brand", iconUrl: icon("ability_poisonmending"), wowheadUrl: "https://www.wowhead.com/spell=1234004", syncedAt: "2026-09-08" },
  1228198: { spellId: 1228198, name: "Corroding Spittle", iconUrl: icon("spell_shadow_creepingplague"), wowheadUrl: "https://www.wowhead.com/spell=1228198/corroding-spittle", syncedAt: "2026-09-16" },
  474515: { spellId: 474515, name: "Heartstop Poison", iconUrl: icon("ability_poisonweapon"), wowheadUrl: "https://www.wowhead.com/spell=474515/heartstop-poison", syncedAt: "2026-09-16" },
  1217973: { spellId: 1217973, name: "Curse of Doom", iconUrl: icon("spell_shadow_antimagicshell"), wowheadUrl: "https://www.wowhead.com/spell=1217973/curse-of-doom", syncedAt: "2026-09-16" },
  1250043: { spellId: 1250043, name: "Melt Armor", iconUrl: icon("ability_warrior_sunderarmor"), wowheadUrl: "https://www.wowhead.com/spell=1250043/melt-armor", syncedAt: "2026-09-16" },
  1263971: { spellId: 1263971, name: "Mind-Numbing Poison", iconUrl: icon("ability_poisonmindnumbing"), wowheadUrl: "https://www.wowhead.com/spell=1263971/mind-numbing-poison", syncedAt: "2026-09-16" },
  1234846: { spellId: 1234846, name: "Toxic Spores", iconUrl: icon("spell_nature_corrosivebreath"), wowheadUrl: "https://www.wowhead.com/spell=1234846/toxic-spores", syncedAt: "2026-09-16" },
  1235548: { spellId: 1235548, name: "Glacial Torment", iconUrl: icon("spell_frost_frostnova"), wowheadUrl: "https://www.wowhead.com/spell=1235548/glacial-torment", syncedAt: "2026-09-16" },
  1235072: { spellId: 1235072, name: "Resourceful Measures", iconUrl: icon("spell_shadow_mindsteal"), wowheadUrl: "https://www.wowhead.com/ptr/spell=1235072/resourceful-measures", syncedAt: "2026-09-16" },
  1245593: { spellId: 1245593, name: "Putrid Burst", iconUrl: icon("spell_shadow_unstableaffliction_3"), wowheadUrl: "https://www.wowhead.com/ptr/spell=1245593/putrid-burst", syncedAt: "2026-09-16" },
  269972: { spellId: 269972, name: "Hex Volley", iconUrl: icon("spell_shaman_hex"), wowheadUrl: "https://www.wowhead.com/spell=269972/hex-volley", syncedAt: "2026-09-16" },
  270492: { spellId: 270492, name: "Hex", iconUrl: icon("spell_shaman_hex"), wowheadUrl: "https://www.wowhead.com/spell=270492/hex", syncedAt: "2026-09-16" },
  1290797: { spellId: 1290797, name: "Lightning Bite", iconUrl: icon("spell_nature_chainlightning"), wowheadUrl: "https://www.wowhead.com/spell=1290797/lightning-bite", syncedAt: "2026-09-16" },
  1288457: { spellId: 1288457, name: "Tempest Winds", iconUrl: icon("spell_nature_cyclone"), wowheadUrl: "https://www.wowhead.com/spell=1288457/tempest-winds", syncedAt: "2026-09-16" },
  1265942: { spellId: 1265942, name: "Flourishing Stride", iconUrl: icon("spell_nature_giftofthewild"), wowheadUrl: "https://www.wowhead.com/spell=1265942/flourishing-stride", syncedAt: "2026-09-16" },
};

export function getSpellMetadata(spellId: number): SpellMetadata {
  return spellMetadata[spellId] ?? {
    spellId,
    name: `Spell ${spellId}`,
    iconUrl: icon("inv_misc_questionmark"),
    wowheadUrl: `https://www.wowhead.com/spell=${spellId}`,
    syncedAt: "not-synced",
  };
}
