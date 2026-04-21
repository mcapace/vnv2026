"use client";

import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const articles = [
  {
    id: "stay",
    label: "Stay",
    title: "Where to Stay in Napa Valley",
    subtitle: "Where the valley becomes your room",
    description:
      "From vineyard-edge bungalows at Carneros Resort to the mineral-spa heritage of Mount View Hotel & Inn in Calistoga — a guide to sleeping well in wine country.",
    image: "/images/photography/stanly-ranch-spa.jpg",
    objectPosition: "50% 45%",
    partners: ["Carneros Resort", "Mount View Hotel & Inn"],
    status: "live" as const,
    publishDate: null as string | null,
    articleUrl: "/stay",
  },
  {
    id: "dine",
    label: "Dine",
    title: "Where to Eat in Napa Valley",
    subtitle: "Every reservation earns the drive",
    description:
      "Bouchon Bistro, Calistoga Depot, The Grove at CIA at COPIA — three very different tables along one wine-country corridor.",
    image: "/images/photography/press-plating.jpg",
    objectPosition: "50% 48%",
    partners: ["Bouchon Bistro", "Calistoga Depot", "The Grove @ COPIA"],
    status: "live" as const,
    publishDate: null as string | null,
    articleUrl: "/dine",
  },
  {
    id: "wine",
    label: "Wine",
    title: "Wineries Across Napa Valley",
    subtitle: "Four hundred cellar doors, many styles",
    description:
      "From icons like Robert Mondavi to elegance at Etude and heritage at Louis Martini — a spectrum of Napa Valley cellars, with Wine Spectator context.",
    image: "/images/photography/wine-cellar-toast.jpg",
    objectPosition: "50% 45%",
    partners: ["Etude", "Robert Mondavi", "Louis Martini"],
    status: "coming-soon" as const,
    publishDate: "Coming soon",
    articleUrl: "/wine",
    wineSpectatorPick: true,
  },
  {
    id: "explore",
    label: "Explore",
    title: "Things to Do in Napa Valley",
    subtitle: "When the day doesn't end at the last pour",
    description:
      "JaM Cellars live music, Pure Luxury chauffeured days, Marquee Pinball in downtown Napa — après-vine energy across Napa Valley.",
    image: "/images/photography/cadet-nightlife.jpg",
    objectPosition: "50% 48%",
    partners: ["JaM Cellars", "Pure Luxury Tours", "Marquee Pinball"],
    status: "coming-soon" as const,
    publishDate: "Coming soon",
    articleUrl: "/explore",
  },
];

export default function ArticleCards() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
          Live a Little —{" "}
          <span style={{ color: "var(--hub-champagne)" }}>or a Lot</span>
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.12 }}
          className="hub-prose mx-auto max-w-xl"
        >
          Four stories—stay, dine, wine, explore—each anchored by real places you can book tonight.
        </motion.p>
      </div>

      <div className="section-shell mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        {articles.map((article, i) => (
          <ArticleRow
            key={article.id}
            article={article}
            index={i}
            hoveredIdx={hoveredIdx}
            setHoveredIdx={setHoveredIdx}
          />
        ))}
      </div>
    </section>
  );
}

function ArticleRow({
  article,
  index,
  hoveredIdx,
  setHoveredIdx,
}: {
  article: (typeof articles)[0];
  index: number;
  hoveredIdx: number | null;
  setHoveredIdx: Dispatch<SetStateAction<number | null>>;
}) {
  const href = article.articleUrl ?? `/${article.id}`;
  const isLive = article.status === "live";
  const isComingSoon = article.status === "coming-soon";
  const isHovered = hoveredIdx === index;

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
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: article.objectPosition,
          filter: isComingSoon ? "grayscale(30%) brightness(0.75)" : "none",
          transition: "transform 0.7s ease",
          transform: isHovered ? "scale(1.04)" : "scale(1)",
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
        className="absolute left-4 top-4 z-10 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.15em]"
        style={{
          padding: "0.4rem 1rem",
          backgroundColor: "rgba(0,0,0,0.55)",
          color: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.2)",
          width: "fit-content",
        }}
      >
        {article.label}
      </span>

      {isComingSoon && article.publishDate ? (
        <span
          className="absolute right-4 top-4 z-10 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.15em]"
          style={{
            padding: "0.5rem 1.25rem",
            backgroundColor: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.25)",
            width: "fit-content",
          }}
        >
          {article.publishDate}
        </span>
      ) : null}

      {isLive ? (
        <span
          className="absolute right-4 top-4 z-10 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.15em]"
          style={{
            padding: "0.5rem 1.25rem",
            backgroundColor: "var(--hub-wine)",
            color: "#ffffff",
            width: "fit-content",
          }}
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
            fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)",
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
                padding: "0.3rem 0.75rem",
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
      className="group scroll-mt-28 border border-[var(--hub-line)]"
      onMouseEnter={() => setHoveredIdx(index)}
      onMouseLeave={() => setHoveredIdx(null)}
      style={{
        backgroundColor: "var(--hub-card)",
        opacity: isComingSoon ? 0.72 : 1,
        cursor: isLive ? "pointer" : "default",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(42,38,35,0.14), 0 8px 16px rgba(42,38,35,0.08)"
          : "0 2px 8px rgba(42,38,35,0.06)",
        transition:
          "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease",
        borderRadius: "var(--hub-radius)",
        overflow: "hidden",
      }}
    >
      {isLive ? (
        <a
          href={href}
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
