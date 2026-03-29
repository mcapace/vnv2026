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
        rootMargin: "-64px 0px -58% 0px",
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
          aria-label="Site"
          className={`fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-[var(--shell-pad-x)] transition-all duration-300 ${
            onHero
              ? "border-b border-transparent bg-transparent shadow-none"
              : "border-b border-[var(--hub-line)] bg-[var(--hub-card)]/95 shadow-sm backdrop-blur-md"
          }`}
        >
          <div className="relative flex h-full w-full max-w-[88rem] mx-auto items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => onNavClick(e, "#hero")}
              className="relative z-10 flex min-w-0 shrink-0 items-center gap-3"
            >
              <img
                src={onHero ? "/images/logos/vnv-primary-white.png" : "/images/logos/vnv-primary-black.png"}
                alt="Visit Napa Valley"
                className="h-7 w-auto object-contain opacity-[0.96]"
                width={160}
                height={40}
              />
              <span
                className={`font-hub-display min-w-0 truncate text-sm italic ${
                  onHero ? "text-white/85" : "text-[var(--hub-ink)]"
                }`}
              >
                Wine Spectator
              </span>
            </a>

            <nav
              className="absolute left-1/2 top-1/2 z-[5] hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:gap-1"
              aria-label="Primary"
            >
              {navLinks.map((link) => {
                const active = activeId === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                    className={`rounded-full border-b-2 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                      onHero
                        ? active
                          ? "nav-pill-hero border-white/70 text-white"
                          : "nav-pill-hero border-transparent text-white/80"
                        : active
                          ? "nav-pill-solid border-[var(--hub-champagne)] text-[var(--hub-ink)]"
                          : "nav-pill-solid border-transparent text-[var(--hub-muted)]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="relative z-10 flex shrink-0 items-center gap-2">
              <a
                href="https://www.visitnapavalley.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 md:inline-flex ${
                  onHero
                    ? "nav-plan-hero border border-white/50 text-white"
                    : "border border-[var(--hub-line)] bg-[var(--hub-paper)] text-[var(--hub-ink)] hover:border-[var(--hub-champagne)]"
                }`}
              >
                Plan visit
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
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
            className="fixed inset-0 z-40 flex flex-col bg-[var(--hub-navy)] px-6 pb-10 pt-24 md:hidden"
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
