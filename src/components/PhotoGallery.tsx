"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { partnerImage } from "@/lib/partner-images";

// TODO: Confirm final 5-town list with Madi Griggs (VNV). Oakville and Rutherford are AVAs per client and should NOT appear as towns here.
const VALLEY_TOWNS = [
  {
    id: "american-canyon",
    label: "American Canyon & Carneros",
    pillLabel: "American Canyon",
    subcopy:
      "The southern gateway, with serene hiking trails through nature preserves and wetlands.",
  },
  {
    id: "napa",
    label: "City of Napa",
    pillLabel: "Napa",
    subcopy:
      "Urban energy, walkable downtown, and wine-country mornings.",
  },
  {
    id: "yountville",
    label: "Yountville",
    pillLabel: "Yountville",
    subcopy:
      "Walkable blocks and chef-led tables, the Michelin addresses you know by name.",
  },
  {
    id: "st-helena",
    label: "St. Helena",
    pillLabel: "St. Helena",
    subcopy: "Main Street mornings, estate tastings, and boutique afternoons.",
  },
  {
    id: "calistoga",
    label: "Calistoga",
    pillLabel: "Calistoga",
    subcopy: "Geothermal pools, spa days, and a quiet north-valley escape.",
  },
] as const;

/**
 * One “campaign” frame + one venue frame per town.
 * Venue frames resolve under `public/images/partners/`.
 */
/** [0] = left, [1] = right */
const TOWN_IMAGES: Record<(typeof VALLEY_TOWNS)[number]["id"], readonly [string, string]> = {
  /* American Canyon: Waterways Bay Trail + Chardonnay Golf Course (client assets). */
  "american-canyon": [
    partnerImage("American Canyon/waterways-bay-trail.jpg"),
    partnerImage("American Canyon/chardonnay-golf-course.jpg"),
  ],
  napa: [
    "/images/photography/towns/city-of-napa.png",
    partnerImage("JAM Cellars/GM1_1269_mod1.jpg"),
  ],
  yountville: [
    "/images/photography/towns/yountville.png",
    partnerImage("Meadowood/Meadowood-Napa-Valley-Forum-Restaurant-Short-RIb-Risotto-Paired-with-Wine.jpg"),
  ],
  "st-helena": [
    "/images/photography/wine-cellar-toast.jpg",
    partnerImage("Louis M. Martini/LMM-Tasting-Room-Entrance.jpg"),
  ],
  calistoga: [
    "/images/photography/solage-pool-night.jpg",
    partnerImage("Mount View/POOL-ACCESS-MVH-SPA.jpg"),
  ],
};

function townImageSrc(townId: (typeof VALLEY_TOWNS)[number]["id"], slot: 0 | 1): string {
  const path = TOWN_IMAGES[townId][slot];
  return path.startsWith("/images/partners/") ? path : encodeURI(path);
}

export default function PhotoGallery() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % VALLEY_TOWNS.length);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance, isPaused, reducedMotion]);

  const region = VALLEY_TOWNS[activeIndex];

  return (
    <section
      role="region"
      aria-label="Napa Valley by town"
      style={{
        backgroundColor: "var(--hub-navy)",
        paddingTop: "clamp(2.5rem, 5vw, 4rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="section-shell section-stack mx-auto mb-10"
        style={{ maxWidth: "48rem", textAlign: "center" }}
      >
        <p className="section-eyebrow" style={{ color: "var(--hub-champagne-light)" }}>
          In Napa Valley
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
            {region.label}
          </motion.h2>
        </AnimatePresence>

        {region.subcopy ? (
          <AnimatePresence mode="wait">
            <motion.p
              key={region.id + "-subcopy"}
              initial={reducedMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="hub-prose mt-4 text-center"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {region.subcopy}
            </motion.p>
          </AnimatePresence>
        ) : null}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          {VALLEY_TOWNS.map((town, i) => (
            <button
              key={town.id}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setIsPaused(true);
              }}
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "none",
                padding: "0.45rem 0.9rem",
                borderRadius: "9999px",
                border:
                  i === activeIndex
                    ? "1px solid var(--hub-champagne)"
                    : "1px solid rgba(255,255,255,0.2)",
                backgroundColor: i === activeIndex ? "var(--hub-champagne)" : "transparent",
                color: i === activeIndex ? "var(--hub-navy)" : "rgba(255,255,255,0.75)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {town.pillLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="section-shell mx-auto" style={{ maxWidth: "72rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={region.id + "-photos"}
            initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {([0, 1] as const).map((slot) => (
                <figure
                  key={`${region.id}-photo-${slot}`}
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
                      src={townImageSrc(region.id, slot)}
                      alt={
                        slot === 0
                          ? `${region.label}, Napa Valley, campaign photography`
                          : `${region.label}, Napa Valley, partner image`
                      }
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      loading="lazy"
                    />
                  </div>
                </figure>
              ))}
          </motion.div>
        </AnimatePresence>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "1.5rem",
          }}
        >
          {VALLEY_TOWNS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setIsPaused(true);
              }}
              aria-label={`View ${t.label}`}
              style={{
                width: i === activeIndex ? "1.5rem" : "0.375rem",
                height: "0.375rem",
                borderRadius: "9999px",
                backgroundColor: i === activeIndex ? "var(--hub-champagne)" : "rgba(255,255,255,0.25)",
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
