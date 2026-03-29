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
          style={{ objectPosition: "center 40%" }}
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

      <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-8 pt-20 text-center md:px-12 md:pb-12">
        <div className="mx-auto w-full max-w-3xl pb-8 md:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/75"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Visit Napa Valley · Wine Spectator
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="text-balance text-white"
          >
            <span
              className="block font-normal leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,7vw,4rem)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
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
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/88 md:text-lg"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Wine, dine, stay, and explore—extraordinary density in one
            compact stretch of valley built for long weekends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          >
            <a
              href="#discover"
              className="btn-champagne inline-flex min-h-[50px] items-center justify-center rounded-full bg-[var(--hub-champagne)] px-9 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--hub-ink)] transition"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore the hub
            </a>
            <a
              href="#itinerary"
              className="hero-outline-btn inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/45 bg-white/10 px-9 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sample weekend
            </a>
          </motion.div>
        </div>

        <a
          href="#discover"
          className="hero-scroll-cta absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/55 transition"
          aria-label="Scroll to main content"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em]">Scroll</span>
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
