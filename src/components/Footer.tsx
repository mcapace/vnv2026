"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] overflow-hidden">
      {/* CTA Band */}
      <div className="relative py-20 md:py-24 text-center border-b border-white/5">
        <div className="grain-overlay absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p
            className="text-[#C5A55A] text-[11px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your Valley Awaits
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to <em className="text-[#C5A55A]">Live a Little</em>?
          </h2>
          <p
            className="text-white/50 mb-10 max-w-xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
            }}
          >
            Plan your multi-day Napa Valley escape and discover why thirty miles
            is all you need to experience a world of extraordinary.
          </p>
          <a
            href="https://www.visitnapavalley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-[#C5A55A] text-[#1A1A1A] text-xs tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#D4BA7A]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Plan Your Visit
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/images/logos/vnv-primary-white.png"
              alt="Visit Napa Valley"
              className="h-8 w-auto opacity-50 hover:opacity-70 transition-opacity duration-300"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Stay", "Dine", "Wine", "Explore"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/30 hover:text-[#C5A55A] text-[10px] tracking-[0.2em] uppercase transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Presented by */}
          <div className="flex flex-col items-center md:items-end shrink-0">
            <span
              className="text-white/25 text-[9px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Presented by
            </span>
            <span
              className="text-white/50 text-sm tracking-[0.1em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Wine Spectator
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 my-6" />

        {/* Copyright */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/20 text-[10px] tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>&copy; {new Date().getFullYear()} Visit Napa Valley. All rights reserved.</p>
          <p>
            A{" "}
            <span className="text-[#C5A55A]/40">Wine Spectator</span>{" "}
            Custom Content Hub
          </p>
        </div>
      </div>
    </footer>
  );
}
