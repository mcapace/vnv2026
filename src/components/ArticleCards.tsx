"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const pillarHref: Record<string, string> = {
  stay: "https://www.visitnapavalley.com/hotels/",
  dine: "https://www.visitnapavalley.com/restaurants/",
  wine: "https://www.visitnapavalley.com/wineries/",
  explore: "https://www.visitnapavalley.com/things-to-do/",
};

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
    wineSpectatorPick: true,
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
  const reducedMotion = useReducedMotion();

  return (
    <section
      role="region"
      aria-labelledby="features-heading"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-card)]"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div ref={headerRef} className="section-shell mx-auto mb-10 max-w-2xl text-center md:mb-14">
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
        >
          Four features
        </motion.p>
        <motion.h2
          id="features-heading"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.06 }}
          className="section-title mt-4"
        >
          Stay, dine, wine &amp; explore
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.12 }}
          className="hub-prose mt-5"
        >
          Four ways to experience the valley — each one closer than you think.
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
  const imageLeft = index % 2 === 0;
  const href = pillarHref[article.id] ?? "https://www.visitnapavalley.com";

  return (
    <article
      id={article.id}
      className="scroll-mt-28 border-b border-[var(--hub-line)] bg-[var(--hub-paper)] last:border-b-0"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${article.title} — open on Visit Napa Valley`}
        className="group grid transition-shadow duration-[400ms] ease-in-out hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hub-wine)] lg:grid-cols-2 lg:min-h-[380px]"
      >
        <div
          className={`relative h-56 overflow-hidden sm:h-64 lg:h-full ${
            imageLeft ? "lg:order-none" : "lg:order-2"
          }`}
        >
          <img
            src={article.image}
            alt=""
            role="presentation"
            className="h-full w-full object-cover transition duration-[400ms] ease-in-out group-hover:brightness-110"
            style={{ objectPosition: article.objectPosition }}
            loading="lazy"
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div
          className={`flex flex-col justify-center px-6 py-10 lg:px-12 lg:py-14 xl:px-16 ${
            imageLeft ? "lg:order-none" : "lg:order-1"
          }`}
        >
          <span
            className="mb-3 w-fit text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--hub-gold-bright)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {article.label}
          </span>
          <h3
            className="text-[clamp(1.65rem,3.2vw,2.25rem)] font-normal leading-tight text-[var(--hub-ink)]"
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
          {"wineSpectatorPick" in article && article.wineSpectatorPick && (
            <p
              className="mt-3 inline-flex w-fit items-center gap-2 rounded border border-[var(--hub-wine)]/25 bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--hub-wine)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Wine Spectator editor&apos;s pick
            </p>
          )}
          <p
            className="mt-5 max-w-md text-[0.9375rem] leading-[1.7] text-[var(--hub-muted)]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {article.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {article.partners.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[var(--hub-line)] bg-[var(--hub-card)] px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-[var(--hub-muted)] transition hover:underline"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {p}
              </span>
            ))}
          </div>
          <span
            className="mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-[var(--hub-wine)] pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--hub-wine)] transition group-hover:border-amber-800 group-hover:text-amber-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Visit Napa Valley
            <span aria-hidden className="inline-block transition-colors group-hover:text-[var(--hub-gold-bright)]">
              →
            </span>
          </span>
        </div>
      </a>
    </article>
  );
}
