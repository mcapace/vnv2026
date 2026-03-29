import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A World in 30 Miles | Visit Napa Valley × Wine Spectator",
  description:
    "Discover why Napa Valley rewards multi-day stays like no other destination. Explore world-class wine, dining, lodging, and experiences — all within 30 remarkable miles.",
  openGraph: {
    title: "A World in 30 Miles | Visit Napa Valley",
    description:
      "Napa Valley — where every mile tells a story. Stay, dine, wine, and explore in the world's most celebrated valley.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
