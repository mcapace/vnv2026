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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
        <div className="section-shell max-w-7xl relative flex items-center justify-between min-h-[3.25rem]">
          {/* Logo */}
          <a href="#" className="flex items-center group shrink-0 z-10">
            <img
              src="/images/logos/vnv-primary-white.png"
              alt="Visit Napa Valley"
              className="h-9 sm:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          {/* Desktop links — truly centered in the bar */}
          <nav
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-7 lg:gap-9"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/85 hover:text-[#C5A55A] text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative group whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C5A55A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center justify-end gap-2 shrink-0 z-10">
            <a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-[10px] tracking-[0.2em] uppercase text-[#C5A55A] border border-[#C5A55A]/40 px-5 py-2.5 hover:bg-[#C5A55A] hover:text-[#2C2C2C] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Plan Your Visit
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 -mr-2"
              aria-expanded={mobileOpen}
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
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#2C2C2C]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            <img
              src="/images/logos/vnv-primary-white.png"
              alt="Visit Napa Valley"
              className="h-10 w-auto mb-8 opacity-60"
            />
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
            <motion.a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="mt-4 text-[11px] tracking-[0.2em] uppercase text-[#C5A55A] border border-[#C5A55A]/40 px-8 py-3 hover:bg-[#C5A55A] hover:text-[#2C2C2C] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Plan Your Visit
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
