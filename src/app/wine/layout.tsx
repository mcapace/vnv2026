import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wineries Across Napa Valley | Wine Spectator × Visit Napa Valley",
  description:
    "Etude, Robert Mondavi Winery, and Louis M. Martini Winery: three Napa Valley estates where Pinot, Cabernet, and hospitality tell the valley story.",
};

export default function WineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
