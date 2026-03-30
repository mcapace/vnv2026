"use client";

import { useState } from "react";

export default function Footer() {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <footer className="bg-[var(--hub-navy)] px-[var(--shell-pad-x)] py-16 text-white">
      <div className="mx-auto w-full max-w-[88rem]">
        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-3 md:mb-12"
          aria-label="Visit Napa Valley and Wine Spectator"
        >
          <img
            src="/images/logos/vnv-primary-white.png"
            alt="Visit Napa Valley"
            className="h-8 w-auto opacity-[0.96]"
            width={180}
            height={48}
          />
          <span className="h-6 w-px shrink-0 bg-white/35" aria-hidden />
          <span className="font-hub-display text-lg italic text-white/70">Wine Spectator</span>
        </div>

        <div
          className="mx-auto w-full max-w-2xl"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
        >
          <p
            className="section-eyebrow text-[var(--hub-champagne-light)]"
            style={{ textAlign: "center", width: "100%" }}
          >
            Next step
          </p>
          <h2
            className="font-hub-serif mt-[clamp(1.25rem,3vw,1.75rem)] text-balance text-3xl font-normal leading-tight tracking-[-0.02em] text-on-photo md:text-[2.35rem]"
            style={{ textAlign: "center", width: "100%" }}
          >
            Ready to plan a long weekend?
          </h2>
          <p
            className="font-hub-display text-lg leading-snug text-white/85 text-on-photo"
            style={{ textAlign: "center", maxWidth: "32rem", margin: "1rem auto 0" }}
          >
            Lock in stays, tables, and cellar appointments on the official destination site.
          </p>

          <p
            style={{
              fontSize: "0.625rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginTop: "1.5rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            Join 50,000+ travelers exploring the valley each month
          </p>

          <a
            href="https://www.visitnapavalley.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--hub-champagne)",
              color: "var(--hub-ink)",
              borderRadius: "9999px",
              padding: "0.875rem 2.5rem",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "1.5rem",
              transition: "opacity 0.2s ease",
            }}
          >
            Plan your visit
          </a>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSignedUp(true);
            }}
            style={{ width: "100%", maxWidth: "28rem", marginTop: "2rem" }}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email for weekend planning guide
            </label>
            <p
              style={{
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "0.875rem",
                textAlign: "center",
              }}
            >
              Get the weekend planning guide
            </p>
            {signedUp ? (
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
                Thanks — check your inbox for the guide.
              </p>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.25rem 0.25rem 1.25rem",
                  gap: "0.5rem",
                }}
              >
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.85)",
                    padding: "0.375rem 0",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    flexShrink: 0,
                    backgroundColor: "var(--hub-champagne)",
                    color: "var(--hub-ink)",
                    borderRadius: "9999px",
                    padding: "0.625rem 1.25rem",
                    fontSize: "0.5625rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/visitnapavalley/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social flex h-11 w-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition"
            aria-label="Visit Napa Valley on Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm5.5-9.1a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zM7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/visitnapavalley"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social flex h-11 w-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition"
            aria-label="Visit Napa Valley on Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7v-3h3.5v-2.3c0-3.5 2-5.4 5.3-5.4 1.5 0 3 .3 3 .3v3.3h-1.7c-1.7 0-2.2 1-2.2 2.1V12H17l-.6 3h-2.9v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/user/VisitNapaValley"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social flex h-11 w-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition"
            aria-label="Visit Napa Valley on YouTube"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.5 7.2s-.23-1.65-1-2.4c-.9-.94-1.9-.95-2.4-1-3.36-.24-8.4-.24-8.4-.24h-.01s-5.04 0-8.4.24c-.5.05-1.5.06-2.4 1-.77.75-1 2.4-1 2.4S2 9.18 2 11.3v2.05c0 2.12.26 4.1.26 4.1s.23 1.65 1 2.4c.9.94 2.08.91 2.6 1 1.89.18 8.14.23 8.14.23s5.05-.01 8.41-.25c.5-.05 1.5-.06 2.4-1 .77-.75 1-2.4 1-2.4s.26-1.97.26-4.1V11.3c0-2.12-.26-4.1-.26-4.1zM9.75 14.52v-6.7L16 11.2l-6.25 3.32z" />
            </svg>
          </a>
        </div>

        <div
          className="mt-12 border-t border-white/10 pt-6"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="font-hub-sans text-xs text-white/40">
              © {new Date().getFullYear()} Visit Napa Valley
            </p>
            <a
              href="#"
              className="footer-anchor w-fit text-xs text-white/40 transition-colors hover:text-[var(--hub-champagne-light)]"
            >
              Privacy Policy
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 md:gap-x-6" aria-label="Footer">
            {["Stay", "Dine", "Wine", "Explore"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="footer-anchor font-hub-sans min-h-10 text-[11px] font-medium uppercase tracking-[0.16em] text-white/50 transition"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
