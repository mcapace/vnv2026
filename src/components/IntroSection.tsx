"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { key: "wineries", target: 400, suffixPlus: true, label: "Wineries" },
  { key: "miles", target: 50, suffixPlus: false, label: "Miles" },
  { key: "michelin", target: 15, suffixPlus: false, label: "Michelin stars" },
  { key: "towns", target: 5, suffixPlus: false, label: "Towns & cities" },
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
          fontSize: "0.625rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          marginTop: "1rem",
          display: "block",
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
        className="section-shell section-stack mx-auto max-w-3xl pb-12 md:pb-14"
        style={{
          textAlign: "center",
          alignItems: "center",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
        >
          Why this valley
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
          Napa Valley rewards every kind of trip. Quick escapes, week-long
          immersions, and everything between. Hundreds of cellar doors, chef-led
          kitchens, and trailheads sit close enough that you can go wide
          without spending your vacation behind the wheel.
        </motion.p>
      </div>

      <div
        ref={statsRef}
        className="relative"
        style={{
          backgroundColor: "var(--hub-navy)",
          paddingTop: "clamp(2.5rem, 5vw, 3.5rem)",
          paddingBottom: "clamp(3.5rem, 8vw, 5.5rem)",
          display: "block",
          width: "100%",
        }}
      >
        <div
          className="relative z-[2]"
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            paddingLeft: "clamp(2rem, 5vw, 4rem)",
            paddingRight: "clamp(2rem, 5vw, 4rem)",
            textAlign: "center",
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
              textAlign: "center",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.key}
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2.5rem 1rem",
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
          <div
            style={{
              margin: "3rem auto 0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <blockquote
              style={{
                margin: 0,
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
                  color: "rgba(255,255,255,0.90)",
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
                  style={{ height: "1rem", width: "auto", opacity: 0.72 }}
                />
                <div style={{ height: "1px", width: "2.5rem", backgroundColor: "rgba(255,255,255,0.15)" }} />
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
