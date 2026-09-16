import { altarOfFangs } from "./altar-of-fangs";
import { blindingVale } from "./the-blinding-vale";
import { denOfNalorakk } from "./den-of-nalorakk";
import { kingsRest } from "./kings-rest";
import { murderRow } from "./murder-row";
import { rubyLifePools } from "./ruby-life-pools";
import { templeOfSethraliss } from "./temple-of-sethraliss";
import { voidscarArena } from "./voidscar-arena";

export const mechanics = [
  ...altarOfFangs,
  ...murderRow,
  ...denOfNalorakk,
  ...blindingVale,
  ...voidscarArena,
  ...kingsRest,
  ...rubyLifePools,
  ...templeOfSethraliss,
];

export { dungeons, presets, season } from "./season";
