"use client";

import { useRef, useState, useEffect, useLayoutEffect, type RefObject } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/** JW Cloud library for player id `X65hTucY` (matches embed `hPiR6aJO-X65hTucY`). */
const JW_LIBRARY_SRC = "https://cdn.jwplayer.com/libraries/X65hTucY.js";

/** Stream + poster from JW media API (`hPiR6aJO`). */
const HLS_MANIFEST = "https://cdn.jwplayer.com/manifests/hPiR6aJO.m3u8";
const JW_POSTER = "https://cdn.jwplayer.com/v2/media/hPiR6aJO/poster.jpg?width=1280";
const VIDEO_TITLE = "VNV LiveALittle Chandon 30 Unslated";

/** Poster until section passes scroll gate. */
const LOCAL_POSTER_SRC = "/images/photography/chandon-brunch.jpg";

type JWPlayerApi = {
  setup: (config: Record<string, unknown>) => JWPlayerApi;
  on: (event: string, callback: () => void) => JWPlayerApi;
  remove: () => void;
  play?: () => void;
};

type JWPlayerFactory = (target: string | HTMLElement) => JWPlayerApi;

declare global {
  interface Window {
    jwplayer?: JWPlayerFactory;
  }
}

function loadJwLibrary(): Promise<JWPlayerFactory> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.jwplayer) {
    return Promise.resolve(window.jwplayer);
  }
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${JW_LIBRARY_SRC}"]`);
    if (existing) {
      if (window.jwplayer) {
        resolve(window.jwplayer);
        return;
      }
      existing.addEventListener("load", () => {
        if (window.jwplayer) resolve(window.jwplayer);
        else reject(new Error("JW Player not available after load"));
      });
      existing.addEventListener("error", () => reject(new Error("JW script load error")));
      return;
    }
    const script = document.createElement("script");
    script.src = JW_LIBRARY_SRC;
    script.async = true;
    script.onload = () => {
      if (window.jwplayer) resolve(window.jwplayer);
      else reject(new Error("JW Player global missing"));
    };
    script.onerror = () => reject(new Error("JW script failed"));
    document.head.appendChild(script);
  });
}

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
  const playerMountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<JWPlayerApi | null>(null);

  const playbackGate = usePlaybackSectionGate(sectionRef);
  const [copyHiddenForPlayback, setCopyHiddenForPlayback] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const showHeadline = playbackGate && !copyHiddenForPlayback;

  useLayoutEffect(() => {
    if (!playbackGate) return;

    let cancelled = false;

    (async () => {
      try {
        const jw = await loadJwLibrary();
        if (cancelled || !playerMountRef.current) return;

        const p = jw(playerMountRef.current).setup({
          playlist: [
            {
              file: HLS_MANIFEST,
              image: JW_POSTER,
              title: VIDEO_TITLE,
            },
          ],
          width: "100%",
          aspectratio: "16:9",
          stretching: "uniform",
          mute: true,
          /* Gate already delayed mount until scroll — muted autoplay is allowed in browsers */
          autostart: true,
        });

        playerRef.current = p;

        const hideCopy = () => setCopyHiddenForPlayback(true);
        const showCopy = () => setCopyHiddenForPlayback(false);

        p.on("play", hideCopy);
        p.on("firstFrame", hideCopy);
        p.on("pause", showCopy);
        p.on("complete", showCopy);

        /* Ready / programmatic fallback — handles JW firing `ready` before our handlers attach */
        const tryPlay = () => {
          if (cancelled) return;
          try {
            p.play?.();
          } catch {
            /* ignore */
          }
        };

        p.on("ready", tryPlay);
        queueMicrotask(tryPlay);
        window.setTimeout(tryPlay, 120);

        setPlayerReady(true);
      } catch {
        setPlayerReady(false);
      }
    })();

    return () => {
      cancelled = true;
      try {
        playerRef.current?.remove();
      } catch {
        /* ignore */
      }
      playerRef.current = null;
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
            {!playerReady ? (
              <div className="absolute inset-0">
                <Image
                  src={LOCAL_POSTER_SRC}
                  alt=""
                  fill
                  className="object-cover opacity-45"
                  sizes="100vw"
                />
              </div>
            ) : null}
            <div
              ref={playerMountRef}
              id="vnv-hub-jw-player"
              className="relative z-[1] h-full min-h-[min(68vh,720px)] w-full max-w-[100vw]"
              style={{ minHeight: "min(68vh, 720px)" }}
            />
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

        {copyHiddenForPlayback ? (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pointer-events-auto mx-auto mt-6 rounded-full border border-white/35 bg-black/35 px-4 py-2 text-[0.5625rem] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm"
            style={{ marginTop: "1rem" }}
            onClick={() => setCopyHiddenForPlayback(false)}
          >
            Show headline
          </motion.button>
        ) : null}
      </div>
    </section>
  );
}
