"use client";

import { useRef, useState, useEffect, type RefObject } from "react";
import Image from "next/image";

/** Direct JW CDN media (validated URLs from media API). */
const VIDEO_HLS_SRC = "https://cdn.jwplayer.com/manifests/hPiR6aJO.m3u8";
const VIDEO_MP4_SRC = "https://cdn.jwplayer.com/videos/hPiR6aJO-Tsd3GKpP.mp4";
const VIDEO_POSTER = "https://cdn.jwplayer.com/v2/media/hPiR6aJO/poster.jpg?width=1280";
const LOCAL_POSTER_SRC = "/images/photography/chandon-brunch.jpg";

/**
 * Unlock once the section overlaps the main viewport band (not edge-graze).
 * We intentionally do NOT require a high `intersectionRatio`: for a tall block,
 * ratio stays low vs. full element height even when the clip is centered on screen.
 */
function usePlaybackSectionGate(ref: RefObject<HTMLElement | null>): boolean {
  const [active, setActive] = useState(false);
  const unlockedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || unlockedRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || unlockedRef.current) return;

        const rect = entry.boundingClientRect;
        const vh = window.innerHeight || 1;

        const overlapsReadableBand = rect.bottom > vh * 0.12 && rect.top < vh * 0.88;

        if (overlapsReadableBand) {
          unlockedRef.current = true;
          setActive(true);
          io.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -10% 0px",
        threshold: [0, 0.02, 0.05, 0.1, 0.15, 0.2, 0.25, 0.35, 0.5, 0.75, 1],
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  return active;
}

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playbackGate = usePlaybackSectionGate(sectionRef);
  const [copyHiddenForPlayback, setCopyHiddenForPlayback] = useState(false);
  const showHeadline = !copyHiddenForPlayback;

  useEffect(() => {
    if (!playbackGate) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Browser blocked autoplay despite muted+in-view; keep poster and title visible.
      });
    }
  }, [playbackGate]);

  useEffect(() => {
    if (!playbackGate) return;

    const fadeTimer = window.setTimeout(() => {
      setCopyHiddenForPlayback(true);
    }, 5000);

    const unmuteTimer = window.setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      try {
        v.muted = false;
        v.volume = 1;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {
        // Browsers may block unmuted autoplay without direct user interaction.
      }
    }, 5000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(unmuteTimer);
    };
  }, [playbackGate]);

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="In motion, see Napa Valley"
      className="relative flex items-center justify-center overflow-hidden bg-[#141210]"
      style={{ minHeight: "min(68vh, 720px)" }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {!playbackGate ? (
          <div className="relative h-full min-h-[min(68vh,720px)] w-full">
            <Image
              src={LOCAL_POSTER_SRC}
              alt=""
              fill
              className="object-cover opacity-55"
              sizes="100vw"
              priority={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35"
              aria-hidden
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 flex min-h-[min(68vh,720px)] items-center justify-center bg-black"
            style={{ pointerEvents: "auto" }}
          >
            <video
              ref={videoRef}
              className="absolute inset-0 z-[1] h-full w-full object-cover"
              poster={VIDEO_POSTER}
              preload="metadata"
              autoPlay
              muted
              playsInline
              controls
              onLoadedData={() => {
                // Retry autoplay once metadata + first frame are ready.
                if (!playbackGate || !videoRef.current) return;
                const p = videoRef.current.play();
                if (p && typeof p.catch === "function") p.catch(() => {});
              }}
            >
              <source src={VIDEO_HLS_SRC} type="application/vnd.apple.mpegurl" />
              <source src={VIDEO_MP4_SRC} type="video/mp4" />
            </video>
          </div>
        )}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundColor: copyHiddenForPlayback ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.25)",
          transition: "background-color 0.45s ease",
        }}
        aria-hidden
      />

      <div className="section-shell section-stack relative z-20 mx-auto max-w-2xl py-20 md:py-28 pointer-events-none">
        <div
          className="transition-[opacity,transform] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: showHeadline ? 1 : 0,
            transform: showHeadline ? "translateY(0)" : "translateY(10px)",
            visibility: showHeadline ? "visible" : "hidden",
          }}
          aria-hidden={!showHeadline}
        >
          <p className="section-eyebrow" style={{ color: "var(--hub-champagne-light)" }}>
            In motion
          </p>
          <h2 className="font-hub-display mt-4 text-balance text-4xl font-normal leading-tight tracking-[-0.02em] text-white sm:text-5xl md:text-[3.25rem] text-on-photo">
            See it to{" "}
            <span style={{ color: "var(--hub-champagne-light)", fontStyle: "italic" }}>believe it</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
