"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const days = [
  {
    day: "Day one",
    title: "Arrive & unwind",
    subtitle: "Carneros to Yountville",
    mapHint: "South · Carneros → Yountville",
    events: [
      {
        time: "2:00 PM",
        activity: "Check in at Carneros Resort & Spa",
        description:
          "Private cottages among the vines—your base for what comes next.",
        type: "stay",
        thumb: "/images/photography/stanly-ranch-spa.jpg",
        url: "https://www.carnerosresort.com/",
      },
      {
        time: "4:00 PM",
        activity: "Tasting at Etude Wines",
        description:
          "Carneros Pinot on the terrace, where the breeze matches the pour.",
        type: "wine",
        thumb: "/images/photography/wine-cellar-toast.jpg",
        url: "https://www.etudewines.com/",
      },
      {
        time: "7:30 PM",
        activity: "Dinner at Bouchon Bistro",
        description:
          "Yountville’s benchmark bistro—save room for the classics.",
        type: "dine",
        thumb: "/images/photography/press-plating.jpg",
        url: "https://www.bouchonbistro.com/",
      },
    ],
  },
  {
    day: "Day two",
    title: "The heart of the valley",
    subtitle: "Oakville to St. Helena",
    mapHint: "Mid-valley · Oakville & St. Helena",
    events: [
      {
        time: "10:00 AM",
        activity: "Robert Mondavi Winery",
        description:
          "Tour the reopened icon—where much of modern Napa began.",
        type: "wine",
        thumb: "/images/photography/wine-cellar-toast.jpg",
        url: "https://www.robertmondavi.com/",
        wsTip:
          "Wine Spectator tip: ask about the reserve Cabernet tasting in the estate room.",
      },
      {
        time: "12:30 PM",
        activity: "Lunch at The Grove @ COPIA",
        description: "Campus dining with serious wine adjacency.",
        type: "dine",
        thumb: "/images/photography/chandon-brunch.jpg",
        url: "https://www.cia.edu/copia/",
      },
      {
        time: "3:00 PM",
        activity: "Pure Luxury Tour",
        description:
          "Chauffeured miles tailored to what you like in the glass.",
        type: "explore",
        thumb: "/images/photography/stanly-ranch-convertible.jpg",
        url: "https://www.pureluxury.com/napa-valley-wine-tours/",
      },
      {
        time: "8:00 PM",
        activity: "JaM Cellars Ballroom",
        description:
          "Live music and downtown energy without leaving the valley vibe.",
        type: "explore",
        thumb: "/images/photography/cadet-nightlife.jpg",
        url: "https://www.jamcellars.com/",
      },
    ],
  },
  {
    day: "Day three",
    title: "The top of the valley",
    subtitle: "Calistoga & beyond",
    mapHint: "North · Calistoga",
    events: [
      {
        time: "9:00 AM",
        activity: "Mount View Hotel & Spa",
        description:
          "Mud baths, mineral water, and a slow start at the northern rim.",
        type: "stay",
        thumb: "/images/photography/solage-poolside.jpg",
        url: "https://www.mountviewhotel.com/",
      },
      {
        time: "11:30 AM",
        activity: "Louis Martini Winery",
        description:
          "Heritage Cabernet in a cellar that has seen generations.",
        type: "wine",
        thumb: "/images/photography/wine-cellar-toast.jpg",
        url: "https://www.louismartini.com/",
      },
      {
        time: "1:00 PM",
        activity: "Lunch at Calistoga Depot",
        description:
          "A depot turned dining room—high-ceiling charm at the top of the map.",
        type: "dine",
        thumb: "/images/photography/press-plating.jpg",
        url: "https://www.visitnapavalley.com/restaurants/",
      },
      {
        time: "4:00 PM",
        activity: "Marquee Pinball Lounge",
        description:
          "Pinball and cocktails—a playful last stop before the road home.",
        type: "explore",
        thumb: "/images/photography/cadet-nightlife.jpg",
        url: "https://www.visitnapavalley.com/things-to-do/",
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
      aria-label="Weekend itineraries"
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
          Weekend itineraries
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
          One possible long weekend—swap cellar doors, linger over lunch, or
          add a fourth day. The mileage still clocks in at twenty-five to
          thirty.
        </motion.p>
      </div>

      <div className="section-shell mx-auto max-w-2xl">
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

        <div className="mt-12 border-t border-[var(--hub-line)] pt-10 text-center">
          <p className="font-hub-sans text-sm text-[var(--hub-muted)]">
            Want this route tailored?
          </p>
          <a
            href="https://www.visitnapavalley.com/plan-your-trip/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--hub-wine)] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--hub-wine-deep)]"
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
      {/* Trigger */}
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
        {/* Day number circle */}
        <span
          style={{
            flexShrink: 0,
            width: "2.25rem",
            height: "2.25rem",
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

        {/* Text */}
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

        {/* Event count + chevron */}
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
              fontSize: "0.625rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
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

      {/* Panel */}
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
              backgroundColor: "var(--hub-navy)",
            }}
          >
            <svg viewBox="0 0 120 20" style={{ height: "1rem", width: "3.5rem", flexShrink: 0, color: "var(--hub-champagne)" }} aria-hidden>
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
                color: "rgba(255,255,255,0.55)",
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
                  gridTemplateColumns: "4.5rem 1fr",
                  borderTop: ei > 0 ? "1px solid var(--hub-line)" : "none",
                }}
              >
                {/* Left column — time band */}
                <div
                  style={{
                    backgroundColor: "var(--hub-paper-2)",
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
                      lineHeight: 1.3,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {event.time.replace(" ", "\n")}
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

                {/* Right column — content */}
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
