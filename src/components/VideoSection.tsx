"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Client delivery: campaign .mp4 under public. JW dashboard (playlist) is for reference; browser uses this file. */
const CAMPAIGN_VIDEO = encodeURI("/images/Assets for Hub/Video/VNV_LiveALittle_Chandon_30_Unslated.mp4");

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
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        style={{ objectPosition: "center 38%" }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        width={1920}
        height={1080}
        aria-hidden
      >
        <source src={CAMPAIGN_VIDEO} type="video/mp4" />
      </video>

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
