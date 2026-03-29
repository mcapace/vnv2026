"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "400+", label: "Wineries" },
  { number: "30", label: "Miles" },
  { number: "9", label: "Michelin stars" },
  { number: "5", label: "Distinct towns" },
];

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="discover"
      ref={ref}
      className="border-b border-[var(--hub-line)] bg-[var(--hub-paper)]"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div className="section-shell mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
        >
          Why thirty miles
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.06 }}
          className="section-title mt-4"
        >
          Where every mile{" "}
          <span className="text-[var(--hub-wine)]">tells a story</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12 }}
          className="hub-prose mx-auto mt-6 max-w-2xl"
        >
          No other wine country packs this much into a short drive. Long
          weekends here feel full—because they are—with room to slow down
          between the highlights.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="section-shell mt-14 max-w-4xl md:mt-16"
      >
        <div className="flex flex-wrap items-stretch justify-center gap-0 divide-y divide-[var(--hub-line)] border border-[var(--hub-line)] bg-white md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-[140px] flex-1 flex-col items-center justify-center px-6 py-8 text-center md:min-w-0 md:py-9"
            >
              <span
                className="text-[clamp(2rem,5vw,2.75rem)] font-light tabular-nums text-[var(--hub-wine)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.number}
              </span>
              <span
                className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-muted)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
