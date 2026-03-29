"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  {
    category: "Stay",
    items: [
      { name: "Carneros Resort & Spa", location: "Napa" },
      { name: "Mount View Hotel & Inn", location: "Calistoga" },
    ],
  },
  {
    category: "Wine",
    items: [
      { name: "Etude Wines", location: "Carneros" },
      { name: "Robert Mondavi Winery", location: "Oakville" },
      { name: "Louis Martini Winery", location: "St. Helena" },
    ],
  },
  {
    category: "Dine",
    items: [
      { name: "Bouchon Bistro", location: "Yountville" },
      { name: "Calistoga Depot", location: "Calistoga" },
      { name: "The Grove @ COPIA", location: "Napa" },
    ],
  },
  {
    category: "Explore",
    items: [
      { name: "JaM Cellars Ballroom", location: "Napa" },
      { name: "Pure Luxury Tours", location: "Napa Valley" },
      { name: "Marquee Pinball Lounge", location: "Napa" },
    ],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  Stay: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 21h18M3 7v14M21 7v14M5 7V4a1 1 0 011-1h12a1 1 0 011 1v3M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
    </svg>
  ),
  Wine: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M8 22h8M12 15v7M5 2h14l-2.5 9a5.5 5.5 0 01-9 0L5 2z" />
    </svg>
  ),
  Dine: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </svg>
  ),
  Explore: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
    </svg>
  ),
};

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#2C2C2C] overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A55A 0.5px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div ref={ref} className="section-shell max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-eyebrow mb-4"
          >
            Featured partners
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title text-white max-w-3xl mx-auto"
          >
            The Valley&apos;s{" "}
            <em className="text-[#C5A55A] not-italic">Finest</em>
          </motion.h2>
        </div>

        {/* Partner grid - 4 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {partners.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + groupIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:px-8 xl:px-10 lg:first:pl-0 lg:last:pr-0"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-[#C5A55A]">
                  {categoryIcons[group.category]}
                </span>
                <h3
                  className="text-white text-lg tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Partner items */}
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + groupIndex * 0.1 + i * 0.05,
                    }}
                    className="group/item cursor-pointer"
                  >
                    <p
                      className="text-white/80 text-sm group-hover/item:text-[#C5A55A] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-white/30 text-xs mt-0.5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 sm:px-6 py-3 border border-[#C5A55A]/20 rounded-full max-w-[min(40rem,calc(100vw-2rem))] text-center sm:text-left">
            <div className="relative pulse-pin w-2 h-2 rounded-full bg-[#C5A55A] shrink-0" />
            <span
              className="text-white/40 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              From Carneros to Calistoga &mdash; 30 miles of extraordinary
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
