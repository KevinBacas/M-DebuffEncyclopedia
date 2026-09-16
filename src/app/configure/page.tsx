import { SiteHeader } from "@/components/branding";
import { ConfigurePanel } from "@/components/configure-panel";
import { mechanics, presets } from "@/lib/content-index";
export const metadata = { title: "Configure IDs | M+ Debuff Encyclopedia", description: "Build a clean list of Mythic+ spell IDs for your UI tools." };
export default function ConfigurePage() { return <><SiteHeader /><main className="shell page-shell"><section className="subpage-heading"><div className="eyebrow">UI configuration helper</div><h1>Build your tracking list.</h1><p>Select the mechanics you care about, then copy clean IDs into Ellesmere UI, WeakAuras, Cell, or any addon that accepts spell IDs.</p></section><ConfigurePanel mechanics={mechanics} presets={presets} /></main></>; }
