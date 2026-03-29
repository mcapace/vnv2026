"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image with parallax — convertible through vineyards */}
      <motion.div style={{ y, scale }} className="absolute inset-[-5%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/photography/stanly-ranch-convertible.jpg')`,
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(30, 20, 22, 0.55) 0%,
            rgba(30, 20, 22, 0.35) 35%,
            rgba(30, 20, 22, 0.30) 50%,
            rgba(99, 36, 45, 0.70) 80%,
            rgba(99, 36, 45, 0.92) 100%
          )`,
        }}
      />

      {/* Grain */}
      <div className="grain-overlay absolute inset-0 z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* VNV Logo */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <img
              src="/images/logos/vnv-primary-white.png"
              alt="Visit Napa Valley"
              className="h-12 sm:h-14 w-auto mx-auto"
            />
          </motion.div>
        )}

        {/* Gold accent line */}
        {mounted && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[1px] bg-[#C5A55A] mb-8"
          />
        )}

        {/* Main headline */}
        {mounted && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white max-w-4xl"
          >
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A World
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              in{" "}
              <span className="gold-shimmer font-semibold italic">30 Miles</span>
            </span>
          </motion.h1>
        )}

        {/* Subtitle */}
        {mounted && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mt-8 leading-relaxed font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            From vine to table, from sunrise to starlight &mdash; discover why
            Napa Valley rewards those who stay a little longer.
          </motion.p>
        )}

        {/* CTA */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-5"
          >
            <a
              href="#discover"
              className="group relative px-10 py-4 border border-[#C5A55A]/60 text-white text-[11px] tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 hover:border-[#C5A55A]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative z-10 group-hover:text-[#2C2C2C] transition-colors duration-500">
                Begin Your Journey
              </span>
              <span className="absolute inset-0 bg-[#C5A55A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </a>
            <a
              href="#itinerary"
              className="text-white/50 text-[11px] tracking-[0.2em] uppercase hover:text-[#C5A55A] transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Itinerary &rarr;
            </a>
          </motion.div>
        )}

        {/* Scroll indicator */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span
              className="text-white/30 text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-gradient-to-b from-[#C5A55A]/60 to-transparent"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
