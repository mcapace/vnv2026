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

        <div className="section-stack mx-auto w-full max-w-3xl">
          <p className="section-eyebrow text-[var(--hub-champagne-light)]">Next step</p>
          <h2 className="font-hub-serif mt-[clamp(1.25rem,3vw,1.75rem)] text-balance text-3xl font-normal leading-tight tracking-[-0.02em] text-on-photo md:text-[2.35rem]">
            Ready to plan a long weekend?
          </h2>
          <p className="font-hub-display mt-4 max-w-lg text-lg leading-snug text-white/85 text-on-photo md:mx-auto">
            Lock in stays, tables, and cellar appointments on the official destination site.
          </p>

          <p className="font-hub-sans mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            Join 50,000+ travelers exploring the valley each month
          </p>

          <a
            href="https://www.visitnapavalley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-hub-sans btn-champagne mt-6 inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-full bg-[var(--hub-champagne)] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--hub-ink)] transition"
          >
            Plan your visit
          </a>

          <form
            className="mt-12 w-full max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              setSignedUp(true);
            }}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email for weekend planning guide
            </label>
            <p className="font-hub-sans mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
              Get the weekend planning guide
            </p>
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:gap-5">
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="footer-email-input w-full min-w-0 flex-1 border-0 border-b border-b-white/30 bg-transparent px-0 py-2 text-sm text-white transition-colors focus:border-b-[var(--hub-champagne)] focus:outline-none"
              />
              <button
                type="submit"
                className="footer-submit shrink-0 rounded-full bg-[var(--hub-champagne)] px-5 py-2.5 text-xs font-semibold tracking-wide text-[var(--hub-ink)]"
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

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
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
                href={`#${link.toLowerCase()}`}
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
