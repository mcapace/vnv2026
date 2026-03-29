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
      "From the vineyard-edge bungalows of Carneros Resort to the storied charm of Mount View Hotel & Inn in Calistoga, Napa Valley's accommodations are destinations unto themselves.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
    accent: "#722F37",
  },
  {
    id: "dine",
    label: "Dine",
    title: "Dine in Napa Valley",
    subtitle: "Every Meal, a Masterpiece",
    description:
      "From Thomas Keller's legendary Bouchon Bistro to the rustic charm of Calistoga Depot and the vibrant Grove at COPIA, the valley's culinary scene rivals any on earth.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
    accent: "#C17744",
  },
  {
    id: "wine",
    label: "Wine",
    title: "Wine in Napa Valley",
    subtitle: "Taste the Terroir",
    description:
      "With over 400 wineries, from the grand reopening of Robert Mondavi to the elegant Etude and storied Louis Martini, every sip reveals a new chapter of the valley's story.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",
    partners: ["Etude", "Robert Mondavi Winery", "Louis Martini Winery"],
    accent: "#4A1C23",
  },
  {
    id: "explore",
    label: "Explore",
    title: "Explore Napa Valley",
    subtitle: "Beyond the Vine",
    description:
      "Dance the night away at JaM Cellars Ballroom, cruise the valley with Pure Luxury Tours, or challenge friends at Marquee Pinball Lounge — adventure awaits at every turn.",
    image:
      "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?q=80&w=1200&auto=format&fit=crop",
    partners: [
      "JaM Cellars Ballroom",
      "Pure Luxury Tours",
      "Marquee Pinball Lounge",
    ],
    accent: "#7A8B6F",
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
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={`#${article.id}`}
        className="article-card block group cursor-wine h-[500px] md:h-[600px] relative"
      >
        {/* Background image */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
          {/* Category label */}
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-2 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Article {index + 1}
          </motion.span>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl text-white mb-2 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {article.title}
          </h3>

          {/* Subtitle */}
          <p
            className="text-white/80 text-lg italic mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {article.subtitle}
          </p>

          {/* Description - shows on hover */}
          <div className="overflow-hidden">
            <p
              className="text-white/70 text-sm leading-relaxed max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {article.description}
            </p>
          </div>

          {/* Partners */}
          <div className="flex flex-wrap gap-2 mt-4 max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-500 ease-out delay-100">
            {article.partners.map((partner) => (
              <span
                key={partner}
                className="text-[9px] tracking-[0.15em] uppercase text-white/50 px-3 py-1 border border-white/15 rounded-full"
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

        {/* Side accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: article.accent }}
        />
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
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 mb-16 text-center">
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

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {articles.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
