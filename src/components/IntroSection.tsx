"use client";

import { Fragment, useRef } from "react";
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
      <span className="font-hub-display font-normal tabular-nums text-[clamp(3rem,6vw,4.5rem)] leading-none tracking-normal text-[var(--hub-champagne)]">
        {display}
        {stat.suffixPlus ? (showPlus ? "+" : "") : ""}
      </span>
      <span className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
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
      style={{ paddingTop: "clamp(3.5rem, 8vw, 5.5rem)", paddingBottom: 0 }}
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
        className="relative grain-overlay bg-[var(--hub-navy)] text-white"
        style={{
          paddingTop: "clamp(2.75rem, 7vw, 4.5rem)",
          paddingBottom: "clamp(3.5rem, 8vw, 6rem)",
        }}
      >
        <div className="section-shell relative z-[2]">
          <div className="flex flex-wrap md:flex-nowrap md:items-stretch md:justify-center">
            {stats.map((stat, i) => (
              <Fragment key={stat.key}>
                {i > 0 ? (
                  <div
                    className="hidden h-16 w-px shrink-0 self-center bg-white/10 md:block"
                    aria-hidden
                  />
                ) : null}
                <div className="flex w-1/2 basis-1/2 justify-center md:min-w-0 md:w-auto md:flex-1 md:basis-0">
                  <StatCell
                    stat={stat}
                    index={i}
                    reducedMotion={reducedMotion}
                    inView={!!statsInView}
                  />
                </div>
              </Fragment>
            ))}
          </div>
          <blockquote className="mx-auto mt-14 max-w-2xl border-t border-white/14 pt-10 text-center md:mt-16 md:pt-12">
            <span className="font-hub-display block text-[5rem] leading-none text-[var(--hub-champagne)] opacity-40 -mb-2">
              &ldquo;
            </span>
            <p className="font-hub-display text-[clamp(1.25rem,2.5vw,1.625rem)] italic leading-relaxed text-white/90">
              The most concentrated wine region in the world.
            </p>
            <footer className="mt-5 flex items-center justify-center gap-3 text-white/50">
              <div style={{ height: "1px", width: "2rem", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <img
                src="/images/logos/wine-spectator/ws-logo-white.png"
                alt="Wine Spectator"
                style={{ height: "0.875rem", width: "auto", opacity: 0.5 }}
              />
              <div style={{ height: "1px", width: "2rem", backgroundColor: "rgba(255,255,255,0.2)" }} />
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
