"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-[100dvh] min-h-[560px] max-h-[100dvh] overflow-hidden bg-[#1a1512]"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
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
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
          aria-hidden
        />
      </div>

      <div className="grain-overlay pointer-events-none absolute inset-0 z-[2]" />

      <div
        className="absolute bottom-0 left-0 right-0 z-10 pb-16 text-left"
        style={{ paddingLeft: "clamp(2rem, 5vw, 4rem)", paddingRight: "clamp(2rem, 5vw, 4rem)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-2.5"
          aria-label="Visit Napa Valley and Wine Spectator"
        >
          <img
            src="/images/logos/vnv-primary-white.png"
            alt="Visit Napa Valley"
            className="h-7 w-auto"
            width={160}
            height={40}
          />
          <span className="text-base font-light text-white/50" aria-hidden>
            ×
          </span>
          <span className="font-hub-display text-base italic tracking-wide text-white/80">
            Wine Spectator
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-hub-display mt-4 max-w-3xl text-balance text-[clamp(3rem,7vw,5.5rem)] leading-[1.0] text-white text-on-photo"
        >
          A World in{" "}
          <span className="font-hub-display italic text-[var(--hub-champagne)]">30 Miles</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="hub-prose mt-4 max-w-lg text-white/75"
        >
          Wine, dine, stay, and explore—extraordinary density in one compact stretch of valley built
          for long weekends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a
            href="#discover"
            className="btn-champagne inline-flex items-center gap-2 rounded-full bg-[var(--hub-champagne)] px-7 py-3.5 text-sm font-semibold tracking-wide text-[var(--hub-navy)]"
          >
            Explore the hub
          </a>
          <a
            href="#itinerary"
            className="hero-outline-btn inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-medium text-white"
          >
            Sample weekend
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1">
        <a href="#discover" aria-label="Scroll to main content">
          <ChevronDownIcon className="size-5 text-white/60 animate-bounce" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
