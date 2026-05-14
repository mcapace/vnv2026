"use client";

import { useRef, useMemo, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Cat = "Stay" | "Wine" | "Dine" | "Explore";

/** Client asset pack (URLs encode spaces). */
const img = (path: string) => encodeURI(`/images/Assets for Hub/${path}`);
/** New partner pack under `public/Partner Images /VNV Partner Images/` (note trailing space in folder name). */
const partnerPack = (relativePath: string) =>
  encodeURI(`/Partner Images /VNV Partner Images/${relativePath}`);
const CIA_GROVE = "https://www.ciagroverestaurant.com/";

const partnerCards: Array<{
  name: string;
  category: Cat;
  description: string;
  image: string;
  objectPosition?: string;
  href: string;
}> = [
  {
    name: "Carneros Resort & Spa",
    category: "Stay",
    description: "Cottages at the edge of Carneros fog and vines.",
    image: partnerPack("Carneros Resort and Spa/Carneros Resort and Spa Hilltop Pool Hero 1.jpg"),
    objectPosition: "center 38%",
    href: "https://www.carnerosresort.com/",
  },
  {
    name: "Mount View Hotel & Inn",
    category: "Stay",
    description: "Spacious guest rooms and a geothermal mineral hot spring tub.",
    image: img("Partner Images/Mount View/POOL-ACCESS-MVH-SPA.jpg"),
    objectPosition: "center 48%",
    href: "https://www.mountviewhotel.com/",
  },
  {
    name: "Etude Wines",
    category: "Wine",
    description: "Pinot Noir on the terrace.",
    image: img("Partner Images/Etude/ETU_Winery1_HR.jpg"),
    objectPosition: "center 45%",
    href: "https://www.etudewines.com/",
  },
  // TODO: Replace with Robert Mondavi photography from client (Dropbox).
  {
    name: "Robert Mondavi Winery",
    category: "Wine",
    description: "The Oakville benchmark, reborn for tours and tastings.",
    image: "/images/photography/wine-cellar-toast.jpg",
    objectPosition: "center 45%",
    href: "https://www.robertmondavi.com/",
  },
  {
    name: "Louis Martini Winery",
    category: "Wine",
    description: "Generations of Cabernet craft in St. Helena.",
    image: img("Partner Images/Louis M. Martini/LMM-Tasting-Room-Entrance.jpg"),
    objectPosition: "center 35%",
    href: "https://www.louismartini.com/",
  },
  // TODO: Generic plate shot; replace with authentic Bouchon Bistro photography when a venue-specific asset is available.
  {
    name: "Bouchon Bistro",
    category: "Dine",
    description: "Yountville bistro classics with Thomas Keller polish.",
    image: "/images/photography/press-plating.jpg",
    objectPosition: "center 48%",
    href: "https://www.thomaskeller.com/bouchonyountville",
  },
  {
    name: "Meadowood Napa Valley",
    category: "Dine",
    description: "Forum and estate dining in the forest above St. Helena.",
    image: img("Partner Images/Meadowood/Meadowood-Napa-Valley-Forum-Restaurant-Short-RIb-Risotto-Paired-with-Wine.jpg"),
    objectPosition: "center 48%",
    href: "https://meadowood.com/dining/forum/",
  },
  {
    name: "The Grove at COPIA",
    category: "Dine",
    description: "Garden-to-table restaurant at COPIA—seasonal cooking, not campus dining.",
    image: partnerPack("FARM at Carneros Resort and Spa/farmrestaurantnapa.jpg"),
    objectPosition: "center 48%",
    href: CIA_GROVE,
  },
  {
    name: "JaM Cellars Ballroom",
    category: "Explore",
    description: "Napa's live-music downtown anchor.",
    image: img("Partner Images/JAM Cellars/GM1_1269_mod1.jpg"),
    objectPosition: "center 48%",
    href: "https://www.jamcellars.com/",
  },
  // TODO: Swap for client-shared Pure Luxury tour/vehicle shot when added to the repo.
  {
    name: "Pure Luxury Tours",
    category: "Explore",
    description: "Tailored chauffeured days across the valley.",
    image: "/images/photography/hero-stanly-ranch-convertible.jpg",
    objectPosition: "center 42%",
    href: "https://www.pureluxury.com/napa-valley-wine-tours/",
  },
  // TODO: Swap for client-shared Marquee imagery when added to the repo.
  {
    name: "Marquee Pinball Lounge",
    category: "Explore",
    description: "Playful cocktails and vintage games in downtown Napa.",
    image: "/images/photography/cadet-nightlife.jpg",
    objectPosition: "center 45%",
    href: "https://www.marqueepinball.com/",
  },
];

const filters = ["All", "Stay", "Dine", "Wine", "Explore"] as const;

const categoryColor: Record<Cat, string> = {
  Stay: "var(--hub-wine)",
  Wine: "var(--hub-wine-deep)",
  Dine: "var(--hub-terra)",
  Explore: "var(--hub-sage)",
};

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return partnerCards;
    return partnerCards.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      className="border-t border-[var(--hub-line)]"
      style={{
        backgroundColor: "var(--hub-paper)",
        paddingTop: "clamp(3rem, 7vw, 5rem)",
        paddingBottom: "clamp(3rem, 7vw, 5rem)",
      }}
    >
      <div ref={ref} className="section-shell section-shell--wide mx-auto">
        {/* Header */}
        <div className="section-stack mb-10" style={{ textAlign: "center", maxWidth: "100%" }}>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow"
          >
            Featured partners
          </motion.p>
          <motion.h2
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reducedMotion ? 0 : 0.06 }}
            className="section-title"
          >
            Spots that{" "}
            <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>anchor</span>{" "}
            this story
          </motion.h2>
        </div>

        {/* Filter pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.375rem",
            marginTop: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              style={{
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.5rem 1.125rem",
                borderRadius: "9999px",
                border:
                  filter === f ? "1.5px solid var(--hub-wine)" : "1.5px solid var(--hub-line)",
                backgroundColor: filter === f ? "var(--hub-wine)" : "transparent",
                color: filter === f ? "#ffffff" : "var(--hub-muted)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.article
              key={p.name}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: reducedMotion ? 0 : Math.min(i * 0.05, 0.3) }}
              style={{
                borderRadius: "var(--hub-radius)",
                border: "1px solid var(--hub-line)",
                backgroundColor: "var(--hub-card)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.35s ease, transform 0.35s ease",
              }}
              className="partner-card group"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", flexDirection: "column", flex: 1, textDecoration: "none" }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: p.objectPosition ?? "center 48%",
                      transition: "transform 0.7s ease",
                    }}
                    className="group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      zIndex: 10,
                      fontSize: "0.5625rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      backgroundColor: categoryColor[p.category],
                      padding: "0.3rem 0.625rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "1.125rem 1.25rem 1.25rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "var(--hub-ink)",
                      marginBottom: "0.375rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--hub-muted)",
                      lineHeight: 1.55,
                      flex: 1,
                      marginBottom: "0.875rem",
                    }}
                  >
                    {p.description}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--hub-champagne)",
                    }}
                  >
                    Visit →
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
