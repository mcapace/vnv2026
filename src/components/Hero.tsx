"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-[100dvh] min-h-[600px] overflow-hidden bg-[#1a1512]"
    >
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/photography/stanly-ranch-convertible.jpg"
          alt="Open road through Napa Valley vineyards at golden hour"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 20%" }}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Gradient overlay — strong at bottom for text legibility */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.05) 100%)",
        }}
        aria-hidden
      />

      {/* Grain overlay */}
      <div className="grain-overlay pointer-events-none absolute inset-0 z-[2]" />

      {/* Hero content — anchored to bottom left */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 text-left"
        style={{
          paddingLeft: "clamp(2rem, 5vw, 4rem)",
          paddingRight: "clamp(2rem, 5vw, 4rem)",
          paddingBottom: "clamp(5rem, 8vw, 7rem)",
          maxWidth: "56rem",
        }}
      >
        {/* Logo lockup */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}
        >
          <img
            src="/images/logos/vnv-primary-white.png"
            alt="Visit Napa Valley"
            style={{ height: "1.75rem", width: "auto" }}
          />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", fontWeight: 300 }}>×</span>
          <img
            src="/images/logos/wine-spectator/ws-logo-white.png"
            alt="Wine Spectator"
            style={{ height: "1.6rem", width: "auto", objectFit: "contain", opacity: 0.85 }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(3rem, 6.5vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.0,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
            textShadow: "0 2px 24px rgba(0,0,0,0.4)",
          }}
        >
          A World in{" "}
          <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>30 Miles</span>
        </motion.h1>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "32rem",
            marginBottom: "2rem",
          }}
        >
          Wine, dine, stay, and explore—extraordinary density in one compact stretch of valley built for
          long weekends.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem" }}
        >
          <a
            href="#discover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              backgroundColor: "var(--hub-champagne)",
              color: "var(--hub-navy)",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              padding: "0.875rem 1.875rem",
              textDecoration: "none",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
          >
            Explore the hub
          </a>
          <a
            href="#itinerary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 500,
              padding: "0.875rem 1.875rem",
              textDecoration: "none",
              transition: "border-color 0.3s ease, background-color 0.3s ease",
            }}
          >
            Sample weekend
          </a>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <div
        className="absolute z-10"
        style={{ bottom: "1.75rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <a href="#discover" aria-label="Scroll to main content">
          <ChevronDownIcon
            style={{ width: "1.25rem", height: "1.25rem", color: "rgba(255,255,255,0.55)" }}
            className="animate-bounce"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </section>
  );
}
