"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { key: "wineries", target: 400, suffixPlus: true, label: "Wineries" },
  { key: "miles", target: 30, suffixPlus: false, label: "Miles" },
  { key: "michelin", target: 9, suffixPlus: false, label: "Michelin stars" },
  { key: "towns", target: 5, suffixPlus: false, label: "Distinct towns" },
] as const;

function StatCell({
  stat,
  index,
  reducedMotion,
  inView,
}: {
  stat: (typeof stats)[number];
  index: number;
  reducedMotion: boolean | null;
  inView: boolean;
}) {
  const active = inView && !reducedMotion;
  const { value, done } = useCountUp(stat.target, active, {
    durationMs: 2000,
    startDelayMs: index * 200,
  });

  const display = !active ? stat.target : value;
  const showPlus = stat.suffixPlus && (!active || done);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)",
          fontWeight: 400,
          lineHeight: 1,
          color: "var(--hub-champagne)",
          display: "block",
          textAlign: "center",
        }}
      >
        {display}
        {stat.suffixPlus ? (showPlus ? "+" : "") : ""}
      </span>
      <span
        style={{
          marginTop: "0.375rem",
          fontSize: "0.625rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.65)",
          display: "block",
          textAlign: "center",
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="discover"
      ref={ref}
      role="region"
      aria-labelledby="discover-heading"
      className="border-b border-[var(--hub-line)] bg-[var(--hub-paper)]"
      style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: 0 }}
    >
      <div
        className="section-shell section-stack mx-auto max-w-3xl"
        style={{ paddingBottom: "clamp(2rem, 4vw, 3rem)" }}
      >
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
        >
          Why thirty miles
        </motion.p>
        <motion.h2
          id="discover-heading"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.06 }}
          className="section-title"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
        >
          Where every mile{" "}
          <span className="text-[var(--hub-champagne)]">tells a story</span>
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.08 }}
          className="hub-prose-serif max-w-2xl text-center"
          style={{ maxWidth: "38rem", opacity: 0.8 }}
        >
          No other wine country packs this much into a short drive. Long
          weekends here feel full—because they are—with room to slow down
          between the highlights.
        </motion.p>
      </div>

      <div
        ref={statsRef}
        className="grain-overlay relative"
        style={{
          backgroundColor: "var(--hub-navy)",
          paddingTop: "clamp(2.5rem, 5vw, 3.5rem)",
          paddingBottom: "clamp(3.5rem, 8vw, 5.5rem)",
        }}
      >
        <div
          className="relative z-[2] mx-auto"
          style={{
            maxWidth: "64rem",
            paddingLeft: "clamp(2rem, 5vw, 4rem)",
            paddingRight: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.key}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2.5rem 1rem",
                  textAlign: "center",
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <StatCell
                  stat={stat}
                  index={i}
                  reducedMotion={reducedMotion}
                  inView={!!statsInView}
                />
              </div>
            ))}
          </div>

          {/* Blockquote */}
          <blockquote
            style={{
              margin: "3rem auto 0",
              maxWidth: "42rem",
              textAlign: "center",
              width: "100%",
              display: "block",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.88)",
                marginBottom: "1.5rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              &ldquo;The most concentrated wine region in the world.&rdquo;
            </p>
            <footer
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.875rem",
              }}
            >
              <div style={{ height: "1px", width: "2.5rem", backgroundColor: "rgba(255,255,255,0.15)" }} />
              <img
                src="/images/logos/wine-spectator/ws-logo-white.png"
                alt="Wine Spectator"
                style={{ height: "1rem", width: "auto", opacity: 0.45 }}
              />
              <div style={{ height: "1px", width: "2.5rem", backgroundColor: "rgba(255,255,255,0.15)" }} />
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
