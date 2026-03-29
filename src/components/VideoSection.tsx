"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

const VIDEO_EMBED_SRC =
  "https://www.youtube.com/embed/4fzHsX-jkPQ?rel=0&modestbranding=1";

export default function VideoSection() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const clearVideo = useCallback(() => setVideoUrl(null), []);

  useEffect(() => {
    if (!videoUrl) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") clearVideo();
    };
    document.addEventListener("keydown", onKey);
    queueMicrotask(() => closeRef.current?.focus());
    return () => document.removeEventListener("keydown", onKey);
  }, [videoUrl, clearVideo]);

  return (
    <section
      ref={ref}
      role="region"
      aria-label="Film — see Napa Valley in motion"
      className="relative flex min-h-[min(56vh,640px)] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/photography/chandon-hilltop.jpg"
          alt="Vine-covered hills above Napa Valley at dusk"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 38%" }}
          loading="lazy"
          width={1920}
          height={1080}
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-black/40" aria-hidden />
      {!videoUrl && (
        <div className="grain-overlay pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      )}

      {!videoUrl ? (
        <div className="section-shell section-stack relative z-20 mx-auto max-w-2xl py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            className="section-eyebrow text-[var(--hub-champagne-light)] text-on-photo"
          >
            Film
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-hub-serif mt-4 text-balance text-3xl font-normal leading-tight tracking-[-0.02em] text-white sm:text-4xl md:text-[2.6rem] text-on-photo"
          >
            See it to{" "}
            <span className="text-[var(--hub-champagne-light)]">believe it</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="font-hub-display mx-auto mt-5 max-w-lg text-lg leading-snug text-white/88 text-on-photo"
          >
            Thirty miles of wine country in motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.18 }}
            className="mt-10"
          >
            <button
              type="button"
              className="play-button"
              aria-label="Play Napa Valley promotional video"
              aria-expanded={false}
              onClick={() => setVideoUrl(`${VIDEO_EMBED_SRC}&autoplay=1`)}
            >
              <PlayIcon className="ml-0.5 size-6 text-white" aria-hidden />
            </button>
          </motion.div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 z-30 bg-black">
            <iframe
              title="Napa Valley feature video"
              src={videoUrl}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={clearVideo}
            className="absolute right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition hover:bg-black/80"
            aria-label="Close video"
          >
            <XMarkIcon className="size-6" aria-hidden />
          </button>
        </>
      )}
    </section>
  );
}
