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
      setPastHero(window.scrollY > vh * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const refreshActive = useCallback(() => {
    const ids = navLinks.map((l) => l.id);
    const headerOffset = 112;
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

  const onHero = !pastHero;

  return (
    <>
      <header>
        <motion.nav
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background,box-shadow,backdrop-filter,border-color] duration-300 ${
            onHero
              ? "border-white/10 bg-stone-900/40 shadow-none backdrop-blur-md"
              : "border-[var(--hub-line)] bg-white/94 shadow-[0_1px_0_rgba(22,20,26,0.04)] backdrop-blur-xl"
          }`}
        >
          <div className="section-shell section-shell--wide flex items-center gap-3 py-3.5">
            <div className="flex min-w-0 flex-1 items-center justify-start">
              <a
                href="#hero"
                onClick={(e) => onNavClick(e, "#hero")}
                className="group flex min-w-0 items-center gap-3"
              >
                <img
                  src={onHero ? "/images/logos/vnv-primary-white.png" : "/images/logos/vnv-primary-black.png"}
                  alt="Visit Napa Valley"
                  className="h-7 w-auto opacity-[0.96] sm:h-8"
                />
                <span
                  className={`hidden min-w-0 border-l pl-3 md:block ${
                    onHero ? "border-white/25" : "border-black/10"
                  }`}
                >
                  <span
                    className={`block text-[9px] font-semibold uppercase leading-tight tracking-[0.22em] ${
                      onHero ? "text-white/55" : "text-[var(--hub-muted)]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Wine Spectator
                  </span>
                  <span
                    className={`mt-0.5 block truncate text-[9px] font-normal tracking-[0.12em] ${
                      onHero ? "text-white/40" : "text-stone-500"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Content Hub
                  </span>
                </span>
              </a>
            </div>

            <nav className="hidden shrink-0 md:flex" aria-label="Primary">
              <div className="flex items-center gap-1 rounded-full border border-transparent px-1.5 py-1">
                {navLinks.map((link) => {
                  const active = activeId === link.id;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => onNavClick(e, link.href)}
                      className={`rounded-full px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                        onHero
                          ? active
                            ? "bg-white/18 text-white"
                            : "nav-pill-hero text-white/80"
                          : active
                            ? "bg-[var(--hub-accent-soft)] text-[var(--hub-wine)]"
                            : "nav-pill-solid text-stone-600"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
              <a
                href="https://www.visitnapavalley.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition sm:inline-flex ${
                  onHero
                    ? "nav-plan-hero bg-white text-[var(--hub-ink)]"
                    : "btn-champagne bg-[var(--hub-champagne)] text-[var(--hub-ink)]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Plan visit
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
                  onHero ? "text-white" : "text-[var(--hub-ink)]"
                }`}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">Menu</span>
                <div className="flex w-5 flex-col gap-1.5">
                  <span
                    className={`h-px transition-transform ${onHero ? "bg-white" : "bg-[var(--hub-ink)]"} ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`}
                  />
                  <span
                    className={`h-px transition-opacity ${onHero ? "bg-white" : "bg-[var(--hub-ink)]"} ${mobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`h-px transition-transform ${onHero ? "bg-white" : "bg-[var(--hub-ink)]"} ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
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
            className="fixed inset-0 z-40 flex flex-col bg-[var(--hub-navy)] px-6 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="min-h-[52px] border-b border-white/10 py-4 text-2xl font-normal text-white"
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
              className="mt-auto flex min-h-[52px] items-center justify-center rounded-full bg-[var(--hub-champagne)] py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-ink)]"
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
