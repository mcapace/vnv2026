"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Internal: partner links go to venue sites; VNV links are for town/category planning (not shown to users).
const days = [
  {
    day: "Day one",
    title: "Carneros to Yountville",
    subtitle: "Arrive & unwind",
    mapHint: "South · Carneros to Yountville",
    events: [
      {
        time: "3:00 PM",
        activity: "Check in at Carneros Resort & Spa",
        description:
          "Private cottages among the vines. Many Napa Valley hotels begin check-in around 4:00 PM. Drop bags, grab a pool hour, then roll into the afternoon.",
        type: "stay",
        thumb: "/images/photography/stanly-ranch-spa.jpg",
        url: "https://www.carnerosresort.com/",
      },
      {
        time: "4:30 PM",
        activity: "Tasting at Etude",
        description:
          "Cool-climate Pinot Noir and Chardonnay from the Carneros benchlands. Book an afternoon slot that fits check-in.",
        type: "wine",
        thumb: "/images/photography/wine-cellar-toast.jpg",
        url: "https://www.etudewines.com/",
      },
      {
        time: "7:30 PM",
        activity: "Dinner at Bouchon Bistro",
        description: "Yountville’s benchmark bistro. Save room for the classics.",
        type: "dine",
        thumb: "/images/photography/press-plating.jpg",
        url: "https://www.thomaskeller.com/bouchonyountville",
      },
    ],
  },
  // TODO: Confirm Day 2 stops with Madi Griggs. Current version reflects client note that Mondavi sits between Yountville and St. Helena and belongs on the mid-valley day.
  {
    day: "Day two",
    title: "Yountville to St. Helena",
    subtitle: "Mid-valley tasting and an estate dinner",
    mapHint: "Mid-valley · Yountville through Oakville to St. Helena",
    events: [
      {
        time: "11:00 AM",
        activity: "Tasting at Robert Mondavi Winery",
        description:
          "Late morning in Oakville at the reopened icon, where much of modern Napa Valley began. Book a tasting that lets you ease up from Yountville without rushing.",
        type: "wine",
        thumb: "/images/photography/wine-cellar-toast.jpg",
        url: "https://www.robertmondavi.com/",
        wsTip:
          "Wine Spectator tip: ask what’s new in the reopened hospitality spaces. Tasting formats evolved with the architecture.",
      },
      {
        time: "2:30 PM",
        activity: "Tasting at Louis Martini Winery",
        description:
          "Afternoon on the Silverado Trail in St. Helena: heritage house, structured Cabernet, and a cellar steeped in Napa Valley history.",
        type: "wine",
        thumb: "/images/photography/wine-cellar-toast.jpg",
        url: "https://www.louismartini.com/",
      },
      {
        time: "7:00 PM",
        activity: "Dinner at The Grove at COPIA",
        description:
          "Estate dinner on the Culinary Institute campus in Napa: wine-country cooking with indoor-outdoor seating. It is a drive south on Hwy 29 from St. Helena for the table, or swap for a St. Helena restaurant if you want to stay put for the night.",
        type: "dine",
        thumb: "/images/photography/chandon-brunch.jpg",
        url: "https://www.ciaatcopia.com/grove-restaurant",
      },
    ],
  },
  // TODO: Confirm St. Helena Visit site URL with VNV; legacy /towns/st-helena/ 404s. Using the live town hub (things-to-do).
  {
    day: "Day three",
    title: "St. Helena to Calistoga",
    subtitle: "North-end spa and a slower finale",
    mapHint: "North · St. Helena to Calistoga",
    events: [
      {
        time: "10:00 AM",
        activity: "St. Helena stroll or tasting",
        description:
          "Walk Main Street tasting rooms or add a Silverado Trail stop while the day is still cool. Flex the morning to match energy.",
        type: "explore",
        thumb: "/images/photography/chandon-hilltop.jpg",
        url: "https://www.visitnapavalley.com/things-to-do/towns-regions/st-helena/",
      },
      {
        time: "12:30 PM",
        activity: "Lunch at Forum, Meadowood Napa Valley",
        description:
          "Wine-country fine dining on the Meadowood estate in St. Helena. Book ahead and build the rest of the afternoon around the reservation.",
        type: "dine",
        thumb: "/images/photography/press-plating.jpg",
        url: "https://meadowood.com/dining/forum/",
      },
      {
        time: "3:30 PM",
        activity: "Mount View Hotel & Spa",
        description:
          "Calistoga slow afternoon. Spa menu and pool time vary by season. Reserve treatments and confirm mineral-pool access when you book.",
        type: "stay",
        thumb: "/images/photography/solage-poolside.jpg",
        url: "https://www.mountviewhotel.com/",
      },
    ],
  },
];

const typeStyle: Record<string, { bg: string; label: string }> = {
  stay: { bg: "var(--hub-wine)", label: "Stay" },
  dine: { bg: "var(--hub-terra)", label: "Dine" },
  wine: { bg: "var(--hub-wine-deep)", label: "Wine" },
  explore: { bg: "var(--hub-sage)", label: "Explore" },
};

export default function ItinerarySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const reducedMotion = useReducedMotion();
  const [openDay, setOpenDay] = useState<number>(0);

  return (
    <section
      id="itinerary"
      role="region"
      aria-label="Sample itineraries"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-paper)]"
      style={{
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <div ref={headerRef} className="section-shell section-stack mx-auto mb-8 max-w-2xl md:mb-10">
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow"
        >
          Sample itineraries
        </motion.p>
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.06 }}
          className="section-title"
        >
          Three days in{" "}
          <span className="text-[var(--hub-champagne)]">paradise</span>
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reducedMotion ? 0 : 0.12 }}
          className="hub-prose"
        >
          A sample three-day rhythm. Steal it outright or remix. Swap days, add a fourth night, tighten to
          two. Distances stay short, but Napa Valley covers more ground than the valley floor alone, so leave
          room to actually enjoy the drive.
        </motion.p>
      </div>

      <div className="section-shell mx-auto max-w-3xl">
        <ol className="space-y-4">
          {days.map((day, dayIndex) => (
            <li key={day.title} className="list-none">
              <DayAccordion
                day={day}
                index={dayIndex}
                isOpen={openDay === dayIndex}
                onToggle={() => setOpenDay((d) => (d === dayIndex ? -1 : dayIndex))}
              />
            </li>
          ))}
        </ol>

        <div
          className="mt-8 pt-8 text-center"
          style={{ borderTop: "1px solid var(--hub-line)" }}
        >
          <p
            className="font-hub-sans text-sm text-[var(--hub-muted)]"
            style={{ marginBottom: "0.875rem" }}
          >
            Want this route tailored?
          </p>
          {/* TODO: Confirm final "Plan your trip" URL with VNV. Client spec was /plan-your-trip/; that path 404s on the live site; using maps & travel info hub (200) until VNV confirms. */}
          <a
            href="https://www.visitnapavalley.com/maps-travel-info/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--hub-wine)",
              color: "#ffffff",
              borderRadius: "9999px",
              padding: "0.75rem 2rem",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "auto",
              minWidth: 0,
            }}
          >
            Customize this itinerary
          </a>
        </div>
      </div>
    </section>
  );
}

function DayAccordion({
  day,
  index,
  isOpen,
  onToggle,
}: {
  day: (typeof days)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `itinerary-day-${index}`;
  const headerId = `${panelId}-label`;

  return (
    <div
      style={{
        borderRadius: "var(--hub-radius)",
        border: "1px solid var(--hub-line)",
        backgroundColor: "var(--hub-card)",
        overflow: "hidden",
        boxShadow: isOpen ? "var(--hub-shadow-card)" : "var(--hub-shadow-sm)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Accordion trigger */}
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.25rem 1.5rem",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          borderLeft: isOpen ? "3px solid var(--hub-wine)" : "3px solid transparent",
          transition: "border-color 0.2s ease, background-color 0.2s ease",
        }}
      >
        {/* Day number */}
        <span
          style={{
            flexShrink: 0,
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "9999px",
            backgroundColor: isOpen ? "var(--hub-wine)" : "transparent",
            border: `1.5px solid ${isOpen ? "var(--hub-wine)" : "rgba(107,46,54,0.25)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: isOpen ? "#ffffff" : "var(--hub-wine)",
            transition: "all 0.2s ease",
          }}
        >
          {index + 1}
        </span>

        {/* Titles */}
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: "block",
              fontSize: "0.5625rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--hub-champagne)",
              marginBottom: "0.25rem",
            }}
          >
            {day.day}
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              fontWeight: 400,
              color: "var(--hub-ink)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {day.title}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "0.8125rem",
              color: "var(--hub-muted)",
              marginTop: "0.125rem",
            }}
          >
            {day.subtitle}
          </span>
        </span>

        {/* Stops + chevron */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "0.5625rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--hub-muted)",
              opacity: isOpen ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            {day.events.length} stops
          </span>
          <span
            style={{
              color: "var(--hub-muted)",
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
            aria-hidden
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </span>
      </button>

      {/* Open panel */}
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          style={{ borderTop: "1px solid var(--hub-line)" }}
        >
          {/* Route strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "var(--hub-paper-2)",
            }}
          >
            <svg viewBox="0 0 120 20" style={{ height: "1rem", width: "3.5rem", flexShrink: 0, color: "var(--hub-wine)" }} aria-hidden>
              <line x1="4" y1="10" x2="108" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <circle cx="20" cy="10" r="3.5" fill="currentColor" />
              <circle cx="60" cy="10" r="3.5" fill="currentColor" opacity="0.7" />
              <circle cx="100" cy="10" r="3.5" fill="currentColor" opacity="0.45" />
            </svg>
            <span
              style={{
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--hub-muted)",
              }}
            >
              {day.mapHint}
            </span>
          </div>

          {/* Events */}
          <div>
            {day.events.map((event, ei) => (
              <div
                key={event.activity}
                style={{
                  display: "grid",
                  gridTemplateColumns: "5.5rem 1fr",
                  borderTop: ei > 0 ? "1px solid var(--hub-line)" : "none",
                }}
              >
                {/* Time column */}
                <div
                  style={{
                    backgroundColor: "rgba(42,38,35,0.03)",
                    borderRight: "1px solid var(--hub-line)",
                    padding: "1.25rem 0.75rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <time
                    style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      color: "var(--hub-ink)",
                      letterSpacing: "0.04em",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.time}
                  </time>
                  <span
                    style={{
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      backgroundColor: typeStyle[event.type].bg,
                      padding: "0.125rem 0.375rem",
                      borderRadius: "0.25rem",
                      textAlign: "center",
                    }}
                  >
                    {typeStyle[event.type].label}
                  </span>
                </div>

                {/* Event details */}
                <div style={{ padding: "1.25rem 1.25rem 1rem" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "var(--hub-ink)",
                      lineHeight: 1.3,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {event.activity}
                  </h4>
                  {"wsTip" in event && event.wsTip && (
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        fontStyle: "italic",
                        color: "var(--hub-champagne)",
                        borderLeft: "2px solid var(--hub-champagne)",
                        paddingLeft: "0.5rem",
                        marginBottom: "0.375rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {event.wsTip}
                    </p>
                  )}
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "var(--hub-muted)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {event.description}
                  </p>
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--hub-champagne)",
                      textDecoration: "none",
                    }}
                  >
                    Visit site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
