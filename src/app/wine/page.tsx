import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "The Best Wineries in Napa Valley | Wine Spectator × Visit Napa Valley",
  description:
    "Icons like Robert Mondavi, elegance at Etude, history at Louis Martini — Wine Spectator's guide to Napa Valley wineries.",
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
            The Best Wineries in Napa Valley
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
          <p className="hub-prose-serif" style={{ color: "var(--hub-muted)" }}>
            Article content coming soon. The full guide to wineries in Napa Valley will be published here
            shortly.
          </p>

          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--hub-line)",
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
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
