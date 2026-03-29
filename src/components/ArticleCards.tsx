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
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
  },
  {
    id: "dine",
    label: "Dine",
    title: "Dine in Napa Valley",
    subtitle: "Every Meal, a Masterpiece",
    description:
      "From Thomas Keller's legendary Bouchon Bistro to the rustic charm of Calistoga Depot and The Grove at COPIA.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
  },
  {
    id: "wine",
    label: "Wine",
    title: "Wine in Napa Valley",
    subtitle: "Taste the Terroir",
    description:
      "Over 400 wineries, from the grand Robert Mondavi to elegant Etude and storied Louis Martini.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",
    partners: ["Etude", "Robert Mondavi Winery", "Louis Martini Winery"],
  },
  {
    id: "explore",
    label: "Explore",
    title: "Explore Napa Valley",
    subtitle: "Beyond the Vine",
    description:
      "Dance at JaM Cellars Ballroom, cruise with Pure Luxury Tours, or play at Marquee Pinball Lounge.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <a
        href={`#${article.id}`}
        className="article-card block group h-full relative"
        style={{ minHeight: "480px" }}
      >
        {/* Background image */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-7 md:p-8">
          {/* Category pill */}
          <span
            className="inline-block self-start text-[9px] tracking-[0.3em] uppercase text-white/90 bg-[#63242D]/70 backdrop-blur-sm px-3 py-1 mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {article.label}
          </span>

          {/* Title */}
          <h3
            className="text-2xl md:text-[1.65rem] text-white mb-1 leading-snug"
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

          {/* Description - shows on hover */}
          <div className="overflow-hidden">
            <p
              className="text-white/70 text-sm leading-relaxed max-h-0 group-hover:max-h-20 transition-all duration-500 ease-out"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {article.description}
            </p>
          </div>

          {/* Partners pills */}
          <div className="flex flex-wrap gap-2 mt-3 max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-500 ease-out delay-75">
            {article.partners.map((partner) => (
              <span
                key={partner}
                className="text-[9px] tracking-[0.12em] uppercase text-white/60 px-2.5 py-1 border border-white/20 rounded-full"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {partner}
              </span>
            ))}
          </div>

          {/* Read more */}
          <div className="mt-4 flex items-center gap-2 text-[#C5A55A] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read Article
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
    </motion.div>
  );
}

export default function ArticleCards() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#F5F0E8]">
      {/* Section header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 mb-14 text-center">
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
          className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Guide to the Valley
        </motion.h2>
      </div>

      {/* Cards grid - equal height via grid stretch */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
