"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/**
 * JW Player embed — property/media from dashboard (`p/X65hTucY` / media `hPiR6aJO`).
 * Iframe mounts only after scroll (~25% visible). URL asks for muted autoplay so browsers allow it;
 * viewers unmute from JW controls. If params are ignored, enable autostart + mute in the JW dashboard.
 */
function jwPlayerEmbedUrl(): string {
  const u = new URL("https://content.jwplatform.com/players/hPiR6aJO-X65hTucY.html");
  u.searchParams.set("autostart", "true");
  u.searchParams.set("mute", "true");
  return u.toString();
}

const JW_MESSAGE_ORIGINS = new Set([
  "https://content.jwplatform.com",
  "https://cdn.jwplayer.com",
]);

/** Best-effort parse of JW / embed postMessage payloads (formats vary by embed version). */
function playbackHint(data: unknown): "play" | "pause" | null {
  if (data == null) return null;

  if (typeof data === "object") {
    const o = data as Record<string, unknown>;
    const event = o.event ?? o.type ?? o.message ?? o.action;
    if (typeof event === "string") {
      const e = event.toLowerCase();
      if (e === "play" || e === "playing" || e === "firstframe" || e === "adplay") return "play";
      if (e === "pause" || e === "paused" || e === "complete" || e === "idle" || e === "adpause") return "pause";
    }
    const player = o.player as Record<string, unknown> | undefined;
    const nested = player?.metadata ?? o.metadata;
    if (nested && typeof nested === "object") return playbackHint(nested);
  }

  if (typeof data === "string") {
    try {
      return playbackHint(JSON.parse(data));
    } catch {
      return null;
    }
  }

  return null;
}

/** Poster behind player until iframe mounts (same campaign mood). */
const POSTER_SRC = "/images/photography/chandon-brunch.jpg";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  /** Load JW iframe only once ~25% of section is visible — no playback until user scrolls here. */
  const embedInView = useInView(ref, { once: true, amount: 0.25 });
  const [copyHiddenForPlayback, setCopyHiddenForPlayback] = useState(false);

  const iframeSrc = useMemo(() => (embedInView ? jwPlayerEmbedUrl() : undefined), [embedInView]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!JW_MESSAGE_ORIGINS.has(e.origin)) return;
      const hint = playbackHint(e.data);
      if (hint === "play") setCopyHiddenForPlayback(true);
      if (hint === "pause") setCopyHiddenForPlayback(false);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section
      ref={ref}
      role="region"
      aria-label="In motion, see Napa Valley"
      className="relative flex items-center justify-center overflow-hidden bg-[#141210]"
      style={{ minHeight: "min(68vh, 720px)" }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {!embedInView ? (
          <div className="relative h-full min-h-[min(68vh,720px)] w-full">
            <Image
              src={POSTER_SRC}
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
          <iframe
            src={iframeSrc}
            title="Visit Napa Valley campaign video"
            className="absolute left-1/2 top-1/2 z-0 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
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
        <motion.div
          animate={{
            opacity: copyHiddenForPlayback ? 0 : 1,
            y: copyHiddenForPlayback ? 8 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={copyHiddenForPlayback}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={embedInView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow"
            style={{ color: "var(--hub-champagne-light)" }}
          >
            In motion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={embedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="font-hub-display mt-4 text-balance text-4xl font-normal leading-tight tracking-[-0.02em] text-white sm:text-5xl md:text-[3.25rem] text-on-photo"
          >
            See it to{" "}
            <span style={{ color: "var(--hub-champagne-light)", fontStyle: "italic" }}>believe it</span>
          </motion.h2>
        </motion.div>

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
