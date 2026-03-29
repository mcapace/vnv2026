"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hub-line)] bg-[#141212] text-white">
      <div
        className="section-shell mx-auto max-w-3xl py-16 text-center md:py-20"
        style={{ paddingTop: "clamp(3.5rem,8vw,5rem)" }}
      >
        <p className="section-eyebrow text-[var(--hub-gold-bright)]">
          Next step
        </p>
        <h2
          className="mt-4 text-balance text-3xl font-normal leading-tight md:text-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to plan a long weekend?
        </h2>
        <p
          className="mx-auto mt-4 max-w-md text-lg text-white/55"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Lock in stays, tables, and cellar appointments on the official
          destination site.
        </p>
        <a
          href="https://www.visitnapavalley.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-[var(--hub-gold)] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#141212] transition hover:bg-[#d4b87a]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Plan your visit
        </a>
      </div>

      <div className="border-t border-white/8">
        <div className="section-shell mx-auto flex max-w-6xl flex-col items-center gap-8 py-10 md:flex-row md:justify-between">
          <img
            src="/images/logos/vnv-primary-white.png"
            alt="Visit Napa Valley"
            className="h-7 w-auto opacity-40"
          />
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label="Footer"
          >
            {["Stay", "Dine", "Wine", "Explore"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40 transition hover:text-[var(--hub-gold)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </nav>
          <p
            className="text-center text-[10px] uppercase tracking-[0.18em] text-white/35"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Presented by{" "}
            <span className="text-white/55">Wine Spectator</span>
          </p>
        </div>
        <div className="section-shell mx-auto max-w-6xl pb-8">
          <p
            className="text-center text-[10px] text-white/25"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Visit Napa Valley · Custom content hub
          </p>
        </div>
      </div>
    </footer>
  );
}
