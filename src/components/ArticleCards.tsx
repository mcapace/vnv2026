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
    subtitle: "Where the valley becomes your room",
    description:
      "From vineyard-edge bungalows at Carneros Resort to the charm of Mount View Hotel & Inn in Calistoga.",
    image: "/images/photography/solage-pool-night.jpg",
    objectPosition: "50% 48%",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
  },
  {
    id: "dine",
    label: "Dine",
    title: "Dine in Napa Valley",
    subtitle: "Every reservation earns the drive",
    description:
      "Bouchon Bistro, Calistoga Depot, The Grove at COPIA—extraordinary kitchens, minutes apart.",
    image: "/images/photography/press-plating.jpg",
    objectPosition: "50% 48%",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
  },
  {
    id: "wine",
    label: "Wine",
    title: "Wine in Napa Valley",
    subtitle: "Four hundred cellar doors, one corridor",
    description:
      "Icons like Robert Mondavi, elegance at Etude, history at Louis Martini—without endless mileage.",
    image: "/images/photography/wine-cellar-toast.jpg",
    objectPosition: "50% 45%",
    partners: ["Etude", "Robert Mondavi", "Louis Martini"],
    wineSpectatorPick: true,
  },
  {
    id: "explore",
    label: "Explore",
    title: "Explore in Napa Valley",
    subtitle: "When the day doesn’t end at the last pour",
    description:
      "JaM Cellars Ballroom, Pure Luxury Tours, Marquee Pinball—the valley after dark and between vines.",
    image: "/images/photography/cadet-nightlife.jpg",
    objectPosition: "50% 48%",
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
      className="border-t border-[var(--hub-line)] bg-[var(--hub-paper-2)]"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div ref={headerRef} className="section-shell section-stack mx-auto mb-16 max-w-2xl md:mb-24">
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
        >
          Four pillars
        </motion.p>
        <motion.h2
          id="features-heading"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.06 }}
          className="section-title"
        >
          Stay, dine, wine &amp; explore
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.12 }}
          className="hub-prose mx-auto max-w-xl"
        >
          Four ways to experience the valley — each one closer than you think.
        </motion.p>
      </div>

      <div className="section-shell mx-auto flex flex-col gap-12 md:gap-20">
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
      className="hub-card-elevated scroll-mt-28 overflow-hidden rounded-[var(--hub-radius)] border border-[var(--hub-line)] bg-[var(--hub-card)]"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${article.label} in Napa Valley — open on Visit Napa Valley`}
        className={`group flex min-h-0 w-full min-w-0 flex-col items-stretch lg:min-h-[min(520px,85vh)] lg:max-h-[640px] lg:flex-row ${
          imageLeft ? "" : "lg:flex-row-reverse"
        }`}
      >
        <div className="relative min-h-[240px] w-full min-w-0 shrink-0 overflow-hidden bg-[var(--hub-paper-2)] sm:min-h-[300px] lg:w-1/2 lg:min-h-0 lg:max-w-[50%]">
          <img
            src={article.image}
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover motion-safe:transition motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.02]"
            style={{ objectPosition: article.objectPosition }}
            loading="lazy"
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center px-7 py-12 md:px-12 md:py-14 lg:max-w-[50%] lg:px-14 lg:py-16">
          <span className="font-hub-sans mb-5 w-fit text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--hub-champagne)]">
            {article.label}
          </span>
          <h3 className="font-hub-serif text-[clamp(1.875rem,3.2vw,2.45rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[var(--hub-ink)]">
            {article.title}
          </h3>
          <p className="font-hub-display mt-4 text-xl font-normal italic leading-snug text-[var(--hub-wine)] md:text-[1.375rem]">
            {article.subtitle}
          </p>
          {"wineSpectatorPick" in article && article.wineSpectatorPick && (
            <p className="font-hub-sans mt-5 inline-flex w-fit items-center rounded-full border border-rose-900/15 bg-[var(--hub-accent-soft)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--hub-wine)]">
              Wine Spectator editor&apos;s pick
            </p>
          )}
          <p className="font-hub-sans mt-7 max-w-lg text-[0.96875rem] leading-[1.78] text-[var(--hub-muted)]">
            {article.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {article.partners.map((p) => (
              <span
                key={p}
                className="font-hub-sans rounded-full border border-[var(--hub-line)] bg-[var(--hub-paper)] px-3.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.08em] text-[var(--hub-muted)]"
              >
                {p}
              </span>
            ))}
          </div>
          <span className="font-hub-sans mt-9 inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-wine)]">
            Visit Napa Valley
            <span aria-hidden className="text-[var(--hub-champagne)]">
              →
            </span>
          </span>
        </div>
      </a>
    </article>
  );
}
