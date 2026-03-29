"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Cat = "stay" | "wine" | "dine" | "explore";

const pinColors: Record<Cat, string> = {
  stay: "#6b2e36",
  wine: "#4a252c",
  dine: "#8b5138",
  explore: "#55624e",
};

const markers: Array<{
  id: string;
  cat: Cat;
  x: number;
  y: number;
  title: string;
  blurb: string;
  thumb: string;
}> = [
  { id: "carneros", cat: "stay", x: 52, y: 78, title: "Carneros Resort & Spa", blurb: "South estate cottages among the vines.", thumb: "/images/photography/stanly-ranch-spa.jpg" },
  { id: "etude", cat: "wine", x: 48, y: 72, title: "Etude Wines", blurb: "Pinot and views from Carneros.", thumb: "/images/photography/wine-cellar-toast.jpg" },
  { id: "bouchon", cat: "dine", x: 44, y: 58, title: "Bouchon Bistro", blurb: "Yountville benchmark dining.", thumb: "/images/photography/press-plating.jpg" },
  { id: "mondavi", cat: "wine", x: 42, y: 48, title: "Robert Mondavi Winery", blurb: "Oakville icon, reopened and refreshed.", thumb: "/images/photography/wine-cellar-toast.jpg" },
  { id: "martini", cat: "wine", x: 38, y: 38, title: "Louis Martini", blurb: "Heritage Cabernet in St. Helena.", thumb: "/images/photography/wine-cellar-toast.jpg" },
  { id: "copia", cat: "dine", x: 55, y: 62, title: "The Grove @ COPIA", blurb: "CIA campus dining in Napa.", thumb: "/images/photography/chandon-brunch.jpg" },
  { id: "depot", cat: "dine", x: 32, y: 28, title: "Calistoga Depot", blurb: "Northern depot turned dining room.", thumb: "/images/photography/press-plating.jpg" },
  { id: "mountview", cat: "stay", x: 30, y: 22, title: "Mount View Hotel & Inn", blurb: "Calistoga mud baths & spa.", thumb: "/images/photography/solage-poolside.jpg" },
  { id: "jam", cat: "explore", x: 58, y: 64, title: "JaM Cellars Ballroom", blurb: "Downtown Napa live music.", thumb: "/images/photography/cadet-nightlife.jpg" },
  { id: "luxury", cat: "explore", x: 50, y: 52, title: "Pure Luxury Tours", blurb: "Chauffeured valley-wide.", thumb: "/images/photography/stanly-ranch-convertible.jpg" },
  { id: "pinball", cat: "explore", x: 56, y: 66, title: "Marquee Pinball Lounge", blurb: "Cocktails and pinball.", thumb: "/images/photography/cadet-nightlife.jpg" },
];

export default function RouteMapSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      role="region"
      aria-label="The route through Napa Valley"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-paper)]"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div className="section-shell mx-auto max-w-4xl">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="section-stack mx-auto max-w-2xl"
        >
          <p className="section-eyebrow">The route</p>
          <h2 className="section-title mt-4">Thirty miles, one unforgettable road</h2>
          <p className="hub-prose mt-5 max-w-lg">
            From Carneros to Calistoga—most featured stops sit within a short drive of each other along the valley floor.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.08 }}
          className="relative mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-[var(--hub-radius)] border border-[var(--hub-line)] bg-[var(--hub-card)] shadow-[0_16px_48px_-24px_rgba(22,20,26,0.2)]"
        >
          <div className="aspect-[4/3] w-full min-h-[240px] sm:aspect-[5/3] sm:min-h-[280px]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Stylized Napa Valley corridor map with partner pins"
            >
              <defs>
                <linearGradient id="mapParchment" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#f0eae2" />
                  <stop offset="100%" stopColor="#ddd4c8" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#mapParchment)" />
              <path
                d="M 54 84 Q 47 62 45 46 Q 43 32 40 22 L 38 16"
                fill="none"
                stroke="#6b2e36"
                strokeOpacity="0.28"
                strokeWidth="0.85"
                strokeLinecap="round"
              />
              <text x="50" y="11" textAnchor="middle" fill="#5e5852" fontSize="2.6" fontFamily="Georgia, serif" letterSpacing="0.12em" opacity="0.9">
                Calistoga
              </text>
              <text x="48" y="91" textAnchor="middle" fill="#5e5852" fontSize="2.6" fontFamily="Georgia, serif" letterSpacing="0.12em" opacity="0.9">
                Carneros
              </text>
              {markers.map((m) => (
                <g key={m.id} transform={`translate(${m.x},${m.y})`}>
                  <circle
                    r="7"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setActive(m.id)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(active === m.id ? null : m.id)}
                  />
                  <circle
                    r="3.2"
                    fill={pinColors[m.cat]}
                    stroke="#fff"
                    strokeWidth="0.9"
                    opacity={active === m.id ? 1 : 0.92}
                    className="pointer-events-none"
                  />
                </g>
              ))}
            </svg>
          </div>

          <p className="absolute left-4 top-4 max-w-[11rem] rounded-md border border-[var(--hub-line)] bg-white/95 px-2.5 py-1.5 text-[9px] font-semibold uppercase leading-snug tracking-[0.1em] text-[var(--hub-muted)] shadow-sm backdrop-blur-sm">
            ~15 min between clusters
          </p>

          <div
            className={`absolute bottom-3 left-3 right-3 z-10 mx-auto max-w-xs rounded-[var(--hub-radius-sm)] border border-[var(--hub-line)] bg-[var(--hub-card)] p-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] transition-opacity duration-200 md:left-auto md:right-4 md:mx-0 ${
              active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {active && (
              <MapTooltip
                marker={markers.find((x) => x.id === active)!}
                onClose={() => setActive(null)}
              />
            )}
          </div>
        </motion.div>

        <p className="mx-auto mt-5 max-w-xl text-center text-xs text-[var(--hub-muted)]">
          Illustrative map · approximate positions along the Napa Valley corridor.
        </p>
      </div>
    </section>
  );
}

function MapTooltip({
  marker,
  onClose,
}: {
  marker: (typeof markers)[0];
  onClose: () => void;
}) {
  return (
    <div className="flex gap-3">
      <img
        src={marker.thumb}
        alt=""
        className="h-12 w-[4.5rem] shrink-0 rounded-sm object-cover"
        width={72}
        height={48}
      />
      <div className="min-w-0 flex-1">
        <span
          className="inline-block rounded-sm px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: pinColors[marker.cat] }}
        >
          {marker.cat}
        </span>
        <h3
          className="mt-1.5 text-sm font-normal leading-tight text-[var(--hub-ink)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {marker.title}
        </h3>
        <p className="mt-0.5 text-xs leading-snug text-[var(--hub-muted)]">{marker.blurb}</p>
        <button
          type="button"
          className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--hub-wine)] md:hidden"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
