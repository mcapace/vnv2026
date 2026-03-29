"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<SectionId>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const first = intersecting[0];
        if (first?.target.id) setActiveId(first.target.id as SectionId);
      },
      {
        root: null,
        rootMargin: "-72px 0px -58% 0px",
        threshold: [0, 0.08, 0.15, 0.25, 0.4],
      }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const onHero = !scrolled;

  return (
    <>
      <header>
        <motion.nav
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            onHero
              ? "border-b border-transparent bg-transparent shadow-none"
              : "border-b border-[var(--hub-line)] bg-[var(--hub-card)]/95 shadow-sm backdrop-blur-md"
          }`}
        >
          <div className="section-shell section-shell--wide flex items-center gap-3 py-4 md:py-[1.125rem]">
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
                  className={`font-hub-display hidden text-lg italic md:inline ${
                    onHero ? "text-white/70" : "text-[var(--hub-muted)]"
                  }`}
                >
                  Wine Spectator
                </span>
              </a>
            </div>

            <nav className="hidden shrink-0 md:flex" aria-label="Primary">
              <div className="flex items-center gap-1 border border-transparent px-1.5 py-1">
                {navLinks.map((link) => {
                  const active = activeId === link.id;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => onNavClick(e, link.href)}
                      className={`font-hub-sans rounded-full border-b-2 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                        onHero
                          ? active
                            ? "nav-pill-hero border-white/70 text-white"
                            : "nav-pill-hero border-transparent text-white/80"
                          : active
                            ? "nav-pill-solid border-[var(--hub-champagne)] text-[var(--hub-ink)]"
                            : "nav-pill-solid border-transparent text-stone-600"
                      }`}
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
                className={`font-hub-sans hidden shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition sm:inline-flex ${
                  onHero
                    ? "nav-plan-hero bg-white text-[var(--hub-ink)]"
                    : "btn-champagne bg-[var(--hub-champagne)] text-[var(--hub-ink)]"
                }`}
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
                  className="font-hub-serif min-h-[52px] border-b border-white/10 py-4 text-2xl font-normal text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-hub-sans mt-auto flex min-h-[52px] items-center justify-center rounded-full bg-[var(--hub-champagne)] py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-ink)]"
            >
              Plan your visit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
