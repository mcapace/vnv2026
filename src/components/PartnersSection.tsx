"use client";

import { useRef, useMemo, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Cat = "Stay" | "Wine" | "Dine" | "Explore";

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
    image: "/images/photography/stanly-ranch-spa.jpg",
    objectPosition: "center 42%",
    href: "https://www.carnerosresort.com/",
  },
  {
    name: "Mount View Hotel & Inn",
    category: "Stay",
    description: "Calistoga mineral spa heritage rooms since 1919.",
    image: "/images/photography/solage-poolside.jpg",
    objectPosition: "center 48%",
    href: "https://www.mountviewhotel.com/",
  },
  {
    name: "Etude Wines",
    category: "Wine",
    description: "Carneros Pinot on the terrace.",
    image: "/images/photography/wine-cellar-toast.jpg",
    objectPosition: "center 45%",
    href: "https://www.etudewines.com/",
  },
  {
    name: "Robert Mondavi Winery",
    category: "Wine",
    description: "The Oakville benchmark, reborn for tours and tastings.",
    image: "/images/photography/chandon-group.jpg",
    objectPosition: "center 48%",
    href: "https://www.robertmondavi.com/",
  },
  {
    name: "Louis Martini Winery",
    category: "Wine",
    description: "Generations of Cabernet craft in St. Helena.",
    image: "/images/photography/chandon-hilltop.jpg",
    objectPosition: "center 35%",
    href: "https://www.louismartini.com/",
  },
  {
    name: "Bouchon Bistro",
    category: "Dine",
    description: "Yountville bistro classics with Thomas Keller polish.",
    image: "/images/photography/press-plating.jpg",
    objectPosition: "center 48%",
    href: "https://www.thomaskeller.com/bouchonyountville",
  },
  {
    name: "Calistoga Depot",
    category: "Dine",
    description: "Six train cars, one distillery, endless Calistoga charm.",
    image: "/images/photography/cadet-dining.jpg",
    objectPosition: "center 48%",
    href: "https://www.calistogadepot.com/",
  },
  {
    name: "The Grove at COPIA",
    category: "Dine",
    description: "CIA campus dining with garden-to-table cuisine.",
    image: "/images/photography/chandon-brunch.jpg",
    objectPosition: "center 48%",
    href: "https://www.ciaatcopia.com/grove-restaurant",
  },
  {
    name: "JaM Cellars Ballroom",
    category: "Explore",
    description: "Napa's live-music downtown anchor.",
    image: "/images/photography/cadet-nightlife.jpg",
    objectPosition: "center 48%",
    href: "https://www.jamcellars.com/",
  },
  {
    name: "Pure Luxury Tours",
    category: "Explore",
    description: "Tailored chauffeured days across the valley.",
    image: "/images/photography/stanly-ranch-convertible.jpg",
    objectPosition: "center 30%",
    href: "https://www.pureluxury.com/napa-valley-wine-tours/",
  },
  {
    name: "Marquee Pinball Lounge",
    category: "Explore",
    description: "Playful cocktails and vintage games in downtown Napa.",
    image: "/images/photography/solage-pool-night.jpg",
    objectPosition: "center 48%",
    href: "https://www.visitnapavalley.com/things-to-do/",
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
        <div className="section-stack mx-auto mb-10 max-w-2xl">
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
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
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
