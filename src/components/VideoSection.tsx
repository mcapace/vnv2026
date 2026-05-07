"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/** JW Player embed — property/media from dashboard (`p/X65hTucY` / media `hPiR6aJO`). Video is streamed from JW, not bundled in repo. */
const JW_PLAYER_EMBED = "https://content.jwplatform.com/players/hPiR6aJO-X65hTucY.html";

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
    // Nested player events
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

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copyHiddenForPlayback, setCopyHiddenForPlayback] = useState(false);

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
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "min(68vh, 720px)" }}
    >
      {/*
        iframe must stay interactive: never wrap it in pointer-events-none (that blocks JW controls).
        Dim overlay + headline use pointer-events-none so clicks reach the player.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <iframe
          src={JW_PLAYER_EMBED}
          title="Visit Napa Valley campaign video"
          className="absolute left-1/2 top-1/2 z-0 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
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
        </motion.div>

        {/* Shown when iframe hides copy (JW may not emit postMessage); restores headline without blocking the player */}
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
