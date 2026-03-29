"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stripImages = [
  {
    src: "/images/photography/stanly-ranch-spa.jpg",
    alt: "Wellness at Stanly Ranch, Napa Valley",
  },
  {
    src: "/images/photography/solage-poolside.jpg",
    alt: "Poolside at Solage, Calistoga",
  },
];

export default function PhotoGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} aria-label="Editorial photography">
      <p className="section-shell pt-12 pb-6 text-center section-eyebrow md:pt-16">
        In the valley
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {stripImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative aspect-[5/4] min-h-[280px] w-full md:aspect-auto md:min-h-[clamp(340px,42vw,520px)]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
