"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const VIDEO_SRC = "/videos/AdobeStock_274812042.mov";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    void v.play().catch(() => {
      /* autoplay may be deferred; muted clips usually recover on next user gesture */
    });
  }, []);

  return (
    <section
      ref={ref}
      role="region"
      aria-label="Video — see Napa Valley in motion"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "min(68vh, 720px)" }}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ objectPosition: "center 38%" }}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        aria-hidden
      />

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
          A cinematic sweep of wine country—vine rows, back roads, and golden-hour light.
        </motion.p>
      </div>
    </section>
  );
}
