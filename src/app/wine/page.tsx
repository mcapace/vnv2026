import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wineries Across Napa Valley | Wine Spectator × Visit Napa Valley",
  description:
    "From iconic estates to intimate tastings, with Wine Spectator context on the diversity of Napa Valley wineries.",
};

export default function WinePage() {
  return (
    <main className="hub-page relative flex min-h-screen w-full flex-col">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px] flex-shrink-0 overflow-hidden bg-[var(--hub-navy)]">
        <img
          src="/images/photography/wine-cellar-toast.jpg"
          alt="Napa Valley wineries"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 45%" }}
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
              Wine
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
            Wineries Across Napa Valley
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
            The full guide is in production. It will take readers through Napa Valley’s cellar doors, from
            established estates to the small-lot rooms worth a detour, with Wine Spectator context on
            what makes the region’s wines distinct.
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
            For winery listings, maps, and planning tools in the meantime, use the official{" "}
            <a
              href="https://www.visitnapavalley.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--hub-champagne)", textDecoration: "none" }}
            >
              visitnapavalley.com
            </a>{" "}
            trip planner and wine pages.
          </p>
          <div style={{ borderTop: "1px solid var(--hub-line)", paddingTop: "2rem", marginTop: "1rem" }}>
            <p
              style={{ fontSize: "0.8125rem", color: "var(--hub-muted)", lineHeight: 1.65, marginBottom: 0 }}
            >
              This guide is being produced in partnership with Visit Napa Valley. For events, seasonality,
              and the latest on openings, visit{" "}
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
                href="/dine"
                style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--hub-muted)", textDecoration: "none" }}
              >
                Where to eat
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
