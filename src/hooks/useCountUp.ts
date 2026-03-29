"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  active: boolean,
  options: { durationMs?: number; startDelayMs?: number } = {},
) {
  const { durationMs = 2000, startDelayMs = 0 } = options;
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;

    let raf = 0;
    let startAt = 0;
    let started = false;

    const tick = (now: number) => {
      if (!started) {
        startAt = now + startDelayMs;
        started = true;
      }
      if (now < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, (now - startAt) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(target * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, durationMs, startDelayMs]);

  return { value, done };
}
