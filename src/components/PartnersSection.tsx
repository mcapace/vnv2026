"use client";

import { useRef, useMemo, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Cat = "Stay" | "Wine" | "Dine" | "Explore";

const catStyle: Record<Cat, string> = {
  Stay: "bg-[var(--hub-wine)]",
  Wine: "bg-[var(--hub-wine-deep)]",
  Dine: "bg-[var(--hub-terra)]",
  Explore: "bg-[var(--hub-sage)]",
};

const partnerCards: Array<{
  name: string;
  category: Cat;
  description: string;
  image: string;
  href: string;
}> = [
  {
    name: "Carneros Resort & Spa",
    category: "Stay",
    description: "Cottages at the edge of Carneros fog and vines.",
    image: "/images/photography/stanly-ranch-spa.jpg",
    href: "https://www.carnerosresort.com/",
  },
  {
    name: "Mount View Hotel & Inn",
    category: "Stay",
    description: "Calistoga mineral spa heritage rooms.",
    image: "/images/photography/solage-poolside.jpg",
    href: "https://www.mountviewhotel.com/",
  },
  {
    name: "Etude Wines",
    category: "Wine",
    description: "Carneros Pinot on the terrace.",
    image: "/images/photography/wine-cellar-toast.jpg",
    href: "https://www.etudewines.com/",
  },
  {
    name: "Robert Mondavi Winery",
    category: "Wine",
    description: "The Oakville benchmark, reborn for tours and tastings.",
    image: "/images/photography/wine-cellar-toast.jpg",
    href: "https://www.robertmondavi.com/",
  },
  {
    name: "Louis Martini Winery",
    category: "Wine",
    description: "Generations of Cabernet craft in St. Helena.",
    image: "/images/photography/wine-cellar-toast.jpg",
    href: "https://www.louismartini.com/",
  },
  {
    name: "Bouchon Bistro",
    category: "Dine",
    description: "Yountville bistro classics with Thomas Keller polish.",
    image: "/images/photography/press-plating.jpg",
    href: "https://www.bouchonbistro.com/",
  },
  {
    name: "Calistoga Depot",
    category: "Dine",
    description: "Grand ceiling lunches in a historic depot.",
    image: "/images/photography/press-plating.jpg",
    href: "https://www.visitnapavalley.com/restaurants/",
  },
  {
    name: "The Grove @ COPIA",
    category: "Dine",
    description: "CIA Copia campus dining with valley access.",
    image: "/images/photography/chandon-brunch.jpg",
    href: "https://www.cia.edu/copia/",
  },
  {
    name: "JaM Cellars Ballroom",
    category: "Explore",
    description: "Napa’s live-music downtown anchor.",
    image: "/images/photography/cadet-nightlife.jpg",
    href: "https://www.jamcellars.com/",
  },
  {
    name: "Pure Luxury Tours",
    category: "Explore",
    description: "Tailored chauffeured days across the valley.",
    image: "/images/photography/stanly-ranch-convertible.jpg",
    href: "https://www.pureluxury.com/napa-valley-wine-tours/",
  },
  {
    name: "Marquee Pinball Lounge",
    category: "Explore",
    description: "Playful cocktails and vintage games.",
    image: "/images/photography/cadet-nightlife.jpg",
    href: "https://www.visitnapavalley.com/things-to-do/",
  },
];

const filters = ["All", "Stay", "Dine", "Wine", "Explore"] as const;

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
      className="border-t border-[var(--hub-line)] bg-[var(--hub-card)]"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div ref={ref} className="section-shell section-shell--wide mx-auto">
        <div className="section-stack mb-10 md:mb-12">
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
            className="section-title max-w-xl"
          >
            Spots that anchor this story
          </motion.h2>
        </div>

        <div className="mb-12 flex justify-center md:mb-14">
          <div className="partner-filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-hub-sans partner-filter-btn min-h-10 rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition sm:min-h-11 sm:px-5 sm:py-2.5 ${
                filter === f
                  ? "bg-[var(--hub-ink)] text-white"
                  : "partner-filter-btn--idle border border-[var(--hub-line)] bg-white text-[var(--hub-muted)]"
              }`}
            >
              {f}
            </button>
          ))}
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <motion.article
              key={p.name}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: reducedMotion ? 0 : 0.04 + i * 0.03 }}
              className="partner-card hub-card-elevated group flex flex-col overflow-hidden rounded-[var(--hub-radius)] border border-[var(--hub-line)] bg-[var(--hub-card)]"
            >
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--hub-paper-2)]">
                  <img
                    src={p.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <span
                    className={`font-hub-sans w-fit rounded px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white ${catStyle[p.category]}`}
                  >
                    {p.category}
                  </span>
                  <h3 className="font-hub-serif mt-3.5 text-[1.125rem] font-normal leading-snug tracking-[-0.015em] text-[var(--hub-ink)] md:text-xl">
                    {p.name}
                  </h3>
                  <p className="font-hub-sans mt-3 flex-1 text-sm leading-relaxed text-[var(--hub-muted)]">
                    {p.description}
                  </p>
                  <span className="font-hub-sans mt-5 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--hub-wine)]">
                    Visit
                    <span className="text-[var(--hub-wine)]">→</span>
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
