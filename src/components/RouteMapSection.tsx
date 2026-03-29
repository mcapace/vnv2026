"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const MAIN_PATH =
  "M 156 495 C 156 382 155 282 154 192 C 153 142 152 102 151 68 L 150 42";
const SILVERADO_PATH =
  "M 134 495 C 134 382 133 282 132 192 C 131 142 130 102 129 68 L 128 42";

const towns = [
  { id: "napa", label: "Napa / Carneros", p: 0 },
  { id: "yountville", label: "Yountville", p: 0.22 },
  { id: "oakville", label: "Oakville / Rutherford", p: 0.42 },
  { id: "sthelena", label: "St. Helena", p: 0.65 },
  { id: "calistoga", label: "Calistoga", p: 0.88 },
] as const;

const MAP_BOTTOM = 495;
const MAP_TOP = 42;
const RANGE = MAP_BOTTOM - MAP_TOP;

function townPosition(p: number): { x: number; y: number } {
  const y = MAP_BOTTOM - p * RANGE;
  const t = p;
  const x = 156 - t * 3.5 - Math.sin(t * Math.PI) * 2;
  return { x, y };
}

function TownMarker({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <foreignObject
        x={x - 14}
        y={y - 14}
        width={28}
        height={28}
        className="overflow-visible pointer-events-none"
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="pulse-pin relative h-[10px] w-[10px] shrink-0 rounded-full bg-[var(--hub-champagne)]" />
        </div>
      </foreignObject>
      <text
        x={x + 12}
        y={y + 4}
        fontSize={11}
        fill="var(--hub-ink)"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {label}
      </text>
    </g>
  );
}

function NapaCorridorMapIllustration() {
  return (
    <svg
      viewBox="0 0 320 520"
      width="100%"
      className="mx-auto block h-auto max-w-xs"
      role="img"
      aria-label="Illustrated map of the Napa Valley corridor from Napa and Carneros to Calistoga along Highway 29, with the Silverado Trail indicated"
    >
      <path
        d={SILVERADO_PATH}
        fill="none"
        stroke="var(--hub-champagne)"
        strokeWidth={1.25}
        strokeOpacity={0.38}
        strokeDasharray="7 11"
        strokeLinecap="round"
      />
      <path
        d={MAIN_PATH}
        fill="none"
        stroke="var(--hub-champagne)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x={24}
        y={268}
        fontSize={10}
        fill="var(--hub-ink)"
        fillOpacity={0.72}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        ~30 miles
      </text>
      {towns.map((town) => {
        const { x, y } = townPosition(town.p);
        return <TownMarker key={town.id} x={x} y={y} label={town.label} />;
      })}
    </svg>
  );
}

export default function RouteMapSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      role="region"
      aria-label="The route through Napa Valley"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-paper)]"
      style={{
        paddingTop: "var(--section-pad-y)",
        paddingBottom: "clamp(2.25rem, 6vw, var(--section-pad-y))",
      }}
    >
      <div className="section-shell mx-auto w-full">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="section-stack mx-auto max-w-2xl"
        >
          <p className="section-eyebrow">The route</p>
          <h2 className="section-title">Thirty miles, one unforgettable road</h2>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.08 }}
          className="mx-auto mt-10 w-full max-w-xs md:mt-12"
        >
          <NapaCorridorMapIllustration />
        </motion.div>
      </div>
    </section>
  );
}
