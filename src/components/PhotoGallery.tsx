"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Editorial strip — matches pillar cards: rounded-2xl, ring, ~3:2 aspect (landscape luxury crop).
 */
const stripImages = [
  {
    src: "/images/photography/stanly-ranch-spa.jpg",
    alt: "Spa and wellness at Stanly Ranch, Napa Valley",
    caption: "Slow down where the valley begins",
  },
  {
    src: "/images/photography/solage-poolside.jpg",
    alt: "Poolside evening at Solage, Auberge Resorts Collection, Calistoga",
    caption: "Evenings that stretch with the light",
  },
];

export default function PhotoGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative border-t border-b border-[#C5A55A]/12 bg-[#FEFCF8]"
      aria-labelledby="editorial-moments-heading"
    >
      <div className="section-shell max-w-7xl py-16 md:py-24">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="section-eyebrow">Brand photography</p>
          <h2
            id="editorial-moments-heading"
            className="section-title mt-3 text-[#2C2C2C]"
          >
            Moments from the{" "}
            <em className="text-[#63242D] not-italic">Thirty Miles</em>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-[#4A4A4A]/90 md:text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Partner-provided imagery will join this hub as it arrives—we&apos;ll
            fold in new stays, tables, and cellar doors without crowding the
            story.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {stripImages.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl bg-[#E8E2D9] shadow-[0_4px_24px_-4px_rgba(44,28,32,0.1)] ring-1 ring-[#2C2C2C]/[0.08]"
            >
              <div className="relative aspect-[16/10] w-full md:aspect-[3/2]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#140809]/70 via-[#140809]/15 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p
                    className="text-[1.0625rem] italic leading-snug tracking-wide text-white/95 md:text-lg"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {img.caption}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
