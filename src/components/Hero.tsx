"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-[100dvh] min-h-[560px] max-h-[100dvh] overflow-hidden bg-[#1a1512]"
    >
      <div className="absolute inset-0">
        <img
          src="/images/photography/stanly-ranch-convertible.jpg"
          alt="Open road through Napa Valley vineyards at golden hour"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 44%" }}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 45%, transparent 35%, rgba(15,12,10,0.45) 100%), linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 35%, transparent 55%, rgba(12,10,9,0.85) 100%)",
        }}
        aria-hidden
      />
      <div className="grain-overlay pointer-events-none absolute inset-0 z-[2]" />

      <div className="relative z-20 flex h-full flex-col justify-end pb-10 pt-24 text-center md:pb-14 md:pt-28">
        <div className="section-shell section-shell--wide mx-auto w-full pb-10 md:pb-12">
          <div className="mx-auto w-full max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-hub-sans mb-7 text-[11px] font-medium uppercase tracking-[0.32em] text-white/80"
            >
              Visit Napa Valley · Wine Spectator
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="text-balance text-white"
            >
              <span className="font-hub-serif block font-normal leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,7vw,4rem)]">
                A World in{" "}
                <em className="not-italic text-[var(--hub-champagne-light)]" style={{ fontStyle: "normal" }}>
                  30 Miles
                </em>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="font-hub-sans mx-auto mt-8 max-w-lg text-base font-normal leading-[1.7] text-white/88 md:mt-9 md:text-lg md:leading-[1.65]"
            >
              Wine, dine, stay, and explore—extraordinary density in one
              compact stretch of valley built for long weekends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-12 flex w-full max-w-lg flex-col gap-4 sm:mx-auto sm:mt-14 sm:max-w-none sm:flex-row sm:justify-center sm:gap-5"
            >
              <a
                href="#discover"
                className="font-hub-sans btn-champagne inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--hub-champagne)] px-10 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--hub-ink)]"
              >
                Explore the hub
              </a>
              <a
                href="#itinerary"
                className="font-hub-sans hero-outline-btn inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/45 bg-white/10 px-10 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition"
              >
                Sample weekend
              </a>
            </motion.div>
          </div>
        </div>

        <a
          href="#discover"
          className="hero-scroll-cta absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/55 transition"
          aria-label="Scroll to main content"
        >
          <span className="font-hub-sans text-[10px] font-medium uppercase tracking-[0.22em]">Scroll</span>
          <motion.span
            aria-hidden
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.span>
        </a>
      </div>
    </section>
  );
}
