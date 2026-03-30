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
    alt: "Solage, Calistoga",
    caption: "Solage, Calistoga",
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
      className="bg-[var(--hub-navy)]"
      style={{
        paddingTop: "clamp(2rem, 3vw, 3rem)",
        paddingBottom: "clamp(2rem, 3vw, 3rem)",
      }}
    >
      <div className="section-shell">
        <div className="section-stack mb-10 md:mb-12">
          <p className="section-eyebrow" style={{ color: "var(--hub-champagne-light)" }}>
            In the valley
          </p>
          <h2 className="section-title mt-4" style={{ color: "#ffffff" }}>
            Life in the{" "}
            <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>valley</span>
          </h2>
          <p
            className="hub-prose mt-4 max-w-xl text-center"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Two moods. One valley.
          </p>
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
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-4 pt-12 text-left md:px-6 md:pb-5 md:pt-14">
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
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
