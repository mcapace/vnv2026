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
      <div className="pointer-events-none absolute inset-0 z-0 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-t after:from-black/75 after:via-black/30 after:to-transparent">
        <img
          src="/images/photography/stanly-ranch-convertible.jpg"
          alt="Open road through Napa Valley vineyards at golden hour"
          className="relative z-0 h-full w-full object-cover"
          style={{ objectPosition: "center 44%" }}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <div className="grain-overlay pointer-events-none absolute inset-0 z-[2]" />

      <div className="relative z-10 flex h-full flex-col justify-end pb-10 pt-24 text-center md:pb-14 md:pt-28">
        <div className="section-shell section-shell--wide mx-auto w-full pb-10 md:pb-12">
          <div className="relative z-10 mx-auto w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center justify-center gap-3"
              aria-label="Visit Napa Valley and Wine Spectator"
            >
              <img
                src="/images/logos/vnv-primary-white.png"
                alt="Visit Napa Valley"
                className="h-6 w-auto opacity-[0.96] sm:h-7"
                width={160}
                height={40}
              />
              <span className="font-hub-display text-lg font-light text-white/70 sm:text-xl" aria-hidden>
                ×
              </span>
              <span className="font-hub-display text-lg font-medium tracking-[0.08em] text-white/90 sm:text-xl">
                Wine Spectator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="font-hub-display text-balance text-[clamp(3.5rem,8vw,6.5rem)] font-normal leading-[1.02] tracking-[-0.02em] text-white"
            >
              A World in{" "}
              <span className="font-hub-display italic text-[var(--hub-champagne-light)]">30 Miles</span>
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
                className="font-hub-sans btn-champagne inline-flex items-center justify-center rounded-full bg-[var(--hub-champagne)] px-8 py-3.5 text-sm font-semibold text-[var(--hub-ink)]"
              >
                Explore the hub
              </a>
              <a
                href="#itinerary"
                className="font-hub-sans hero-outline-btn inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition"
              >
                Sample weekend
              </a>
            </motion.div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          aria-hidden
        >
          <a
            href="#discover"
            className="pointer-events-auto text-white/60 transition hover:text-white/90"
            aria-label="Scroll to main content"
          >
            <ChevronDownIcon className="size-8 animate-bounce" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
