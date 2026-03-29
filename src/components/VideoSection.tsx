"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const VIDEO_EMBED_SRC =
  "https://www.youtube.com/embed/4fzHsX-jkPQ?rel=0&modestbranding=1";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
        className="relative flex min-h-[min(72vh,820px)] items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/images/photography/chandon-hilltop.jpg"
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 32%" }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-[#1a1416]/72" aria-hidden />
        <div className="grain-overlay pointer-events-none absolute inset-0 z-10" />

        <div className="relative z-20 mx-auto max-w-xl px-6 py-20 text-center md:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow text-[var(--hub-gold-bright)]"
          >
            Film
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="mt-4 text-balance text-3xl font-normal leading-tight text-white sm:text-4xl md:text-[2.6rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            See it to{" "}
            <span className="text-[var(--hub-gold-bright)]">believe it</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.18 }}
            className="mt-10"
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
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-0.5"
              >
                <polygon points="8,4 20,12 8,20" />
              </svg>
            </button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28 }}
            className="mt-8 text-lg text-white/65"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Thirty miles of wine country in motion—use as placeholder until
            final hero film is delivered.
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            role="presentation"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-dialog-title"
              className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-white/10"
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 id="video-dialog-title" className="sr-only">
                Napa Valley video
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/80"
                aria-label="Close video"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-video w-full">
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
