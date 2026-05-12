"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const MAIN_PATH =
  "M 156 495 C 156 382 155 282 154 192 C 153 142 152 102 151 68 L 150 42";
const SILVERADO_PATH =
  "M 134 495 C 134 382 133 282 132 192 C 131 142 130 102 129 68 L 128 42";

const towns = [
  { id: "amcan", label: "Am. Canyon", p: 0.05 },
  { id: "napa", label: "Napa", p: 0.25 },
  { id: "yountville", label: "Yountville", p: 0.45 },
  { id: "sthelena", label: "St. Helena", p: 0.66 },
  { id: "calistoga", label: "Calistoga", p: 0.9 },
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

function RouteMapIllustration({ inView }: { inView: boolean }) {
  return (
    <svg
      viewBox="0 0 320 520"
      width="100%"
      className="mx-auto block h-auto max-w-xs"
      role="img"
      aria-label="Illustrated map of two main roads through Napa Valley: Highway 29, the Silverado Trail, and five towns"
    >
      {/* Silverado Trail (dashed) */}
      <motion.path
        d={SILVERADO_PATH}
        fill="none"
        stroke="var(--hub-champagne)"
        strokeWidth={1.25}
        strokeOpacity={0.38}
        strokeDasharray="7 11"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Highway 29 (main stroke) */}
      <motion.path
        d={MAIN_PATH}
        fill="none"
        stroke="var(--hub-champagne)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.1 }}
      />

      {/* Approximate north-to-south span */}
      <motion.text
        x={24}
        y={268}
        fontSize={9}
        fill="var(--hub-ink)"
        fillOpacity={0.72}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 1.8 }}
      >
        ~50 mi
      </motion.text>

      {/* Town markers, staggered after the roads */}
      {towns.map((town, i) => {
        const { x, y } = townPosition(town.p);
        return (
          <motion.g
            key={town.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.35,
              delay: 1.0 + i * 0.12,
              ease: "backOut",
            }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            {/* Pulse ring */}
            <motion.circle
              cx={x}
              cy={y}
              r={8}
              fill="none"
              stroke="var(--hub-champagne)"
              strokeWidth={1}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={inView ? { opacity: 0, scale: 2.2 } : {}}
              transition={{
                duration: 1.5,
                delay: 1.3 + i * 0.12,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeOut",
              }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
            {/* Solid dot */}
            <circle cx={x} cy={y} r={4.5} fill="var(--hub-champagne)" />
            {/* Label */}
            <text
              x={x + 13}
              y={y + 4}
              fontSize={11}
              fill="var(--hub-ink)"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              {town.label}
            </text>
          </motion.g>
        );
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
        <div className="mx-auto grid w-full max-w-[72rem] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-[4rem]">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : reducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow mb-4">The route</p>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              Two main roads,{" "}
              <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>five towns</span>
              {", one valley."}
            </h2>
            <p className="hub-prose mt-4" style={{ textAlign: "left" }}>
              Highway 29 runs the valley floor. The Silverado Trail traces the east side. Between them sit
              five towns and more wineries than any sensible itinerary can hold. Most hops between tastings
              and tables still clock in under twenty minutes.
            </p>
            <RouteMapIllustration inView={!!inView} />
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : reducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            {[
              {
                town: "Calistoga",
                note: "Geothermal pools, spa days, the quieter finale.",
                drive: "",
                color: "var(--hub-wine)",
              },
              {
                town: "St. Helena",
                note: "Main Street, estate tastings, and Silverado Trail afternoons.",
                drive: "~12 min south",
                color: "var(--hub-champagne)",
              },
              {
                town: "Yountville",
                note: "Walkable blocks and the Michelin addresses you already know by name.",
                drive: "~12 min south",
                color: "var(--hub-champagne)",
              },
              {
                town: "Napa",
                note: "Downtown energy, Oxbow Market, Carneros fog on the vines.",
                drive: "~10 min south",
                color: "var(--hub-sage)",
              },
              {
                town: "American Canyon",
                note: "The southern gateway. The valley widens open from here.",
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
                  <div style={{ marginBottom: "0.25rem" }}>
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
                  {i > 0 && item.drive && (
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
