"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { partnerImage } from "@/lib/partner-images";

const prose: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "1.1875rem",
  lineHeight: 1.75,
  color: "var(--hub-muted)",
  marginBottom: "1.5rem",
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
  fontWeight: 400,
  color: "var(--hub-ink)",
  lineHeight: 1.1,
  marginBottom: "0.75rem",
};

const tagline: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "1.25rem",
  fontStyle: "italic",
  color: "var(--hub-ink)",
  lineHeight: 1.4,
  marginBottom: "1.5rem",
};

function PropertyCard({
  label,
  name,
  address,
  href,
  linkText,
}: {
  label: string;
  name: string;
  address: string;
  href: string;
  linkText: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--hub-card)",
        border: "1px solid var(--hub-line)",
        borderRadius: "var(--hub-radius)",
        padding: "1.5rem",
        marginBottom: "3rem",
      }}
    >
      <p
        style={{
          fontSize: "0.625rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--hub-champagne)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "1.25rem",
          fontWeight: 400,
          color: "var(--hub-ink)",
          marginBottom: "0.25rem",
        }}
      >
        {name}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--hub-muted)", marginBottom: "0.875rem" }}>{address}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--hub-champagne)",
          textDecoration: "none",
        }}
      >
        {linkText}
      </a>
    </div>
  );
}

export default function WinePage() {
  return (
    <main className="hub-page relative flex min-h-screen w-full flex-col">
      <Navigation />

      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ height: "70vh", minHeight: "520px", backgroundColor: "var(--hub-navy)" }}
      >
        <img
          src={partnerImage("Etude/ETU_Winery1_HR.jpg")}
          alt="Etude Wines, Carneros"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 45%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.05) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            padding: "clamp(2rem, 5vw, 4rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <Link
              href="/"
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
              }}
            >
              The Hub
            </Link>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>·</span>
            <span
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--hub-champagne)",
              }}
            >
              Sip
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.05,
              maxWidth: "44rem",
              marginBottom: "0.875rem",
            }}
          >
            Wineries Across Napa Valley
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.125rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 1px 4px rgba(0,0,0,0.55)",
              maxWidth: "38rem",
            }}
          >
            From Carneros Pinot to Oakville icons and St. Helena Cabernet. Three estates that show how Napa
            Valley keeps rewriting itself.
          </p>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.80)",
            }}
          >
            Sponsored Content · Presented by Visit Napa Valley
          </p>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          backgroundColor: "var(--hub-paper)",
          padding: "clamp(3rem, 7vw, 5rem) clamp(2rem, 5vw, 4rem)",
        }}
      >
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <h2 style={h2}>Etude Wines, Carneros</h2>
          <p style={tagline}>A study in superb winemaking</p>
          <p style={prose}>
            In the cool Carneros American Viticultural Area at the south end of Napa Valley, shaped by fog
            and cooling maritime breezes, Tony Soter believed he could grow Pinot Noir of finesse and
            achievement. Back in 1982, that was no sure thing (the AVA designation would not come until the
            following year), but his Etude wines provide proof of concept. Bottlings from the Grace Benoist
            Ranch estate vineyard speak volumes, in constantly intriguing, Burgundian tones. The foggy site
            has unusually volcanic soil and comprises dozens of small blocks and numerous clones, offering
            the makers a delicious arsenal for blending.
          </p>
          <p style={{ ...prose, marginBottom: "2.5rem" }}>
            The expertise shows through in the house&apos;s delicious Cabernets, sourced from top appellations
            around the valley, and onsite tastings can focus there. But aficionados return again and again to
            the lovely property to enjoy California Pinot executed at its most refined, showing the
            grape&apos;s power, yes, but more so its elegance.
          </p>

          <PropertyCard
            label="Taste here"
            name="Etude Wines"
            address="1250 Cuttings Wharf Rd, Napa, CA 94559"
            href="https://www.etudewines.com/"
            linkText="Visit etudewines.com →"
          />

          <div style={{ borderTop: "1px solid var(--hub-line)", margin: "3rem 0" }} />

          <h2 style={h2}>Robert Mondavi Winery, Oakville</h2>
          <p style={tagline}>A titan rises again, closer to the earth than ever</p>
          <p style={prose}>
            There is perhaps no bigger news in Napa Valley than the recent reopening of the Robert Mondavi
            Winery, after a bold, design-forward renovation. The long-awaited result is nothing short of
            stunning, with the property&apos;s iconic silhouettes supplemented with gorgeous contemporary
            additions, blurring the line between indoors and out. The legendary winemaking continues as
            ever, now backed by new, state-of-the-art winemaking equipment and an exemplary commitment to
            sustainability.
          </p>
          <p style={{ ...prose, marginBottom: "2.5rem" }}>
            The 2018 Reserve Cabernet Sauvignon from the estate&apos;s To Kalon vineyard is a fitting tribute
            to the pioneering legacy of the namesake founder, who started the business in 1966, nearly six
            decades now of bottlings that exemplify the glories of Napa Valley fruit. A completely redesigned
            hospitality experience means that veteran Napa Valley-goers, most of whom likely started their
            exploration of the valley with a stop at this Oakville gem, have plenty of reasons to return.
          </p>

          <PropertyCard
            label="Taste here"
            name="Robert Mondavi Winery"
            address="7801 St Helena Hwy, Oakville, CA 94558"
            href="https://www.robertmondavi.com/"
            linkText="Visit robertmondavi.com →"
          />

          <div style={{ borderTop: "1px solid var(--hub-line)", margin: "3rem 0" }} />

          <h2 style={h2}>Louis M. Martini Winery, St. Helena</h2>
          <p style={tagline}>A pioneer goes back to its roots, literally</p>
          <p style={prose}>
            The Louis M. Martini Winery and its remarkably consistent treasures are practically synonymous
            with the pleasures of Napa Valley. Louis M. Martini, born in Genoa, started the winery in 1933
            as one of the pioneering Napa Valley Five, brave souls who started pressing when Prohibition
            finally ended. Martini knew the terroir was right, and saw Cabernet as the grape to bring it to
            its highest expression.
          </p>
          <p style={{ ...prose, marginBottom: "2.5rem" }}>
            The century mark is in sight and, as a sort of tribute, winemaker Zach Watkins, now five years
            into his tenure, has been evolving the house&apos;s style, in part by looking backward. The
            latest offerings are reminiscent of the wines more common in the 1960s and 70s, an era when
            passion for the region&apos;s wines really blossomed into the global phenomenon it has become.
            These bottles are showing higher acidity and aromatic elegance, and more moderate alcohol. Look
            out for 2023&apos;s The Gryphon, a wine, they say, &ldquo;designed for the table.&rdquo; It&apos;s a
            bottle meant to be shared with friends over an exquisite meal, which is to say, it embodies both
            the past and the future of Napa Valley, all at once.
          </p>

          <PropertyCard
            label="Taste here"
            name="Louis M. Martini Winery"
            address="707 State Route 29, St Helena, CA 94574"
            href="https://www.louismartini.com/"
            linkText="Visit louismartini.com →"
          />

          <div style={{ borderTop: "1px solid var(--hub-line)", paddingTop: "2rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.8125rem", color: "var(--hub-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
              This article was created in partnership with Visit Napa Valley. For winery listings, maps,
              event calendars, and insider travel tips, visit{" "}
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
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--hub-line)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--hub-muted)",
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
