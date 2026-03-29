"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const articles = [
  {
    id: "stay",
    label: "Stay",
    title: "Stay in Napa Valley",
    subtitle: "Where Luxury Meets the Land",
    description:
      "From the vineyard-edge bungalows of Carneros Resort to the storied charm of Mount View Hotel & Inn in Calistoga.",
    image: "/images/photography/solage-pool-night.jpg",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
  },
  {
    id: "dine",
    label: "Dine",
    title: "Dine in Napa Valley",
    subtitle: "Every Meal, a Masterpiece",
    description:
      "From legendary Bouchon Bistro to the rustic charm of Calistoga Depot and The Grove at COPIA.",
    image: "/images/photography/press-plating.jpg",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
  },
  {
    id: "wine",
    label: "Wine",
    title: "Wine in Napa Valley",
    subtitle: "Taste the Terroir",
    description:
      "Over 400 wineries, from the grand Robert Mondavi to elegant Etude and storied Louis Martini.",
    image: "/images/photography/wine-cellar-toast.jpg",
    partners: ["Etude", "Robert Mondavi Winery", "Louis Martini Winery"],
  },
  {
    id: "explore",
    label: "Explore",
    title: "Explore Napa Valley",
    subtitle: "Beyond the Vine",
    description:
      "Dance at JaM Cellars Ballroom, cruise with Pure Luxury Tours, or play at Marquee Pinball Lounge.",
    image: "/images/photography/cadet-nightlife.jpg",
    partners: ["JaM Cellars Ballroom", "Pure Luxury Tours", "Marquee Pinball Lounge"],
  },
];

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      id={article.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="scroll-mt-24 md:scroll-mt-28"
    >
      <a
        href="https://www.visitnapavalley.com"
        target="_blank"
        rel="noopener noreferrer"
        className="article-card block group relative overflow-hidden rounded-sm shadow-md ring-1 ring-[#2C2C2C]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A55A]"
        style={{ minHeight: "420px", height: "min(32rem, 88vh)" }}
      >
        {/* Background image */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[45%] z-[5] bg-gradient-to-t from-[#1a0a0d]/95 via-[#2C2C2C]/45 to-transparent"
          aria-hidden
        />

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-7 sm:p-9 md:p-10 lg:p-12 pb-8 md:pb-10">
          {/* Category pill */}
          <span
            className="inline-block self-start text-[9px] tracking-[0.3em] uppercase text-white/90 bg-[#63242D]/80 backdrop-blur-sm px-3 py-1 mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {article.label}
          </span>

          {/* Title */}
          <h3
            className="text-2xl sm:text-3xl md:text-[1.85rem] text-white mb-1.5 leading-snug max-w-[22ch]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {article.title}
          </h3>

          {/* Subtitle */}
          <p
            className="text-white/80 text-lg italic mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {article.subtitle}
          </p>

          {/* Description — always on small screens; hover expand on md+ */}
          <div className="overflow-hidden">
            <p
              className="text-white/75 text-sm leading-relaxed md:max-h-0 md:opacity-0 md:group-hover:max-h-28 md:group-hover:opacity-100 transition-[max-height,opacity] duration-500 ease-out line-clamp-4 md:line-clamp-none max-md:mt-1"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {article.description}
            </p>
          </div>

          {/* Partners pills */}
          <div className="flex flex-wrap gap-2 mt-3 max-md:mt-3 md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:max-h-24 md:group-hover:opacity-100 transition-all duration-500 ease-out md:delay-75">
            {article.partners.map((partner) => (
              <span
                key={partner}
                className="text-[9px] tracking-[0.12em] uppercase text-white/60 px-2.5 py-1 border border-white/20"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {partner}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 text-[#C5A55A] translate-y-0 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore on Visit Napa Valley
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function ArticleCards() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#F5F0E8]">
      {/* Section header */}
      <div ref={headerRef} className="section-shell max-w-7xl mb-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#C5A55A] text-[11px] tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The Four Pillars
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C] text-balance max-w-3xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Guide to the Valley
        </motion.h2>
      </div>

      <div className="section-shell max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {articles.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
