"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section ref={ref} className="relative min-h-[max(680px,100dvh)] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute left-1/2 top-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <img
          src="/images/photography/stanly-ranch-convertible.jpg"
          alt="Open road through Napa Valley vineyards at golden hour"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-[#0c0a0b]/75 via-[#1a1214]/45 to-[#4a1c22]/88"
        aria-hidden
      />
      <div className="grain-overlay pointer-events-none absolute inset-0 z-10" />

      <motion.div
        style={{ opacity }}
        className="relative z-20 flex min-h-[max(680px,100dvh)] flex-col items-center justify-center px-6 pt-20 pb-16 text-center md:px-10"
      >
        {mounted && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <img
                src="/images/logos/vnv-primary-white.png"
                alt="Visit Napa Valley"
                className="mx-auto h-11 w-auto sm:h-12"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="max-w-4xl text-balance text-white"
            >
              <span
                className="block text-[clamp(2.75rem,8vw,5.75rem)] font-light leading-[0.98] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A World
              </span>
              <span
                className="mt-1 block text-[clamp(2.75rem,8vw,5.75rem)] font-light leading-[0.98] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                in{" "}
                <em className="not-italic text-[var(--hub-gold-bright)]">
                  30 Miles
                </em>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/82 sm:text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Napa&apos;s density advantage—wine, dine, stay, and explore—in one
              compact stretch of valley made for multi-day escapes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
            >
              <a
                href="#discover"
                className="inline-flex min-w-[200px] justify-center rounded-md bg-[var(--hub-gold)] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#141212] transition hover:bg-[#d4b87a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore the hub
              </a>
              <a
                href="#itinerary"
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sample weekend →
              </a>
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}
