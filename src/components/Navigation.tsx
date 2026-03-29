"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Stay", href: "#stay" },
  { label: "Dine", href: "#dine" },
  { label: "Wine", href: "#wine" },
  { label: "Explore", href: "#explore" },
  { label: "Itinerary", href: "#itinerary" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#2C2C2C]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex flex-col items-start group">
            <span
              className="text-white/90 text-[10px] tracking-[0.35em] uppercase font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Visit
            </span>
            <span
              className="text-white text-xl tracking-[0.1em] font-semibold -mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NAPA VALLEY
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-[#C5A55A] text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A55A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Wine Spectator badge */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-[1px] h-8 bg-white/20" />
            <div className="flex flex-col items-end">
              <span
                className="text-white/50 text-[9px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Presented by
              </span>
              <span
                className="text-white/80 text-sm tracking-[0.15em] font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Wine Spectator
              </span>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[1px] bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#2C2C2C]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-white text-2xl tracking-[0.2em] uppercase hover:text-[#C5A55A] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
