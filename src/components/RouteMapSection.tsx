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
      style={{ paddingTop: "clamp(3rem, 7vw, 5rem)", paddingBottom: "clamp(3rem, 7vw, 5rem)" }}
    >
      <div className="section-shell mx-auto w-full">
        {/* Two column layout */}
        <div
          className="mx-auto grid w-full max-w-[72rem] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-[4rem]"
        >
          {/* Left — map */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : reducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow mb-4">The route</p>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              Thirty miles,{" "}
              <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>one road</span>
            </h2>
            <p className="hub-prose mt-4" style={{ textAlign: "left" }}>
              From the bay fog of Carneros to the thermal springs of Calistoga — the entire valley runs
              along a single corridor. Most stops are fifteen minutes apart.
            </p>
            <NapaCorridorMapIllustration />
          </motion.div>

          {/* Right — town breakdown */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : reducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            {[
              {
                town: "Calistoga",
                region: "North",
                note: "Hot springs, Depot, top-valley Cab",
                drive: "Top of the valley",
                color: "var(--hub-wine)",
              },
              {
                town: "St. Helena",
                region: "Upper Mid",
                note: "Meadowood, Press, Louis Martini",
                drive: "~10 min south",
                color: "var(--hub-champagne)",
              },
              {
                town: "Oakville / Rutherford",
                region: "Mid-Valley",
                note: "Robert Mondavi, benchmark Cab country",
                drive: "~8 min south",
                color: "var(--hub-champagne)",
              },
              {
                town: "Yountville",
                region: "Lower Mid",
                note: "Thomas Keller, Bouchon, French Laundry",
                drive: "~10 min south",
                color: "var(--hub-champagne)",
              },
              {
                town: "Napa / Carneros",
                region: "South",
                note: "Carneros Resort, Oxbow Market, CIA COPIA",
                drive: "~12 min south",
                color: "var(--hub-sage)",
              },
            ].map((item, i, arr) => (
              <div
                key={item.town}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  padding: "1.25rem 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--hub-line)" : "none",
                }}
              >
                {/* Color dot */}
                <div style={{ flexShrink: 0, paddingTop: "0.375rem" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "9999px",
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "var(--hub-ink)",
                      }}
                    >
                      {item.town}
                    </span>
                    <span
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--hub-muted)",
                        flexShrink: 0,
                      }}
                    >
                      {item.region}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--hub-muted)",
                      lineHeight: 1.5,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.note}
                  </p>
                  {i > 0 && (
                    <span
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(42,38,35,0.35)",
                      }}
                    >
                      {item.drive}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
