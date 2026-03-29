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
    <div className="flex flex-col items-center justify-center px-3 py-8 text-center md:px-5 md:py-11">
      <span className="font-hub-serif font-light tabular-nums text-[var(--hub-card)] text-[clamp(3rem,7vw,4.5rem)] leading-none tracking-[-0.02em]">
        {display}
        {stat.suffixPlus ? (showPlus ? "+" : "") : ""}
      </span>
      <span className="font-hub-sans mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--hub-champagne-light)]">
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
        className="section-shell section-stack mx-auto max-w-3xl pb-12 md:pb-14"
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
          className="section-title"
        >
          Where every mile{" "}
          <span className="text-[var(--hub-wine)]">tells a story</span>
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.08 }}
          className="hub-prose-serif max-w-2xl text-center"
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
          paddingTop: "clamp(2.75rem, 7vw, 4.5rem)",
          paddingBottom: "clamp(2.75rem, 7vw, 4.5rem)",
          background:
            "linear-gradient(165deg, var(--hub-navy) 0%, var(--hub-navy-mid) 55%, var(--hub-navy-deep) 100%)",
        }}
      >
        <div className="section-shell">
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
          <div className="mx-auto mt-14 max-w-2xl border-t border-white/14 pt-10 md:mt-16 md:pt-12">
            <p className="font-hub-display text-center text-lg italic leading-relaxed text-white/88 md:text-xl">
              “The most concentrated wine region in the world.”
            </p>
            <p className="font-hub-sans mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-champagne-light)]">
              Wine Spectator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
