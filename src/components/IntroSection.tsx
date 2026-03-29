"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "400+", label: "Wineries" },
  { number: "30", label: "Miles of Valley" },
  { number: "9", label: "Michelin Stars" },
  { number: "5", label: "Distinct Towns" },
];

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="discover"
      ref={ref}
      className="relative py-28 md:py-36 bg-[#FEFCF8] overflow-hidden"
    >
      <div className="section-shell max-w-6xl text-center relative z-10">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#C5A55A] text-[11px] tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Discover the Valley
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C] leading-tight mb-8 text-balance"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where Every Mile
          <br />
          <em className="text-[#63242D]">Tells a Story</em>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-10 max-w-[200px] mx-auto"
        >
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#C5A55A]" />
          <span className="w-2 h-2 bg-[#C5A55A] rotate-45 shrink-0" />
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#C5A55A]" />
        </motion.div>

        {/* Body — comfortable measure, centered in wide shell */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#4A4A4A] text-lg md:text-xl lg:text-[1.35rem] leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Stretching from the wetlands of Carneros to the volcanic peaks of
          Calistoga, Napa Valley packs an extraordinary density of world-class
          experiences into just thirty miles. No other wine region on earth
          offers this concentration of Michelin-starred restaurants, legendary
          wineries, luxury resorts, and one-of-a-kind adventures &mdash; all connected
          by roads that wind through some of the most beautiful landscape in
          California.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-[#C5A55A]/15 max-w-5xl mx-auto w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-sm bg-[#C5A55A]/20 p-px overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center py-6 px-4 md:py-8 md:px-6 bg-[#FEFCF8] min-h-[7.5rem] md:min-h-[8.5rem] flex flex-col items-center justify-center"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="block text-4xl md:text-5xl lg:text-[3.25rem] text-[#63242D] mb-2.5 tabular-nums"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.number}
                </motion.span>
                <span
                  className="text-[#4A4A4A]/65 text-[10px] md:text-[11px] tracking-[0.28em] uppercase max-w-[12rem] leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
