"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Four hub articles — unique photography per card (no reuse with editorial strip or video). */
const articles = [
  {
    id: "stay",
    label: "Article · Stay",
    title: "Stay in Napa Valley",
    subtitle: "Where Luxury Meets the Land",
    description:
      "From the vineyard-edge bungalows of Carneros Resort to the storied charm of Mount View Hotel & Inn in Calistoga.",
    image: "/images/photography/solage-pool-night.jpg",
    objectPosition: "50% 45%",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
  },
  {
    id: "dine",
    label: "Article · Dine",
    title: "Dine in Napa Valley",
    subtitle: "Every Meal, a Masterpiece",
    description:
      "From legendary Bouchon Bistro to the rustic charm of Calistoga Depot and The Grove at COPIA.",
    image: "/images/photography/press-plating.jpg",
    objectPosition: "50% 40%",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
  },
  {
    id: "wine",
    label: "Article · Wine",
    title: "Wine in Napa Valley",
    subtitle: "Taste the Terroir",
    description:
      "Over 400 wineries, from the grand Robert Mondavi to elegant Etude and storied Louis Martini.",
    image: "/images/photography/wine-cellar-toast.jpg",
    objectPosition: "50% 35%",
    partners: ["Etude", "Robert Mondavi Winery", "Louis Martini Winery"],
  },
  {
    id: "explore",
    label: "Article · Explore",
    title: "Explore in Napa Valley",
    subtitle: "Beyond the Vine",
    description:
      "Dance at JaM Cellars Ballroom, cruise with Pure Luxury Tours, or play at Marquee Pinball Lounge.",
    image: "/images/photography/cadet-nightlife.jpg",
    objectPosition: "50% 40%",
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
        className="article-card block group relative overflow-hidden rounded-lg shadow-md ring-1 ring-[#2C2C2C]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A55A]"
        style={{ minHeight: "380px", height: "clamp(22rem, 52vw, 30rem)" }}
      >
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: article.objectPosition }}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%] z-[5] bg-gradient-to-t from-[#160608]/95 via-[#2c1518]/65 to-transparent"
          aria-hidden
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-7 sm:p-9 md:p-10 pb-7 md:pb-9">
          <span
            className="inline-flex self-start items-center text-[9px] tracking-[0.28em] uppercase text-white/95 bg-[#63242D]/90 backdrop-blur-sm px-3 py-1.5 mb-3 rounded-sm border border-white/10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {article.label}
          </span>

          <h3
            className="text-2xl sm:text-3xl text-white mb-1.5 leading-snug max-w-[20ch]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {article.title}
          </h3>

          <p
            className="text-white/85 text-base md:text-lg italic mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {article.subtitle}
          </p>

          <div className="overflow-hidden">
            <p
              className="text-white/80 text-sm leading-relaxed md:max-h-0 md:opacity-0 md:group-hover:max-h-28 md:group-hover:opacity-100 transition-[max-height,opacity] duration-500 ease-out line-clamp-4 md:line-clamp-none max-md:mt-0"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {article.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-3 md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:max-h-24 md:group-hover:opacity-100 transition-all duration-500 ease-out md:delay-75">
            {article.partners.map((partner) => (
              <span
                key={partner}
                className="text-[9px] tracking-[0.14em] uppercase text-white/70 px-2.5 py-1 rounded-sm bg-white/5 border border-white/15"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {partner}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-[#C5A55A] translate-y-0 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
            <span
              className="text-[11px] tracking-[0.2em] uppercase font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read on Visit Napa Valley
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transform group-hover:translate-x-1 transition-transform shrink-0"
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
    <section className="relative py-24 md:py-32 bg-[#FEFCF8] border-t border-[#C5A55A]/10">
      <div ref={headerRef} className="section-shell max-w-7xl mb-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          Four features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-title mt-3 text-[#2C2C2C] max-w-3xl mx-auto"
        >
          Stay, Dine, Wine &amp; Explore in Napa Valley
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-4 text-[#4A4A4A]/85 max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Full articles—each pillar of the valley in depth—are in production with
          the editorial team. This hub previews how they&apos;ll live together on
          one evergreen destination page.
        </motion.p>
      </div>

      <div className="section-shell max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {articles.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
