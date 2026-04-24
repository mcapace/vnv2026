import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Things to Do in Napa Valley | Wine Spectator × Visit Napa Valley",
  description:
    "JaM Cellars Ballroom, Pure Luxury Tours, Marquee Pinball, and the rest. A Wine Spectator guide to exploring Napa Valley.",
};

export default function ExplorePage() {
  return (
    <main className="hub-page relative flex min-h-screen w-full flex-col">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px] flex-shrink-0 overflow-hidden bg-[var(--hub-navy)]">
        <img
          src="/images/photography/cadet-nightlife.jpg"
          alt="Things to do in Napa Valley"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 48%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            padding: "clamp(2rem, 5vw, 4rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              The Guide
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.625rem" }}>·</span>
            <span
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--hub-champagne)",
              }}
            >
              Explore
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.05,
              maxWidth: "42rem",
            }}
          >
            Things to Do in Napa Valley
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.125rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.7)",
              marginTop: "0.75rem",
            }}
          >
            Presented by Visit Napa Valley × Wine Spectator
          </p>
        </div>
      </div>

      {/* Article body */}
      <div
        className="flex-1 bg-[var(--hub-paper)]"
        style={{ padding: "clamp(3rem, 7vw, 5rem) clamp(2rem, 5vw, 4rem)" }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <p
            className="hub-prose-serif"
            style={{
              color: "var(--hub-muted)",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            The full guide is in production. It will cover live music, tours, after-dark Napa, and the
            out-of-tasting-room side of the valley, with the same level of on-the-ground detail as the rest
            of this hub.
          </p>
          <p
            className="hub-prose-serif"
            style={{
              color: "var(--hub-muted)",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            For activities, event calendars, and things to do today, start with the official{" "}
            <a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--hub-champagne)", textDecoration: "none" }}
            >
              visitnapavalley.com
            </a>{" "}
            listings.
          </p>
          <div style={{ borderTop: "1px solid var(--hub-line)", paddingTop: "2rem", marginTop: "1rem" }}>
            <p
              style={{ fontSize: "0.8125rem", color: "var(--hub-muted)", lineHeight: 1.65, marginBottom: 0 }}
            >
              This guide is being produced in partnership with Visit Napa Valley. For the latest on events
              and seasons, see{" "}
              <a
                href="https://www.visitnapavalley.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--hub-champagne)", textDecoration: "none" }}
              >
                visitnapavalley.com
              </a>
              .
            </p>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--hub-line)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--hub-champagne)",
                textDecoration: "none",
              }}
            >
              ← Back to the hub
            </Link>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
              <Link
                href="/stay"
                style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--hub-muted)", textDecoration: "none" }}
              >
                Where to stay
              </Link>
              <Link
                href="/wine"
                style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--hub-muted)", textDecoration: "none" }}
              >
                Wineries
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
