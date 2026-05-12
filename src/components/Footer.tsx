"use client";

import { useState } from "react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  return (
    <footer
      style={{
        backgroundColor: "var(--hub-navy)",
        color: "white",
        padding: "clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem) 0",
      }}
    >
      <div style={{ maxWidth: "40rem", margin: "0 auto", textAlign: "center" }}>

        {/* Logo lockup */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          <img
            src="/images/logos/vnv-primary-white.png"
            alt="Visit Napa Valley"
            style={{ height: "2rem", width: "auto", opacity: 0.95 }}
          />
          <span style={{ width: "1px", height: "1.5rem", backgroundColor: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
          <img
            src="/images/logos/wine-spectator/ws-logo-white.png"
            alt="Wine Spectator"
            style={{ height: "1.25rem", width: "auto", opacity: 0.85 }}
          />
        </div>

        {/* Eyebrow */}
        <p style={{
          fontSize: "0.5625rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--hub-champagne)",
          marginBottom: "1.25rem",
        }}>
          Next step
        </p>

        {/* Headline */}
        <h2 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          color: "white",
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
        }}>
          Ready to turn inspiration into{" "}
          <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>real plans?</span>
        </h2>

        {/* Body */}
        <p style={{
          fontSize: "0.9375rem",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.6,
          marginBottom: "2rem",
          maxWidth: "28rem",
          margin: "0 auto 2rem",
        }}>
          Book the stays, tastings, and tables you&apos;ve been circling, plus trails, spas, and events you
          didn&apos;t know to ask for—all in one place on visitnapavalley.com.
        </p>

        {/* Social proof */}
        <p style={{
          fontSize: "0.5625rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          marginBottom: "1.5rem",
        }}>
          Join 50,000+ travelers exploring the valley each month
        </p>

        {/* CTA button */}
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
            marginBottom: "3rem",
            transition: "opacity 0.2s ease",
          }}
        >
          Plan your visit
        </a>

        {/* Email capture */}
        <div style={{ marginBottom: "3rem" }}>
          <p
            id="footer-weekend-guide-label"
            style={{
              fontSize: "0.5625rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "0.875rem",
            }}
          >
            Get the weekend planning guide
          </p>
          {signedUp ? (
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>
              Thanks. Check your inbox for the guide.
            </p>
          ) : (
            <form
              className="footer-email-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSignedUp(true);
              }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                gap: "0.5rem",
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "9999px",
                padding: "0.35rem 0.35rem 0.35rem 1rem",
                maxWidth: "26rem",
                margin: "0 auto",
              }}
            >
              <label htmlFor="footer-planning-email" className="sr-only">
                Email for weekend planning guide
              </label>
              <input
                id="footer-planning-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-email-input min-h-11 min-w-0 flex-1 border-0 bg-transparent py-2 pl-0 pr-1 text-[0.8125rem] text-white/85 outline-none"
                style={{ color: "rgba(255,255,255,0.85)" }}
              />
              <button
                type="submit"
                className="min-h-11 shrink-0 self-center"
                style={{
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
            </form>
          )}
        </div>

        {/* Social icons (Simple Icons brand marks) */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem" }}>
          {(
            [
              { href: "https://www.instagram.com/visitnapavalley/", label: "Instagram", Icon: SiInstagram },
              { href: "https://www.facebook.com/visitnapavalley", label: "Facebook", Icon: SiFacebook },
              { href: "https://www.youtube.com/user/VisitNapaValley", label: "YouTube", Icon: SiYoutube },
            ] as const
          ).map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Napa Valley on ${label}`}
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.55)",
                transition: "border-color 0.2s, color 0.2s",
                textDecoration: "none",
              }}
            >
              <Icon aria-hidden style={{ width: "1.125rem", height: "1.125rem" }} />
            </a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "1.25rem clamp(1.5rem, 5vw, 4rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.75rem",
        maxWidth: "88rem",
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
            © 2026 Visit Napa Valley
          </p>
          <a
            href="https://www.visitnapavalley.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
        </div>
        <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {(
            [
              { label: "Stays", path: "stay" },
              { label: "Restaurants", path: "dine" },
              { label: "Wineries", path: "wine" },
              { label: "Discover", path: "explore" },
            ] as const
          ).map((item) => (
            <a
              key={item.path}
              href={`/${item.path}`}
              style={{
                fontSize: "0.625rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "none",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                lineHeight: 1.2,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
