import Link from "next/link";

export function Brand() { return <Link href="/" className="brand" aria-label="M+ Debuff Encyclopedia home"><span className="brand-mark">M+</span><span><strong>Debuff</strong> Encyclopedia</span></Link>; }
export function SiteHeader() { return <header className="site-header"><div className="shell header-inner"><Brand /><nav className="site-nav" aria-label="Primary navigation"><Link href="/">Explorer</Link><Link href="/configure">Configure IDs</Link></nav></div></header>; }
