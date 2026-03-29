"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const photos = [
  {
    src: "/images/photography/stanly-ranch-spa.jpg",
    alt: "Wellness at Stanly Ranch, Napa Valley",
    caption: "Wellness at Stanly Ranch",
  },
  {
    src: "/images/photography/solage-poolside.jpg",
    alt: "Poolside at Solage, Calistoga",
    caption: "Poolside at Solage, Calistoga",
  },
];

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Editorial photography from the valley"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-navy)] py-16 md:py-24"
    >
      <div className="section-shell">
        <div className="section-stack mb-12 md:mb-16">
          <p className="section-eyebrow text-[var(--hub-champagne-light)]">In the valley</p>
        </div>
        <div className="mx-auto grid max-w-[72rem] gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
        {photos.map((img, i) => (
          <motion.figure
            key={img.src}
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.1 }}
            className="group relative overflow-hidden rounded-[var(--hub-radius-sm)] bg-black/20 md:rounded-[var(--hub-radius)]"
          >
            <div className="aspect-[4/5] w-full sm:aspect-[3/4] md:min-h-[380px] md:aspect-auto">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                width={1000}
                height={1200}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-4 pt-16 text-left text-sm text-white/95 md:pb-5 md:text-base">
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>{img.caption}</span>
            </figcaption>
          </motion.figure>
        ))}
        </div>
      </div>
    </section>
  );
}
