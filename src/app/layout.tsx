import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "M+ Debuff Encyclopedia", template: "%s | M+ Debuff Encyclopedia" },
  description: "A fast, curated Mythic+ mechanic reference for high-key players.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
