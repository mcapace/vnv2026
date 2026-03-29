"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/** Wine Country / Napa region feature — replace with your final campaign embed if needed */
const VIDEO_EMBED_SRC =
  "https://www.youtube.com/embed/4fzHsX-jkPQ?rel=0&modestbranding=1";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    queueMicrotask(() => closeRef.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <section
        ref={ref}
        className="relative h-[70vh] min-h-[500px] max-h-[900px] overflow-hidden"
      >
        {/* Static full-bleed background (parallax removed — avoids banding/seams on faces) */}
        <div className="absolute inset-0">
          <img
            src="/images/photography/chandon-hilltop.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2C2C2C]/55 z-10" />
        <div className="grain-overlay absolute inset-0 z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center section-shell max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C5A55A] text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience the Valley
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-10 text-balance"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            See It to <em className="text-[#C5A55A]">Believe It</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              type="button"
              className="play-button"
              aria-label="Play video"
              aria-haspopup="dialog"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1"
              >
                <polygon points="8,4 20,12 8,20" />
              </svg>
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 mt-8 max-w-md text-balance px-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
          >
            Take a cinematic journey through thirty miles of vineyards,
            world-class dining, and unforgettable experiences.
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            role="presentation"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-dialog-title"
              className="relative w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 id="video-dialog-title" className="sr-only">
                Featured Napa Valley video
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                aria-label="Close video"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full aspect-video">
                <iframe
                  title="Napa Valley feature video"
                  src={VIDEO_EMBED_SRC}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
