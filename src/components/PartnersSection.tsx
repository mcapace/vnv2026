"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  {
    category: "Stay",
    items: ["Carneros Resort & Spa", "Mount View Hotel & Inn"],
  },
  {
    category: "Wine",
    items: ["Etude Wines", "Robert Mondavi Winery", "Louis Martini Winery"],
  },
  {
    category: "Dine",
    items: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
  },
  {
    category: "Explore",
    items: [
      "JaM Cellars Ballroom",
      "Pure Luxury Tours",
      "Marquee Pinball Lounge",
    ],
  },
];

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="border-t border-[var(--hub-line)] bg-white"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div ref={ref} className="section-shell mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow"
          >
            Featured partners
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.06 }}
            className="section-title mx-auto mt-4 max-w-xl"
          >
            Spots that anchor this story
          </motion.h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[var(--hub-line)]">
          {partners.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + gi * 0.06 }}
              className="lg:px-8 xl:px-10"
            >
              <h3
                className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--hub-wine)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((name) => (
                  <li key={name}>
                    <span
                      className="text-[0.9375rem] font-medium leading-snug text-[var(--hub-ink)]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
