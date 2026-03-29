"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="discover"
      ref={ref}
      className="relative py-28 md:py-36 bg-[#FEFCF8] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C2C2C 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 2L23.5 15H37L26 23.5L29.5 37L20 28.5L10.5 37L14 23.5L3 15H16.5L20 2Z"
              stroke="#C5A55A"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#C5A55A] text-[11px] tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Live a Little — or a Lot
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C] leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where Every Mile
          <br />
          <em className="text-[#722F37]">Tells a Story</em>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="divider-diamond mb-10"
        >
          <span className="diamond" />
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#4A4A4A] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Stretching from the wetlands of Carneros to the volcanic peaks of
          Calistoga, Napa Valley packs an extraordinary density of world-class
          experiences into just thirty miles. No other wine region on earth
          offers this concentration of Michelin-starred restaurants, legendary
          wineries, luxury resorts, and one-of-a-kind adventures — all connected
          by roads that wind through some of the most beautiful landscape in
          California.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[#C5A55A]/15"
        >
          {[
            { number: "400+", label: "Wineries" },
            { number: "30", label: "Miles of Valley" },
            { number: "9", label: "Michelin Stars" },
            { number: "∞", label: "Memories" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="block text-3xl md:text-4xl text-[#722F37] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.number}
              </motion.span>
              <span
                className="text-[#4A4A4A]/60 text-[10px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
