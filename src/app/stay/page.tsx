"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function StayPage() {
  return (
    <main className="hub-page relative flex min-h-screen w-full flex-col">
      <Navigation />

      {/* Hero */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: "70vh", minHeight: "520px", backgroundColor: "var(--hub-navy)" }}
      >
        <img
          src="/images/photography/solage-pool-night.jpg"
          alt="Carneros Resort, Napa Valley"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 48%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)",
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
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
            >
              The Hub
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
            <span
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--hub-champagne)",
              }}
            >
              Stay
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
            Where to Stay in Napa Valley: A Tale of Two Ends
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.125rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "38rem",
            }}
          >
            Most people blow through Napa in forty-eight hours and wonder why it felt rushed. Book two
            hotels instead of one—south end and north end—and the whole valley opens up.
          </p>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
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
          {/* Carneros section */}
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
            Carneros Resort and Spa — Napa
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
            Everyone says go north. Go to Oakville, go to Rutherford, go where the Cabernet is.
            That&apos;s the marquee stuff, and fair enough. But nobody mentions the fog at the southern
            end of the valley, which turns out to be the thing worth remembering.
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
            It comes up off the San Pablo Bay before sunrise. Thick, damp, weirdly quiet. Sits on the
            vineyards like it has nowhere else to be. By mid-morning it lifts and the light goes gold
            and sharp—the kind of light that makes people put their phones in a drawer and forget about
            them for hours.
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
            Carneros is the cooler, windier, less famous end of Napa Valley. The wines are different down
            here—Pinot Noir and Chardonnay instead of the big Cabernets—and the whole pace of things runs
            slower. Fewer tour buses. More birds.
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
            Carneros Resort and Spa doesn&apos;t have a main building, which might be the key to the
            whole experience. Freestanding cottages, dozens of them, spread across working culinary
            gardens and olive groves and actual grapevines that are part of the Carneros AVA. Early
            morning, walking through, the property feels like a very expensive farm that someone decided
            to put soaking tubs in. That is meant as a compliment.
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
            The Signature Cottages are where most guests end up. Wood-burning fireplaces. An outdoor
            shower that will ruin every other shower going forward. The beds are the kind nobody can
            describe without sounding like an advertisement—suffice it to say nine uninterrupted hours is
            not unusual here. The backyards are private enough that an entire afternoon can pass with a
            book and not another guest in sight.
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
              The luxury here is quiet in a way that sneaks up on people. No marble lobbies. No
              chandeliers. Just an outdoor shower that works perfectly, a cottage door that creaks when
              it opens at dawn, and fog on the vines.
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
            A routine forms without anyone planning it. Coffee on the porch. A wander through the FARM
            culinary gardens, which are real gardens, not a set piece—staff can be spotted actually
            harvesting chard most mornings. Maybe a ten-minute drive to Domaine Carneros for a
            mid-morning sparkling wine. That estate, founded by Taittinger, looks like a château that
            got lost on its way to Champagne and ended up on a California hillside. The terrace alone
            justifies the detour.
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
            Lunch back at FARM restaurant. The vegetables come from the gardens on the property, and the
            kitchen treats them with the kind of care that makes a person remember farm-to-table used to
            mean something before every restaurant with a window box started claiming it.
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
            Late afternoon the Town Square gets going. Wine tastings. Honey tastings. Sometimes live
            music. The particular satisfaction of watching someone at the next table realize they
            haven&apos;t looked at their phone since breakfast. The rooftop pool has a view over the
            vines that, after a glass of the local Pinot Noir, has been known to rearrange priorities.
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
            For wine enthusiasts: the Carneros AVA is weirdly underrated for how good it is. Less crowded
            than Oakville or Rutherford. The producers—Etude, Bouchaine, Saintsbury, Domaine
            Carneros—make cool-climate Pinot Noir and Chardonnay that tastes nothing like the big ripe
            Cabs everyone associates with Napa. Leaner, more nervous, more interesting. This resort sits
            in the geographic center of all of it.
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
            Also worth noting: the property genuinely welcomes dogs. Not in the way that means a dog is
            technically allowed but everyone gives side-eye. If Hugo&apos;s coming, bring him.
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
              Stay here
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
              Carneros Resort and Spa
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--hub-muted)", marginBottom: "0.875rem" }}>
              4048 Sonoma Hwy, Napa, CA 94559
            </p>
            <a
              href="https://www.carnerosresort.com"
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
              Visit carnerosresort.com →
            </a>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--hub-line)", margin: "3rem 0" }} />

          {/* Mount View section */}
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
            Mount View Hotel & Spa — Calistoga
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
            The drive north changes everything. Mountains get taller and closer. The road shrinks. And
            then there&apos;s Calistoga, a stubborn little town built on top of geothermal hot springs,
            surrounded by wineries, full of people who chose to live here instead of somewhere shinier.
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
            Calistoga has resisted the polish that&apos;s overtaken a lot of Napa to the south. Not
            aggressively—just cheerfully, persistently. The result is a place that feels like itself
            instead of a version of itself designed for out-of-towners. That&apos;s the whole draw.
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
            The Mount View Hotel & Spa has been on Lincoln Avenue since 1919. John B. Ghisolfo, an
            Italian immigrant, built it, then ran the bar and restaurant for fifty years. He served four
            terms as mayor. Locals called him Mr. Calistoga. The building made the National Register of
            Historic Places in &apos;81.
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
            Michael and Stephanie Woods took over in 1990 and did something worth respecting enormously:
            instead of gutting the place and going contemporary, they spent thirty-plus years making the
            existing character deeper. Reconnected the jacuzzi to the underground geothermal springs.
            Restored the Art Deco details that were already there. Named the restaurant Johnny&apos;s,
            after Ghisolfo.
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
            It&apos;s a hotel that knows what it is. That&apos;s rarer than it should be.
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
            Thirty-three rooms. Not one of them was designed for Instagram. They&apos;re comfortable in the
            way that actually matters: sized for real people, decorated with Art Deco details in the tile
            and the furniture that give the building a personality guests can feel. A century of standing
            has left its mark, and nobody&apos;s pretending otherwise.
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
              The water rises from the volcanic earth underfoot. It doesn&apos;t feel like any hotel hot
              tub. It feels prehistoric. It is.
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
            The geothermal hot spring tub is the real center of the property. Calistoga sits on
            underground springs that have drawn visitors since the 1800s, and the Mount View taps
            straight into the source. Guests are sitting in water heated by the volcanic activity
            underneath them. It hits different from a regular hot tub. The body knows the difference even
            if the brain can&apos;t explain why.
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
            True Spa is run by two independent therapists who partner with the hotel. The independence
            matters—they actually control the program. The Calistoga mud wraps use volcanic ash mixed the
            old way, not the diluted version available at the five or six other places in town offering
            something with the same name. There&apos;s a Himalayan salt sauna. A heated pool with enough
            lounge space to claim a cabana and not move until dinner. Ten percent off spa services for
            overnight guests.
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
            Calistoga is a town best explored without a plan. Lincoln Avenue has solid farm-to-table
            restaurants, a handful of shops selling things people would actually use, and tasting rooms for
            winemakers who are too small or too stubborn to set up shop further south. The wines
            here—Cabernet Sauvignon and Zinfandel from the warm, dry top of the valley—are a different
            planet from what the tasting rooms down in Carneros pour. That&apos;s the argument for doing
            both ends of this valley in one trip.
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
            Before leaving Calistoga: the Calistoga Depot is a few blocks from the hotel and worth a
            whole evening. Jean-Charles Boisset bought the 1868 train station and turned it into a
            distillery, a set of train-car dining rooms, a live music venue, a beer garden. Dinner in the
            JCB Parlor Car—oysters, caviar, Champagne, a room that looks like the Orient Express and a
            jewel box had a baby—will explain the current Calistoga moment better than anything on paper.
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
            But end the night at the Mount View. Eat at Johnny&apos;s. Sit in the springs. Some places
            improve by not changing, and this is one.
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
              Stay here
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
              Mount View Hotel & Spa
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--hub-muted)", marginBottom: "0.875rem" }}>
              1457 Lincoln Ave, Calistoga, CA 94515
            </p>
            <a
              href="https://www.mountviewhotel.com"
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
              Visit mountviewhotel.com →
            </a>
          </div>

          {/* Footer note */}
          <div style={{ borderTop: "1px solid var(--hub-line)", paddingTop: "2rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.8125rem", color: "var(--hub-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
              This article was created in partnership with Visit Napa Valley. For trip planning
              resources, winery maps, dining guides, and seasonal events, visit{" "}
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

          {/* Navigation — next article + back */}
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
              href="/dine"
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
                Where to Eat in Napa Valley →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

