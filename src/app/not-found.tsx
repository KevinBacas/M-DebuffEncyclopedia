import Link from "next/link";
export default function NotFound() { return <main className="not-found"><span className="brand-mark">M+</span><h1>That mechanic isn’t in the index.</h1><p>Try the explorer for the current reviewed season.</p><Link className="button primary" href="/">Back to explorer</Link></main>; }
