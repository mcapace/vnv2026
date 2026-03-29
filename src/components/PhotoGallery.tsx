"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const photos = [
  {
    src: "/images/photography/stanly-ranch-spa.jpg",
    alt: "Wellness at Stanly Ranch, Napa Valley",
    caption: "Wellness at Stanly Ranch",
    objectPosition: "center 42%" as const,
  },
  {
    src: "/images/photography/solage-poolside.jpg",
    alt: "Poolside at Solage, Calistoga",
    caption: "Poolside at Solage, Calistoga",
    objectPosition: "center 48%" as const,
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
        <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10">
          {photos.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.1 }}
              className="group relative w-full overflow-hidden rounded-[var(--hub-radius-sm)] bg-black/25 md:rounded-[var(--hub-radius)]"
            >
              <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] md:aspect-[3/4]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.02]"
                  style={{ objectPosition: img.objectPosition }}
                  loading="lazy"
                  width={1000}
                  height={1200}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-5 pt-20 text-left md:px-6 md:pb-6 md:pt-24">
                <span className="font-hub-display text-base leading-snug text-white/95 md:text-lg">
                  {img.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
