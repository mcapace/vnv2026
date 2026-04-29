"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** JW Player embed — property/media from dashboard (`p/X65hTucY` / media `hPiR6aJO`). Video is streamed from JW, not bundled in repo. */
const JW_PLAYER_EMBED = "https://content.jwplatform.com/players/hPiR6aJO-X65hTucY.html";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      role="region"
      aria-label="In motion, see Napa Valley"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "min(68vh, 720px)" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <iframe
          src={JW_PLAYER_EMBED}
          title="Visit Napa Valley campaign video"
          className="absolute left-1/2 top-1/2 z-0 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
        aria-hidden
      />

      <div className="section-shell section-stack relative z-20 mx-auto max-w-2xl py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
          style={{ color: "var(--hub-champagne-light)" }}
        >
          In motion
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08 }}
          className="font-hub-display mt-4 text-balance text-4xl font-normal leading-tight tracking-[-0.02em] text-white sm:text-5xl md:text-[3.25rem] text-on-photo"
        >
          See it to{" "}
          <span style={{ color: "var(--hub-champagne-light)", fontStyle: "italic" }}>believe it</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12 }}
          className="font-hub-display mx-auto mt-5 max-w-lg text-lg leading-snug text-white/75 text-on-photo"
        >
          A cinematic sweep of wine country. Vine rows, back roads, golden-hour light.
        </motion.p>
      </div>
    </section>
  );
}
