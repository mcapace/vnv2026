/** Fixed strip height: keep in sync with Navigation `top` offset */
export const SPONSORED_BAR_HEIGHT = "1.875rem";

/**
 * IntersectionObserver `rootMargin` only allows px or % (not calc/rem).
 * ≈ sponsored bar (1.875rem) + nav (4rem) at default 16px root.
 */
export const SITE_HEADER_OFFSET_PX = 94;

export default function SponsoredDisclaimerBar() {
  return (
    <div
      role="note"
      aria-label="Sponsored content disclosure"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        minHeight: SPONSORED_BAR_HEIGHT,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.375rem clamp(1rem, 4vw, 2.5rem)",
        backgroundColor: "#1a1512",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "0.625rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          textAlign: "center",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.35,
          maxWidth: "72rem",
        }}
      >
        Sponsored content. Produced in partnership with Visit Napa Valley and Wine Spectator.
      </p>
    </div>
  );
}
