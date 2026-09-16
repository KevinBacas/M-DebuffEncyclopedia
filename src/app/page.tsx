import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/branding";
import { Explorer } from "@/components/explorer";
import { dungeons, mechanics, season } from "@/lib/content-index";

export const metadata: Metadata = { title: "Mechanic Explorer", description: "Fast, curated Mythic+ debuff and mechanic reference for high-key players." };

export default function Home() {
  return <><SiteHeader /><main className="shell page-shell"><section className="hero"><div><div className="season-chip"><span className="live-dot" /> Active season · {season.patch}</div><h1>Know the mechanic<br /><em>before it happens.</em></h1><p className="hero-copy">A practical, curated reference for the debuffs, casts, and dangerous moments that decide Mythic+ keys.</p></div><div className="hero-stats"><div><strong>{mechanics.length}</strong><span>indexed mechanics</span></div><div><strong>{dungeons.length}</strong><span>dungeons indexed</span></div><div><strong>{season.dungeonIds.length}</strong><span>season pool</span></div></div></section><Suspense fallback={<div className="empty-state" /> }><Explorer mechanics={mechanics} dungeons={dungeons} /></Suspense></main><footer className="site-footer"><div className="shell"><span>Unofficial community reference · {season.name}</span><span>Guidance is human-curated and patch-sensitive.</span></div></footer></>;
}
