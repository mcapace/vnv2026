"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DinePage() {
  return (
    <main className="hub-page relative w-full min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: "70vh", minHeight: "520px", backgroundColor: "var(--hub-navy)" }}
      >
        <img
          src={encodeURI("/images/Assets for Hub/Partner Images/Meadowood/Meadowood-Napa-Valley-Forum-Restaurant-Short-RIb-Risotto-Paired-with-Wine.jpg")}
          alt="Fine dining at Meadowood Napa Valley"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
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
              Dine
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
            Where to Eat in Napa Valley: Three Tables That Justify the Trip
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
            People come for the wine. Fair enough. But three restaurants in Yountville, St. Helena, and Napa
            have a habit of becoming the reason visitors rebook.
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

      {/* Article body */}
      <div
        style={{
          flex: 1,
          backgroundColor: "var(--hub-paper)",
          padding: "clamp(3rem, 7vw, 5rem) clamp(2rem, 5vw, 4rem)",
        }}
      >
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          {/* Bouchon section */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--hub-ink)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Bouchon Bistro, Yountville
          </h2>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Start with the room, because the room earns that. Thomas Keller handed the design job to
            Adam D. Tihany with a single directive: make it feel Parisian. Not the California version of
            Parisian. The actual thing, the kind of room that carries a faint memory of butter and old
            wood and maybe, if the light hits right, a Gauloise somebody smoked out back in 1973.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            What Tihany delivered: a French zinc bar, a mosaic floor almost too beautiful to step on,
            antique light fixtures that throw warm amber across every table. Covering an entire wall, a
            mural by the French artist Paulin Paris. It&apos;s a lot. It works.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Guests sit down and something shifts. Posture straightens. The meal, whatever it turns out to
            be, already feels worth taking seriously.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Keller opened Bouchon in October 1998. The French Laundry had already made him, by most
            reasonable accounts, the most significant chef in America. He didn&apos;t need another
            restaurant. But the question Bouchon was asking turned out to be more interesting than
            anything his reputation required: what does it actually mean to do a French bistro
            correctly? Not fine dining dressed down. Not some ironic riff on French cooking. The real
            thing, the way a solid bouchon in Lyon is the real thing. Where the food is technically
            serious and the room is not, and the roast chicken is what everybody came for.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Twenty-five-plus years in, certain items on the menu have become non-negotiable. The roast
            chicken, obviously. Steak frites done with a level of care that most places reserve for the
            prix fixe. Leg of lamb.             Trout amandine, which is (and this is not meant dismissively) essentially a butter delivery
            system. Regulars don&apos;t bother with the menu
            anymore. First-timers figure it out fast.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            The raw bar deserves its own visit: oysters, clams, shrimp, mussels, a plateau de fruits de
            mer that will make anyone regret having ordered a starter.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{ margin: "2.5rem 0", padding: "0 0 0 1.5rem", borderLeft: "2px solid var(--hub-champagne)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.375rem",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "var(--hub-ink)",
              }}
            >
              The Vin en Carafe program is, by many accounts, the smartest wine play in the valley right
              now. Exclusive pours from top Napa and French producers, by the carafe, chosen by people
              who clearly know what they&apos;re doing.
            </p>
          </blockquote>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            The wine list matters more here than at most restaurants. Vin en Carafe selections are
            sourced exclusively for Bouchon from wineries in Napa and France, not the
            standard-allocation bottles making the rounds through every tasting room in the county. These
            were made with this room and this food in mind. The staff knows the list cold. Ask about a
            pairing and they&apos;ll give a real answer. That sounds like it should be standard. It very
            much is not.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Weekend brunch has been the valley&apos;s worst-kept secret for years. Croque madame. Salmon
            rillettes. Warm goat cheese salad. A patio facing Washington Street where the whole of
            Yountville drifts by. Dinner is when the room tightens up and hums. Reservations are essential
            on weekends in high season. Anyone arriving a few minutes early will find the bar is a
            perfectly good place to be, and more than a few guests have decided they didn&apos;t want to
            leave it for the dining room.
          </p>

          {/* Property card */}
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
              Dine here
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
              Bouchon Bistro
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--hub-muted)", marginBottom: "0.875rem" }}>
              6534 Washington St, Yountville, CA 94599
            </p>
            <a
              href="https://www.thomaskeller.com/bouchonyountville"
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
              Visit thomaskeller.com →
            </a>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--hub-line)", margin: "3rem 0" }} />

          {/* Meadowood Napa Valley section */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--hub-ink)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Meadowood Napa Valley, St. Helena
          </h2>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Meadowood sits on a wooded ridge above St. Helena—three stars from Michelin for hospitality,
            and a kitchen that treats the estate like part of the pantry. You arrive on a drive canopied by
            oaks; porters meet you like this is normal. It still feels like wine country, not a generic
            luxury template.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Forum is the headline restaurant: tasting menus that track the seasons, service that reads the
            room, and wine pairings that assume you actually want to taste Napa Valley seriously. This is
            the reservation you plan an afternoon around—not a quick stop between tastings.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Beyond Forum, the estate folds in croquet, hiking trails, spa time, and rooms that borrow their
            palette from the forest outside the windows. Some guests never leave the property for dinner.
            Others use Meadowood as the north-valley anchor and keep exploring—either way, the evening
            tends to run long.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{ margin: "2.5rem 0", padding: "0 0 0 1.5rem", borderLeft: "2px solid var(--hub-champagne)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.375rem",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "var(--hub-ink)",
              }}
            >
              Forum is the kind of meal where the valley stops feeling like a checklist and starts feeling
              like a place you&apos;d happily miss a flight for.
            </p>
          </blockquote>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "2.5rem",
            }}
          >
            Book well ahead, especially on weekends. Dress leans resort-elegant; comfortable shoes still
            matter if you&apos;re walking the paths before sunset.
          </p>

          {/* Property card */}
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
              Dine here
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
              Meadowood Napa Valley — Forum
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--hub-muted)", marginBottom: "0.875rem" }}>
              900 Meadowood Ln, St. Helena, CA 94574
            </p>
            <a
              href="https://meadowood.com/dining/forum/"
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
              Reserve at Meadowood →
            </a>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--hub-line)", margin: "3rem 0" }} />

          {/* The Grove section */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--hub-ink)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            The Grove at COPIA, Napa
          </h2>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            The Culinary Institute of America has an 80,000-square-foot campus in Napa&apos;s Oxbow
            District, across from the Public Market, facing the river. Inside there&apos;s a restaurant
            called The Grove. It is the kind of place that locals mention with the specific enthusiasm of
            someone who wants credit for the recommendation.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            They deserve the credit. For a restaurant tied to a culinary school in a busy tourist
            district, competent is the default. What The Grove delivers is considerably better than
            that.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            The setting: a renovated indoor dining room with views of the open kitchen, and beyond that, an
            outdoor terrace shaded by mature olive trees. This is the Colavita Olive Grove Terrace, and the
            air drifting in from the Copia culinary gardens actually smells like herbs. Not the scented-candle
            version. The real thing.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            On a warm evening, dinner on that terrace (a glass of wine, a plate of pasta the kitchen made
            that afternoon from flour, eggs, and whatever they&apos;d picked from the garden that morning)
            becomes the kind of meal that lingers. The kind that surfaces at odd moments afterward:
            in airports, on highways, at a desk three weeks later.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            The menu is organized around those gardens, and not loosely. Produce gets harvested daily. The
            kitchen writes the menu based on what&apos;s ripe. The whole approach is Italian and
            Mediterranean: handmade pasta, vegetables treated as the main act, shareable plates, and a
            refusal to over-complicate. The meatballs have reached a kind of local fame. The insalata with
            garden herbs and house vinaigrette is the sort of dish that has no right to be that memorable:
            plain-looking, absurdly good.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{ margin: "2.5rem 0", padding: "0 0 0 1.5rem", borderLeft: "2px solid var(--hub-champagne)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.375rem",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "var(--hub-ink)",
              }}
            >
              When the CIA says garden-to-table they&apos;re not using it as a slogan. That produce was in
              the ground this morning. The plate is the evidence.
            </p>
          </blockquote>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Weekend brunch, Saturday and Sunday from 10:30, is the Oxbow District&apos;s most poorly kept
            secret. The Bloody Mary is made from scratch and is exactly the drink anyone needs after a night
            of going too hard on the valley&apos;s more serious wine lists. The patio fills with a mix of
            locals and visitors who&apos;ve done their research. Lemon ricotta pancakes. Smoked trout
            Benedict. A breakfast plate put together by cooks who clearly eat breakfast themselves.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Happy hour (Wednesday through Friday, 4 to 6) is a smart pre-dinner stop. Small plates and
            cocktails show off the kitchen&apos;s range without requiring a full commitment. The outdoor bar
            at dusk, olive trees overhead, the Napa River a short walk away: it is the sort of wine-country
            evening that makes people reconsider their flights home.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "1.5rem",
            }}
          >
            One more thing about the campus. The wine bar has self-dispensing tasting machines with up to 24
            pours, which is a low-key, surprisingly useful way to work through the valley&apos;s range.
            Cooking classes run by reservation. The Chuck Williams Culinary Arts Museum (more than 4,000
            objects from the Williams-Sonoma founder&apos;s personal collection) is easily worth an hour before
            dinner.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1875rem",
              lineHeight: 1.75,
              color: "var(--hub-muted)",
              marginBottom: "2.5rem",
            }}
          >
            And since the CIA is a not-for-profit, every dinner tab helps train the next generation of cooks
            who&apos;ll end up feeding people somewhere down the road. Worse reasons to order another bottle.
          </p>

          {/* Property card */}
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
              Dine here
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
              The Grove at COPIA
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--hub-muted)", marginBottom: "0.875rem" }}>
              500 1st St, Napa, CA 94559
            </p>
            <a
              href="https://www.ciagroverestaurant.com/"
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
              Reserve at The Grove →
            </a>
          </div>

          {/* Footer note */}
          <div
            style={{ borderTop: "1px solid var(--hub-line)", paddingTop: "2rem", marginBottom: "1.5rem" }}
          >
            <p
              style={{ fontSize: "0.8125rem", color: "var(--hub-muted)", lineHeight: 1.65, marginBottom: "1rem" }}
            >
              This article was created in partnership with Visit Napa Valley. For restaurant reservations,
              winery guides, event calendars, and insider travel tips, visit{" "}
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

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--hub-line)",
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
            <Link
              href="/wine"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.625rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--hub-champagne)",
                  marginBottom: "0.25rem",
                }}
              >
                Next up
              </span>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1rem",
                  color: "var(--hub-ink)",
                }}
              >
                Wineries Across Napa Valley →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
