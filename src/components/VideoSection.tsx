"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const VIDEO_SRC = "/videos/AdobeStock_33793453_Video_HD_Preview.mov";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (playing) {
      vid.pause();
      setPlaying(false);
    } else {
      void vid.play();
      setPlaying(true);
    }
  };

  return (
    <section
      ref={ref}
      role="region"
      aria-label="Film — see Napa Valley in motion"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "min(68vh, 720px)" }}
    >
      {/* Video element — always present, poster is the first frame */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 38%" }}
        playsInline
        muted
        loop
        preload="metadata"
        aria-hidden
      />

      {/* Dark overlay — lighter when playing so video is more visible */}
      <div
        className="absolute inset-0 z-[1] transition-all duration-700"
        style={{ backgroundColor: playing ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.52)" }}
        aria-hidden
      />

      {/* Grain overlay when not playing */}
      {!playing && (
        <div className="grain-overlay pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      )}

      {/* Content */}
      <div className="section-shell section-stack relative z-20 mx-auto max-w-2xl py-20 md:py-28">
        {/* Hide text when playing */}
        <motion.div
          animate={{ opacity: playing ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ pointerEvents: playing ? "none" : "auto" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow"
            style={{ color: "var(--hub-champagne-light)" }}
          >
            Film
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
            Thirty miles of wine country in motion.
          </motion.p>
        </motion.div>

        {/* Play/Pause button — always visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.18 }}
          className="mt-10"
        >
          <button
            type="button"
            className="play-button"
            aria-label={playing ? "Pause video" : "Play Napa Valley video"}
            onClick={togglePlay}
          >
            {playing ? (
              <PauseIcon className="size-6 text-white" aria-hidden />
            ) : (
              <PlayIcon className="ml-0.5 size-6 text-white" aria-hidden />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
