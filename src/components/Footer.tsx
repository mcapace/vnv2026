"use client";

import { useState } from "react";

export default function Footer() {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <footer className="relative border-t border-[var(--hub-line)] text-white">
      <div
        className="relative overflow-hidden bg-[var(--hub-navy)]"
        style={{ paddingTop: "clamp(3rem,8vw,4.5rem)", paddingBottom: "clamp(3rem,8vw,4.5rem)" }}
      >
        <img
          src="/images/photography/chandon-hilltop.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          style={{ objectPosition: "center 35%" }}
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />

        <div className="section-shell relative z-[1] mx-auto max-w-3xl px-4 text-center">
          <p className="section-eyebrow text-[var(--hub-champagne-light)]">Next step</p>
          <h2
            className="mt-4 text-balance text-3xl font-normal leading-tight text-on-photo md:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to plan a long weekend?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg text-white/80 text-on-photo" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Lock in stays, tables, and cellar appointments on the official
            destination site.
          </p>

          <p
            className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/55"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join 50,000+ travelers exploring the valley each month
          </p>

          <a
            href="https://www.visitnapavalley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-champagne mt-8 inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-full bg-[var(--hub-champagne)] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-ink)] transition"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Plan your visit
          </a>

          <form
            className="mx-auto mt-10 max-w-md text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setSignedUp(true);
            }}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email for weekend planning guide
            </label>
            <p
              className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get the weekend planning guide
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="footer-email-input min-h-12 flex-1 rounded-md border border-white/25 bg-white/10 px-4 text-sm text-white backdrop-blur-sm outline-none"
              />
              <button
                type="submit"
                className="footer-submit min-h-12 shrink-0 rounded-md border border-white/30 bg-transparent px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {signedUp ? "Thanks!" : "Submit"}
              </button>
            </div>
            {signedUp && (
              <p className="mt-2 text-center text-xs text-white/65">
                Thanks — pair this hub with Visit Napa Valley&apos;s trip tools for your dates.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-white/8 bg-[var(--hub-navy-deep)]">
        <div className="section-shell mx-auto flex max-w-6xl flex-col items-center gap-8 py-10 md:flex-row md:justify-between">
          <img
            src="/images/logos/vnv-primary-white.png"
            alt="Visit Napa Valley"
            className="h-7 w-auto opacity-90"
          />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {["Stay", "Dine", "Wine", "Explore"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="footer-anchor min-h-10 text-[11px] font-medium uppercase tracking-[0.16em] text-white/50 transition"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <span className="flex items-center gap-3" aria-label="Wine Spectator co-brand">
              <span className="h-px w-8 bg-white/25" aria-hidden />
              <span
                className="text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-white/55"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Wine Spectator
                <span className="mt-0.5 block text-[8px] font-normal tracking-[0.12em] text-white/35">
                  Content Hub
                </span>
              </span>
            </span>
            <div className="flex items-center gap-4">
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
          </div>
        </div>
        <div className="section-shell mx-auto max-w-6xl pb-8">
          <p
            className="text-center text-[10px] text-white/28"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Visit Napa Valley · Presented with{" "}
            <span className="text-white/45">Wine Spectator</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
