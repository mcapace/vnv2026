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
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header>
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,padding,border-color] duration-300 ${
            scrolled
              ? "border-b border-black/8 bg-[#141212]/94 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
              : "border-b border-transparent bg-gradient-to-b from-black/45 to-transparent py-4 md:py-5"
          }`}
        >
          <div className="section-shell section-shell--wide flex max-w-[90rem] items-center justify-between gap-4">
            <a href="#" className="group flex shrink-0 items-center gap-3">
              <img
                src="/images/logos/vnv-primary-white.png"
                alt="Visit Napa Valley"
                className="h-8 w-auto opacity-95 transition-opacity group-hover:opacity-100 sm:h-9"
              />
              <span
                className="hidden border-l border-white/25 pl-3 text-[10px] font-medium uppercase leading-tight tracking-[0.2em] text-white/55 lg:inline"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Wine Spectator
                <span className="mt-0.5 block font-normal tracking-[0.14em] text-white/35">
                  Content Hub
                </span>
              </span>
            </a>

            <nav
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 md:flex lg:gap-2"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/88 transition-colors hover:bg-white/8 hover:text-[var(--hub-gold-bright)]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://www.visitnapavalley.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-md bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141212] transition hover:bg-[#f5f0e8] md:inline-flex"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Plan visit
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-md text-white md:hidden"
                aria-expanded={mobileOpen}
                aria-label="Open menu"
              >
                <span className="sr-only">Menu</span>
                <div className="flex w-5 flex-col gap-1.5">
                  <span
                    className={`h-px bg-white transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
                  />
                  <span className={`h-px bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                  <span
                    className={`h-px bg-white transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#141212] px-8 pb-12 pt-24 md:hidden"
          >
            <nav className="flex flex-1 flex-col gap-6" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-white/10 pb-4 text-2xl font-light text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto rounded-md bg-[var(--hub-gold)] py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#141212]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Plan your visit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
