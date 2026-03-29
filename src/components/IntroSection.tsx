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
    <div className="flex flex-col items-center justify-center px-3 py-7 text-center md:px-4 md:py-9">
      <span
        className="font-light tabular-nums text-[var(--hub-card)] text-[clamp(3rem,7vw,4.5rem)] leading-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {display}
        {stat.suffixPlus ? (showPlus ? "+" : "") : ""}
      </span>
      <span
        className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--hub-champagne-light)]"
        style={{ fontFamily: "'Inter', sans-serif" }}
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
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: 0 }}
    >
      <div
        className="section-shell mx-auto max-w-3xl pb-12 text-center md:pb-14"
        style={{ paddingBottom: "max(2.5rem, var(--section-pad-y))" }}
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
          className="section-title mt-4"
        >
          Where every mile{" "}
          <span className="text-[var(--hub-wine)]">tells a story</span>
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.08 }}
          className="hub-prose-serif mx-auto mt-8 max-w-2xl"
        >
          No other wine country packs this much into a short drive. Long
          weekends here feel full—because they are—with room to slow down
          between the highlights.
        </motion.p>
      </div>

      <div
        ref={statsRef}
        className="text-white"
        style={{
          paddingTop: "min(3.5rem, 56px)",
          paddingBottom: "min(3.5rem, 56px)",
          background:
            "linear-gradient(165deg, var(--hub-navy) 0%, var(--hub-navy-mid) 55%, var(--hub-navy-deep) 100%)",
        }}
      >
        <div className="section-shell max-w-5xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/18 md:grid-cols-4 md:divide-y-0">
            {stats.map((stat, i) => (
              <StatCell
                key={stat.key}
                stat={stat}
                index={i}
                reducedMotion={reducedMotion}
                inView={!!statsInView}
              />
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl border-t border-white/12 pt-8">
            <p
              className="text-center text-lg italic text-white/88 md:text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              “The most concentrated wine region in the world.”
            </p>
            <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-champagne-light)]">
              Wine Spectator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
