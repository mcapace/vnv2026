"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Cat = "stay" | "wine" | "dine" | "explore";

const pinColors: Record<Cat, string> = {
  stay: "#722f37",
  wine: "#4a1f26",
  dine: "#a65d3f",
  explore: "#5a6b52",
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
      aria-label="The route — thirty miles through Napa Valley"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-paper)]"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div className="section-shell mx-auto max-w-5xl">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow">The route</p>
          <h2 className="section-title mt-4">
            Thirty miles, one unforgettable road
          </h2>
          <p className="hub-prose mx-auto mt-5 max-w-xl">
            From Carneros in the south to Calistoga in the north—most stops sit
            within a fifteen-minute drive of their neighbors.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.1 }}
          className="relative mx-auto mt-12 aspect-[5/3] max-h-[min(72vh,560px)] w-full overflow-hidden rounded-xl border border-[var(--hub-line)] bg-[#eef1f6] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full touch-pan-x touch-pan-y"
            role="img"
            aria-label="Stylized map of Napa Valley corridor with partner locations"
          >
            <defs>
              <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e8e4dc" />
                <stop offset="100%" stopColor="#d4cfc5" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#hill)" />
            <path
              d="M 54 82 Q 48 60 46 44 T 38 18"
              fill="none"
              stroke="#c4b8a8"
              strokeWidth="1.2"
              opacity="0.9"
            />
            <text x="50" y="12" textAnchor="middle" fill="#6b6560" fontSize="3.2" fontFamily="Inter, sans-serif" letterSpacing="0.35em">
              CALISTOGA
            </text>
            <text x="45" y="88" textAnchor="middle" fill="#6b6560" fontSize="3.2" fontFamily="Inter, sans-serif" letterSpacing="0.35em">
              CARNEROS
            </text>
            {markers.map((m) => (
              <g key={m.id} transform={`translate(${m.x},${m.y})`} className="cursor-pointer">
                <circle
                  r="5"
                  fill={pinColors[m.cat]}
                  opacity={active === m.id ? 1 : 0.88}
                  stroke="#fff"
                  strokeWidth="1.2"
                  onMouseEnter={() => setActive(m.id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === m.id ? null : m.id)}
                />
                <circle r="8" fill="transparent" />
              </g>
            ))}
          </svg>

          <div className="pointer-events-none absolute left-3 right-3 top-3 flex flex-wrap justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--hub-muted)] drop-shadow-sm">
            <span className="rounded-full bg-white/90 px-2 py-1">~15 min between clusters</span>
          </div>

          <div
            className={`pointer-events-auto absolute bottom-3 left-3 right-3 z-10 mx-auto max-w-sm rounded-lg border border-[var(--hub-line)] bg-[var(--hub-card)]/98 p-3 shadow-lg backdrop-blur-sm transition-opacity duration-200 md:left-auto md:right-4 md:mx-0 ${
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

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-[var(--hub-muted)]">
          Illustrative map — distances are approximate driving times along the
          valley corridor.
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
        className="h-14 w-20 shrink-0 rounded object-cover"
        width={80}
        height={56}
      />
      <div className="min-w-0 flex-1">
            <span
              className="inline-block rounded px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: pinColors[marker.cat] }}
            >
              {marker.cat}
            </span>
            <h3 className="mt-1 text-sm font-semibold text-[var(--hub-ink)]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {marker.title}
            </h3>
            <p className="mt-0.5 text-xs text-[var(--hub-muted)]">{marker.blurb}</p>
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
