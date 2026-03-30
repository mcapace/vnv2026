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
          Ready to plan a{" "}
          <span style={{ color: "var(--hub-champagne)", fontStyle: "italic" }}>long weekend?</span>
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
          Lock in stays, tables, and cellar appointments on the official destination site.
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
          <p style={{
            fontSize: "0.5625rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "0.875rem",
          }}>
            Get the weekend planning guide
          </p>
          {signedUp ? (
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>
              Thanks — check your inbox for the guide.
            </p>
          ) : (
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "9999px",
              padding: "0.25rem 0.25rem 0.25rem 1.25rem",
              maxWidth: "26rem",
              margin: "0 auto",
            }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="button"
                onClick={() => { if (email) setSignedUp(true); }}
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
        </div>

        {/* Social icons — Simple Icons brand marks */}
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

      {/* Bottom bar — full width */}
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
            © {new Date().getFullYear()} Visit Napa Valley
          </p>
          <a
            href="#"
            style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
        </div>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {["Stay", "Dine", "Wine", "Explore"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
