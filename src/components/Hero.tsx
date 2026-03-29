"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-[100dvh] min-h-[560px] max-h-[100dvh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/photography/stanly-ranch-convertible.jpg"
          alt="Open road through Napa Valley vineyards at golden hour"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 42%" }}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Light top preservation — image stays visible; darken only toward bottom for type */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-transparent to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[52%] bg-gradient-to-t from-black/78 via-black/42 to-transparent"
        aria-hidden
      />
      <div className="grain-overlay pointer-events-none absolute inset-0 z-[2]" />

      <div
        className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center"
        aria-hidden
      >
        <img
          src="/images/logos/vnv-primary-white.png"
          alt=""
          className="w-36 max-w-[42vw] select-none opacity-[0.15] sm:w-44"
        />
      </div>

      <div className="relative z-20 flex h-full flex-col justify-end px-5 pb-6 pt-[4.5rem] text-center md:px-10 md:pb-10">
        <div
          className="text-on-photo mx-auto w-full max-w-4xl pb-10 md:pb-12"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-balance text-white"
          >
            <span
              className="block font-light leading-[0.98] tracking-tight text-[clamp(2rem,8vw,4rem)] md:text-[clamp(2.75rem,7vw,5.75rem)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A World
            </span>
            <span
              className="mt-1 block font-light leading-[0.98] tracking-tight text-[clamp(2rem,8vw,4rem)] md:text-[clamp(2.75rem,7vw,5.75rem)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              in{" "}
              <em className="not-italic text-[var(--hub-gold-bright)]">
                30 Miles
              </em>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-[1.7] text-white/92 sm:text-xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
          >
            Napa&apos;s density advantage—wine, dine, stay, and explore—in one
            compact stretch of valley made for multi-day escapes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5"
          >
            <a
              href="#discover"
              className="inline-flex min-h-[48px] min-w-0 justify-center rounded-md bg-[var(--hub-gold)] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#141212] transition hover:bg-[#d4b87a] sm:min-w-[200px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore the hub
            </a>
            <a
              href="#itinerary"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/35 bg-white/10 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/16 sm:min-w-[200px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sample weekend
            </a>
          </motion.div>
        </div>

        <a
          href="#discover"
          className="absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/75 transition hover:text-white"
          aria-label="Scroll to main content"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.span
            aria-hidden
            className="block"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.span>
        </a>
      </div>
    </section>
  );
}
