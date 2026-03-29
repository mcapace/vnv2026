"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop')`,
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2C2C2C]/60 z-10" />
      <div className="grain-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
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
          className="text-3xl sm:text-4xl md:text-5xl text-white mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          See It to <em className="text-[#C5A55A]">Believe It</em>
        </motion.h2>

        {/* Play button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="play-button" aria-label="Play video">
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
          className="text-white/50 text-sm mt-6 max-w-md"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
        >
          Take a cinematic journey through thirty miles of vineyards,
          world-class dining, and unforgettable experiences.
        </motion.p>
      </div>
    </section>
  );
}
