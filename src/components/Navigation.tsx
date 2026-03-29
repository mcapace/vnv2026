"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Stay", href: "#stay", id: "stay" as const },
  { label: "Dine", href: "#dine", id: "dine" as const },
  { label: "Wine", href: "#wine", id: "wine" as const },
  { label: "Explore", href: "#explore", id: "explore" as const },
  { label: "Itinerary", href: "#itinerary", id: "itinerary" as const },
];

type SectionId = (typeof navLinks)[number]["id"] | "";

export default function Navigation() {
  const [pastHero, setPastHero] = useState(false);
  const [activeId, setActiveId] = useState<SectionId>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      setPastHero(window.scrollY > vh * 0.88);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const refreshActive = useCallback(() => {
    const ids = navLinks.map((l) => l.id);
    const headerOffset = 120;
    let current: SectionId = "";
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= headerOffset) current = id;
    }
    setActiveId(current);
  }, []);

  useEffect(() => {
    const run = () => refreshActive();
    const initial = window.setTimeout(run, 0);
    window.addEventListener("scroll", run, { passive: true });
    window.addEventListener("resize", run, { passive: true });
    return () => {
      window.clearTimeout(initial);
      window.removeEventListener("scroll", run);
      window.removeEventListener("resize", run);
    };
  }, [refreshActive]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const lightOnHero = !pastHero;

  return (
    <>
      <header>
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,padding,border-color,color] duration-300 ease-out ${
            lightOnHero
              ? "border-b border-white/12 bg-gradient-to-b from-black/40 to-transparent py-3 md:py-4"
              : "border-b border-black/10 bg-[#fefcf9]/95 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md"
          }`}
        >
          <div className="section-shell section-shell--wide flex max-w-[90rem] items-center justify-between gap-4">
            <a
              href="#hero"
              onClick={(e) => onNavClick(e, "#hero")}
              className="group flex shrink-0 items-center gap-3"
            >
              <img
                src={
                  lightOnHero
                    ? "/images/logos/vnv-primary-white.png"
                    : "/images/logos/vnv-primary-black.png"
                }
                alt="Visit Napa Valley"
                className="h-8 w-auto opacity-95 transition-opacity group-hover:opacity-100 sm:h-9"
              />
              <span
                className={`hidden border-l pl-3 text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] lg:inline ${
                  lightOnHero ? "border-white/35 text-white/60" : "border-black/15 text-[var(--hub-muted)]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="text-[9px] tracking-[0.24em]">Wine Spectator</span>
                <span
                  className={`mt-0.5 block text-[9px] font-medium tracking-[0.14em] ${
                    lightOnHero ? "text-white/45" : "text-[var(--hub-muted)]/90"
                  }`}
                >
                  Content Hub
                </span>
              </span>
            </a>

            <nav
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 md:flex lg:gap-1"
              aria-label="Primary"
            >
              {navLinks.map((link) => {
                const active = activeId === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                    className={`rounded-md px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      lightOnHero
                        ? active
                          ? "bg-white/14 text-white"
                          : "text-white/88 hover:bg-white/10 hover:text-white"
                        : active
                          ? "text-[var(--hub-wine)]"
                          : "text-[var(--hub-ink)]/75 hover:text-[var(--hub-wine)]"
                    } ${!lightOnHero && active ? "underline decoration-2 underline-offset-8 decoration-[var(--hub-gold-bright)]" : ""}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://www.visitnapavalley.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden rounded-md px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition md:inline-flex ${
                  lightOnHero
                    ? "bg-white text-[#141212] hover:bg-[#f5f0e8]"
                    : "bg-[var(--hub-gold-bright)] text-[#1a1a1a] hover:brightness-95"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Plan visit
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`flex h-12 min-w-12 items-center justify-center rounded-md md:hidden ${
                  lightOnHero ? "text-white" : "text-[var(--hub-ink)]"
                }`}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">Menu</span>
                <div className="flex w-5 flex-col gap-1.5">
                  <span
                    className={`h-0.5 transition-transform ${lightOnHero ? "bg-white" : "bg-[var(--hub-ink)]"} ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
                  />
                  <span
                    className={`h-0.5 transition-opacity ${lightOnHero ? "bg-white" : "bg-[var(--hub-ink)]"} ${mobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`h-0.5 transition-transform ${lightOnHero ? "bg-white" : "bg-[var(--hub-ink)]"} ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
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
            className="fixed inset-0 z-40 flex flex-col bg-[#141212] px-6 pb-12 pt-28 md:hidden"
          >
            <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="min-h-12 border-b border-white/10 py-3 text-2xl font-light leading-none text-white"
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
              className="mt-auto flex min-h-12 items-center justify-center rounded-md bg-[var(--hub-gold-bright)] py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
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
