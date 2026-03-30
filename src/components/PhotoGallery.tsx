"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const regions = [
  {
    id: "carneros",
    label: "Carneros · South",
    headline: "Life in the valley",
    accentWord: "valley",
    subtitle: "Where the morning fog burns off by ten, and the vines start at your door.",
    photos: [
      {
        src: "/images/photography/stanly-ranch-spa.jpg",
        caption: "Stanly Ranch, Napa",
      },
      {
        src: "/images/photography/solage-poolside.jpg",
        caption: "Solage, Calistoga",
      },
    ],
  },
  {
    id: "yountville",
    label: "Yountville · Mid-Valley",
    headline: "Where dinner is the destination",
    accentWord: "destination",
    subtitle: "More Michelin stars per square mile than anywhere else in America.",
    photos: [
      {
        src: "/images/photography/press-plating.jpg",
        caption: "Press, St. Helena",
      },
      {
        src: "/images/photography/cadet-dining.jpg",
        caption: "Cadet, Napa",
      },
    ],
  },
  {
    id: "calistoga",
    label: "Calistoga · North",
    headline: "The valley at its most unhurried",
    accentWord: "unhurried",
    subtitle: "Mineral springs, vintage charm, and the best pool in wine country.",
    photos: [
      {
        src: "/images/photography/solage-pool-night.jpg",
        caption: "Solage after dark",
      },
      {
        src: "/images/photography/chandon-brunch.jpg",
        caption: "Domaine Chandon, Yountville",
      },
    ],
  },
  {
    id: "valley",
    label: "The Valley · All of it",
    headline: "Thirty miles of yes",
    accentWord: "yes",
    subtitle:
      "From the bay fog of Carneros to the thermal springs of Calistoga — every mile counts.",
    photos: [
      {
        src: "/images/photography/chandon-hilltop.jpg",
        caption: "Above the valley floor",
      },
      {
        src: "/images/photography/chandon-group.jpg",
        caption: "Domaine Chandon, Yountville",
      },
    ],
  },
];

export default function PhotoGallery() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % regions.length);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance, isPaused, reducedMotion]);

  const region = regions[activeIndex];

  return (
    <section
      role="region"
      aria-label="Napa Valley regions"
      style={{
        backgroundColor: "var(--hub-navy)",
        paddingTop: "clamp(2.5rem, 5vw, 4rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div
        className="section-shell section-stack mx-auto mb-10"
        style={{ maxWidth: "48rem", textAlign: "center" }}
      >
        <p className="section-eyebrow" style={{ color: "var(--hub-champagne-light)" }}>
          In the valley
        </p>

        <AnimatePresence mode="wait">
          <motion.h2
            key={region.id + "-headline"}
            initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="section-title mt-4"
            style={{ color: "#ffffff" }}
          >
            {region.headline.replace(region.accentWord, "").trim().split(" ").join(" ")}{" "}
            <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>
              {region.accentWord}
            </span>
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={region.id + "-subtitle"}
            initial={reducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hub-prose mt-4 text-center"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {region.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Region pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "1.5rem",
          }}
        >
          {regions.map((r, i) => (
            <button
              key={r.id}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setIsPaused(true);
              }}
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                border:
                  i === activeIndex
                    ? "1px solid var(--hub-champagne)"
                    : "1px solid rgba(255,255,255,0.2)",
                backgroundColor:
                  i === activeIndex ? "var(--hub-champagne)" : "transparent",
                color: i === activeIndex ? "var(--hub-navy)" : "rgba(255,255,255,0.6)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photos */}
      <div className="section-shell mx-auto" style={{ maxWidth: "72rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={region.id + "-photos"}
            initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
          >
            {region.photos.map((photo) => (
              <figure
                key={photo.src}
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "var(--hub-radius)",
                  backgroundColor: "rgba(0,0,0,0.25)",
                  margin: 0,
                }}
              >
                <div style={{ position: "relative", aspectRatio: "3/4" }}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 48%",
                    }}
                    loading="lazy"
                  />
                </div>
                <figcaption
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                    padding: "2rem 1.25rem 1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {photo.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "1.5rem",
          }}
        >
          {regions.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setIsPaused(true);
              }}
              aria-label={`View ${regions[i].label}`}
              style={{
                width: i === activeIndex ? "1.5rem" : "0.375rem",
                height: "0.375rem",
                borderRadius: "9999px",
                backgroundColor:
                  i === activeIndex ? "var(--hub-champagne)" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
