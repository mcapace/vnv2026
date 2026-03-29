"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const articles = [
  {
    id: "stay",
    label: "Stay",
    title: "Stay in Napa Valley",
    subtitle: "Where luxury meets the land",
    description:
      "From vineyard-edge bungalows at Carneros Resort to the charm of Mount View Hotel & Inn in Calistoga.",
    image: "/images/photography/solage-pool-night.jpg",
    objectPosition: "50% 45%",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
  },
  {
    id: "dine",
    label: "Dine",
    title: "Dine in Napa Valley",
    subtitle: "Every meal, a centerpiece",
    description:
      "Bouchon Bistro, Calistoga Depot, The Grove at COPIA—dense talent in a short stretch of road.",
    image: "/images/photography/press-plating.jpg",
    objectPosition: "50% 40%",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
  },
  {
    id: "wine",
    label: "Wine",
    title: "Wine in Napa Valley",
    subtitle: "Taste the terroir",
    description:
      "Four hundred wineries—icons like Robert Mondavi, elegance at Etude, history at Louis Martini.",
    image: "/images/photography/wine-cellar-toast.jpg",
    objectPosition: "50% 35%",
    partners: ["Etude", "Robert Mondavi", "Louis Martini"],
  },
  {
    id: "explore",
    label: "Explore",
    title: "Explore in Napa Valley",
    subtitle: "Beyond the vine",
    description:
      "JaM Cellars Ballroom, Pure Luxury Tours, Marquee Pinball—proof the valley doesn’t end at the tasting room.",
    image: "/images/photography/cadet-nightlife.jpg",
    objectPosition: "50% 40%",
    partners: ["JaM Cellars", "Pure Luxury Tours", "Marquee Pinball"],
  },
];

export default function ArticleCards() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      className="border-t border-[var(--hub-line)] bg-white"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div ref={headerRef} className="section-shell mx-auto mb-14 max-w-2xl text-center md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
        >
          Four features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.06 }}
          className="section-title mt-4"
        >
          Stay, dine, wine &amp; explore
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12 }}
          className="hub-prose mt-5"
        >
          Long-form articles for each pillar are in production. For now, follow
          through to Visit Napa Valley for planning—imagery and copy will
          deepen here for launch.
        </motion.p>
      </div>

      <div className="border-y border-[var(--hub-line)]">
        {articles.map((article, index) => (
          <ArticleRow key={article.id} article={article} index={index} />
        ))}
      </div>
    </section>
  );
}

function ArticleRow({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const imageLeft = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      id={article.id}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.05 }}
      className="scroll-mt-28 border-b border-[var(--hub-line)] bg-[var(--hub-paper)] last:border-b-0 lg:min-h-[420px]"
    >
      <a
        href="https://www.visitnapavalley.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${article.title} — open Visit Napa Valley`}
        className={`group grid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hub-wine)] lg:grid-cols-2 lg:min-h-[420px]`}
      >
        <div
          className={`relative h-64 overflow-hidden lg:h-full ${
            imageLeft ? "lg:order-none" : "lg:order-2"
          }`}
        >
          <img
            src={article.image}
            alt=""
            role="presentation"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: article.objectPosition }}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div
          className={`flex flex-col justify-center px-8 py-12 lg:px-14 lg:py-16 xl:px-20 ${
            imageLeft ? "lg:order-none" : "lg:order-1"
          }`}
        >
          <span
            className="mb-3 w-fit text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--hub-gold)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {article.label}
          </span>
          <h3
            className="text-[clamp(1.75rem,3.5vw,2.35rem)] font-normal leading-tight text-[var(--hub-ink)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {article.title}
          </h3>
          <p
            className="mt-2 text-xl italic text-[var(--hub-wine)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {article.subtitle}
          </p>
          <p
            className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-[var(--hub-muted)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {article.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {article.partners.map((p) => (
              <span
                key={p}
                className="rounded border border-[var(--hub-line)] bg-white px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-[var(--hub-muted)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {p}
              </span>
            ))}
          </div>
          <span
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[var(--hub-wine)] pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--hub-wine)] transition group-hover:border-[var(--hub-gold)] group-hover:text-[var(--hub-gold)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Visit Napa Valley
            <span aria-hidden>→</span>
          </span>
        </div>
      </a>
    </motion.article>
  );
}
