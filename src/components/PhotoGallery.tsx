"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Desktop: 4-column grid. Hero tile 2×2 top-left; four singles top-right + mid; bottom row full-bleed. */
const images = [
  {
    src: "/images/photography/chandon-hilltop.jpg",
    alt: "Friends enjoying wine on a Napa Valley hilltop",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/photography/press-plating.jpg",
    alt: "Fine dining plating at Press restaurant",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/photography/stanly-ranch-spa.jpg",
    alt: "Morning spa relaxation at Stanly Ranch",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/photography/wine-cellar-toast.jpg",
    alt: "Wine cellar toast with friends",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/photography/solage-poolside.jpg",
    alt: "Poolside evening at Solage Spa",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/photography/cadet-nightlife.jpg",
    alt: "Champagne Room nightlife at Cadet",
    span: "col-span-2 row-span-1 md:col-span-4",
  },
];

export default function PhotoGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-28 bg-[#FEFCF8] overflow-hidden">
      <div ref={ref} className="section-shell max-w-7xl">
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C5A55A] text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Captured Moments
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C] text-balance"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Live a Little &mdash; <em className="text-[#63242D]">or a Lot</em>
          </motion.h2>
        </div>

        {/* Balanced bento: no scroll-parallax (avoids seams); last row spans full width on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 auto-rows-[minmax(140px,22vw)] md:auto-rows-[minmax(180px,16vw)] max-md:max-h-none">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${img.span} relative overflow-hidden rounded-sm group ring-1 ring-[#2C2C2C]/6 bg-[#E8E2D9]`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#63242D]/0 transition-colors duration-500 group-hover:bg-[#63242D]/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
