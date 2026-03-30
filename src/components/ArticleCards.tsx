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
      style={{
        paddingTop: "clamp(3rem, 7vw, 5rem)",
        paddingBottom: "clamp(3rem, 7vw, 5rem)",
      }}
    >
      <div ref={headerRef} className="section-shell section-stack mx-auto mb-10 max-w-2xl md:mb-14">
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

      <div className="section-shell mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleRow key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

function ArticleRow({ article }: { article: (typeof articles)[0] }) {
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
        aria-label={`${article.label} in Napa Valley — ${article.description} — open on Visit Napa Valley`}
        className="group relative block overflow-hidden"
        style={{ minHeight: "480px" }}
      >
        <img
          src={article.image}
          alt=""
          role="presentation"
          className="absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-105"
          style={{ objectPosition: article.objectPosition }}
          loading="lazy"
          width={1200}
          height={800}
          sizes="(max-width: 1024px) 100vw, min(1200px, 100vw)"
        />

        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--hub-ink)]">
          {article.label}
        </span>

        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 pb-7 pt-16">
          <h3 className="font-hub-display text-2xl font-normal text-white">{article.title}</h3>
          <p className="font-hub-display mt-1 text-base italic text-white/80">{article.subtitle}</p>
          {"wineSpectatorPick" in article && article.wineSpectatorPick && (
            <p className="font-hub-sans mt-3 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/90">
              Wine Spectator editor&apos;s pick
            </p>
          )}
          <div className="flex flex-wrap">
            {article.partners.map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "0.125rem 0.625rem",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.7)",
                  marginRight: "0.375rem",
                  marginTop: "0.75rem",
                  whiteSpace: "nowrap",
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/40 px-4 py-2 text-xs font-medium tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[var(--hub-ink)] group-hover:bg-white group-hover:text-[var(--hub-ink)]">
            Visit Napa Valley
            <span aria-hidden>→</span>
          </span>
        </div>
      </a>
    </article>
  );
}
