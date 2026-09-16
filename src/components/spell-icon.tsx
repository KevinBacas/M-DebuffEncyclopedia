"use client";
import Image from "next/image";
import { useState } from "react";
import { getSpellMetadata } from "@/content/generated/spell-metadata";
export function SpellIcon({ spellId, size = 42 }: { spellId: number; size?: number }) { const [failed, setFailed] = useState(false); const metadata = getSpellMetadata(spellId); return failed ? <span className="spell-icon spell-icon-fallback" style={{ width: size, height: size }} aria-label={`Icon unavailable for ${metadata.name}`}>✦</span> : <Image className="spell-icon" src={metadata.iconUrl} alt="" width={size} height={size} unoptimized onError={() => setFailed(true)} />; }
