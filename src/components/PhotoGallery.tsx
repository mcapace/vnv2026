"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
    span: "col-span-2 row-span-1",
  },
];

export default function PhotoGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section className="relative py-20 md:py-28 bg-[#FEFCF8] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
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
            className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Live a Little &mdash; <em className="text-[#63242D]">or a Lot</em>
          </motion.h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ x: i % 2 === 0 ? xLeft : xRight }}
              className={`${img.span} relative overflow-hidden group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#63242D]/0 group-hover:bg-[#63242D]/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
