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
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "clamp(2rem, 5vw, 4rem)",
            paddingRight: "clamp(2rem, 5vw, 4rem)",
            transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            backgroundColor: onHero ? "transparent" : "rgba(253,252,250,0.96)",
            borderBottom: onHero ? "1px solid transparent" : "1px solid rgba(42,38,35,0.1)",
            boxShadow: onHero ? "none" : "0 1px 12px rgba(42,38,35,0.06)",
            backdropFilter: onHero ? "none" : "blur(12px)",
          }}
        >
          {/* Top gradient for nav legibility over hero */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -1,
              pointerEvents: "none",
              background: onHero
                ? "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)"
                : "none",
            }}
          />

          {/* Left — Logo */}
          <a
            href="#hero"
            onClick={(e) => onNavClick(e, "#hero")}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0 }}
          >
            <img
              src={onHero ? "/images/logos/vnv-primary-white.png" : "/images/logos/vnv-primary-black.png"}
              alt="Visit Napa Valley"
              style={{ height: "1.75rem", width: "auto", objectFit: "contain" }}
            />
            <span
              className="hidden sm:inline"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "0.875rem",
                fontStyle: "italic",
                color: onHero ? "rgba(255,255,255,0.55)" : "var(--hub-muted)",
              }}
            >
              Wine Spectator
            </span>
          </a>

          {/* Center — Nav links */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 md:flex"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.375rem 0.75rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    transition: "background-color 0.2s, color 0.2s",
                    color: onHero
                      ? active
                        ? "#ffffff"
                        : "rgba(255,255,255,0.9)"
                      : active
                        ? "var(--hub-ink)"
                        : "var(--hub-muted)",
                    backgroundColor: onHero
                      ? active
                        ? "rgba(255,255,255,0.15)"
                        : "transparent"
                      : active
                        ? "rgba(42,38,35,0.06)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right — Plan visit + mobile menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
              style={{
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                textDecoration: "none",
                border: onHero ? "1.5px solid rgba(255,255,255,0.6)" : "1.5px solid rgba(42,38,35,0.25)",
                color: onHero ? "#ffffff" : "var(--hub-ink)",
                backgroundColor: "transparent",
                transition: "all 0.2s ease",
              }}
            >
              Plan visit
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: onHero ? "#ffffff" : "var(--hub-ink)",
              }}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "18px" }}>
                <span
                  style={{
                    height: "1.5px",
                    background: "currentColor",
                    display: "block",
                    transition: "transform 0.2s",
                    transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  style={{
                    height: "1.5px",
                    background: "currentColor",
                    display: "block",
                    transition: "opacity 0.2s",
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    height: "1.5px",
                    background: "currentColor",
                    display: "block",
                    transition: "transform 0.2s",
                    transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
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
            <nav style={{ display: "flex", flexDirection: "column", gap: "0", flex: 1 }} aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#ffffff",
                    textDecoration: "none",
                    padding: "1rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    minHeight: "52px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "52px",
                borderRadius: "9999px",
                backgroundColor: "var(--hub-champagne)",
                color: "var(--hub-navy)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Plan your visit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
