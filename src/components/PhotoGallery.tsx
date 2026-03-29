"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";

const photos = [
  {
    src: "/images/photography/stanly-ranch-spa.jpg",
    alt: "Wellness at Stanly Ranch, Napa Valley",
    caption: "Wellness at Stanly Ranch",
    span: "md:col-span-5 aspect-[5/4]",
  },
  {
    src: "/images/photography/chandon-brunch.jpg",
    alt: "Gathering at Chandon in Napa Valley",
    caption: "Golden hour at Chandon",
    span: "md:col-span-4 aspect-[3/5] md:aspect-[3/5] md:min-h-[min(88vw,620px)]",
    tall: true,
  },
  {
    src: "/images/photography/solage-poolside.jpg",
    alt: "Poolside at Solage, Calistoga",
    caption: "Poolside at Solage, Calistoga",
    span: "md:col-span-5 md:aspect-[5/4]",
  },
];

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="In the Valley — editorial photography"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-paper)]"
    >
      <p className="section-shell section-eyebrow pt-8 pb-4 text-center md:pt-10">
        In the valley
      </p>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-12 md:items-end">
        {photos.map((img, i) => (
          <GalleryRow
            key={img.src}
            img={img}
            index={i}
            inView={inView}
            reducedMotion={!!reducedMotion}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function GalleryRow({
  img,
  index,
  inView,
  reducedMotion,
  scrollYProgress,
}: {
  img: (typeof photos)[0];
  index: number;
  inView: boolean;
  reducedMotion: boolean;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion
      ? ["0%", "0%"]
      : index === 1
        ? ["6%", "-6%"]
        : ["4%", "-4%"],
  );

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : reducedMotion ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08 }}
      className={`group relative min-h-[240px] w-full overflow-hidden md:min-h-0 ${img.span}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 h-[115%] w-full -top-[7%]">
        <img
          src={img.src}
          alt={img.alt}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95 md:opacity-90" />
      <p
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] px-4 pb-4 text-center text-sm text-white/95 md:text-base md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100"
        style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}
      >
        {img.caption}
      </p>
    </motion.div>
  );
}
