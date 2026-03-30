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
    title: "The Best Places to Stay in Napa Valley",
    subtitle: "Where the valley becomes your room",
    description:
      "From vineyard-edge bungalows at Carneros Resort to the mineral-spa heritage of Mount View Hotel & Inn in Calistoga — a guide to sleeping well in wine country.",
    image: "/images/photography/solage-pool-night.jpg",
    objectPosition: "50% 48%",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
    status: "live" as const,
    publishDate: null as string | null,
    articleUrl: "https://www.winespectator.com",
  },
  {
    id: "dine",
    label: "Dine",
    title: "Where to Eat in Napa Valley",
    subtitle: "Every reservation earns the drive",
    description:
      "Bouchon Bistro, Calistoga Depot, The Grove at COPIA — extraordinary kitchens within thirty miles of each other.",
    image: "/images/photography/press-plating.jpg",
    objectPosition: "50% 48%",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
    status: "coming-soon" as const,
    publishDate: "Coming soon",
    articleUrl: null,
  },
  {
    id: "wine",
    label: "Wine",
    title: "The Best Wineries in Napa Valley",
    subtitle: "Four hundred cellar doors, one corridor",
    description:
      "Icons like Robert Mondavi, elegance at Etude, history at Louis Martini — the Wine Spectator guide to Napa's cellars.",
    image: "/images/photography/wine-cellar-toast.jpg",
    objectPosition: "50% 45%",
    partners: ["Etude", "Robert Mondavi", "Louis Martini"],
    status: "coming-soon" as const,
    publishDate: "Coming soon",
    articleUrl: null,
    wineSpectatorPick: true,
  },
  {
    id: "explore",
    label: "Explore",
    title: "Things to Do in Napa Valley",
    subtitle: "When the day doesn't end at the last pour",
    description:
      "JaM Cellars Ballroom, Pure Luxury Tours, Marquee Pinball — the valley after dark and between vines.",
    image: "/images/photography/cadet-nightlife.jpg",
    objectPosition: "50% 48%",
    partners: ["JaM Cellars", "Pure Luxury Tours", "Marquee Pinball"],
    status: "coming-soon" as const,
    publishDate: "Coming soon",
    articleUrl: null,
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
          The guide
        </motion.p>
        <motion.h2
          id="features-heading"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.06 }}
          className="section-title"
        >
          A World in 30 Miles —{" "}
          <span style={{ color: "var(--hub-champagne)" }}>The Series</span>
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.12 }}
          className="hub-prose mx-auto max-w-xl"
        >
          Stay. Dine. Wine. Explore. One valley, thirty miles, four stories.
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
  const href = article.articleUrl ?? pillarHref[article.id] ?? "https://www.visitnapavalley.com";
  const isLive = article.status === "live";
  const isComingSoon = article.status === "coming-soon";

  const shellClassName = "group relative block overflow-hidden";
  const shellStyle: React.CSSProperties = {
    minHeight: "420px",
    cursor: isLive ? "pointer" : "default",
    pointerEvents: isComingSoon ? "none" : "auto",
  };

  const cardBody = (
    <>
      <img
        src={article.image}
        alt=""
        role="presentation"
        className={`absolute inset-0 h-full w-full object-cover ${isLive ? "motion-safe:transition-transform motion-safe:duration-[700ms] motion-safe:ease-out motion-safe:group-hover:scale-105" : ""}`}
        style={{
          objectPosition: article.objectPosition,
          filter: isComingSoon ? "grayscale(30%) brightness(0.75)" : "none",
          transition: "transform 0.7s ease",
        }}
        loading="lazy"
        width={1200}
        height={800}
        sizes="(max-width: 1024px) 100vw, min(1200px, 100vw)"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 40%, transparent 70%)",
        }}
      />

      <span
        className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]"
        style={{ backgroundColor: "rgba(255,255,255,0.92)", color: "var(--hub-ink)" }}
      >
        {article.label}
      </span>

      {isComingSoon && article.publishDate ? (
        <span
          className="absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]"
          style={{ backgroundColor: "var(--hub-champagne)", color: "var(--hub-navy)" }}
        >
          {article.publishDate}
        </span>
      ) : null}

      {isLive ? (
        <span
          className="absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]"
          style={{ backgroundColor: "var(--hub-wine)", color: "#ffffff" }}
        >
          Read now
        </span>
      ) : null}

      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ padding: "3rem 1.5rem 1.5rem" }}
      >
        <h3
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "0.375rem",
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "0.5rem",
          }}
        >
          {article.subtitle}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.375rem",
            marginBottom: "0.875rem",
          }}
        >
          {article.partners.map((p) => (
            <span
              key={p}
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "0.125rem 0.5rem",
                fontSize: "0.625rem",
                color: "rgba(255,255,255,0.75)",
                whiteSpace: "nowrap",
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {isLive ? (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              borderRadius: "9999px",
              backgroundColor: "var(--hub-champagne)",
              color: "var(--hub-navy)",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "0.625rem 1.25rem",
              letterSpacing: "0.04em",
            }}
          >
            Read the article →
          </span>
        ) : (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.75rem",
              fontWeight: 500,
              padding: "0.625rem 1.25rem",
              letterSpacing: "0.04em",
            }}
          >
            Article coming soon
          </span>
        )}
      </div>
    </>
  );

  return (
    <article
      id={article.id}
      className="scroll-mt-28 overflow-hidden rounded-[var(--hub-radius)] border border-[var(--hub-line)] hub-card-elevated"
      style={{
        backgroundColor: "var(--hub-card)",
        opacity: isComingSoon ? 0.72 : 1,
      }}
    >
      {isLive ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read: ${article.title}`}
          className={shellClassName}
          style={shellStyle}
        >
          {cardBody}
        </a>
      ) : (
        <div
          className={shellClassName}
          style={shellStyle}
          aria-label={`${article.title} — coming soon`}
          role="group"
        >
          {cardBody}
        </div>
      )}
    </article>
  );
}
