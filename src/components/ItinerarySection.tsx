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

function DayRouteMini({ label }: { label: string }) {
  return (
    <div className="mt-4 flex items-center gap-3 rounded-md border border-[var(--hub-line)] bg-[var(--hub-card)] px-3 py-2.5">
      <svg viewBox="0 0 120 24" className="h-6 w-[4.5rem] shrink-0 text-[var(--hub-wine)]" aria-hidden>
        <line x1="4" y1="14" x2="108" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.35" />
        <circle cx="20" cy="14" r="4" fill="currentColor" />
        <circle cx="60" cy="14" r="4" fill="currentColor" opacity="0.85" />
        <circle cx="100" cy="14" r="4" fill="currentColor" opacity="0.55" />
      </svg>
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--hub-muted)]">
        {label}
      </p>
    </div>
  );
}

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
      className="hub-card-elevated overflow-hidden rounded-[var(--hub-radius)] border border-[var(--hub-line)] bg-[var(--hub-card)]"
      style={{ borderLeft: isOpen ? "3px solid var(--hub-wine)" : "3px solid transparent" }}
    >
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="itinerary-day-trigger flex w-full min-h-14 items-start gap-4 px-4 py-4 text-left transition sm:px-6"
      >
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rose-900/20 text-xs font-bold text-[var(--hub-wine)]">
          {index + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="font-hub-sans text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--hub-champagne)]">
            {day.day}
          </span>
          <span className="font-hub-serif mt-1 block text-xl font-normal tracking-[-0.02em] text-[var(--hub-ink)] sm:text-2xl">
            {day.title}
          </span>
          <span className="font-hub-display mt-0.5 block text-base leading-snug text-[var(--hub-muted)]">
            {day.subtitle}
          </span>
        </span>
        <span
          className="mt-1 shrink-0 text-[var(--hub-muted)] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className="border-t border-[var(--hub-line)] px-4 pb-5 pt-2 sm:px-6"
        >
          <DayRouteMini label={day.mapHint} />
          <ul className="relative mt-8 space-y-0 pl-2 sm:pl-3">
            <span
              className="absolute left-[17px] top-2 bottom-2 w-px bg-rose-900/25 sm:left-[19px]"
              aria-hidden
            />
            {day.events.map((event, ei) => (
              <li
                key={event.activity}
                className={`relative flex gap-4 pb-6 pl-6 sm:gap-5 sm:pl-8 sm:pb-8 ${
                  ei === day.events.length - 1 ? "pb-2 sm:pb-2" : ""
                } ${ei > 0 ? "border-t border-[var(--hub-line)] pt-6 sm:pt-8" : ""}`}
              >
                <span
                  className="absolute left-[11px] top-7 z-[1] h-3 w-3 rounded-full border-2 border-[var(--hub-card)] bg-[var(--hub-wine)] sm:left-[13px] sm:top-8"
                  aria-hidden
                />
                <div className="min-w-0 flex-1 pt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <time className="font-hub-sans text-sm font-semibold tabular-nums text-[var(--hub-ink)] sm:text-base">
                      {event.time}
                    </time>
                    <span
                      className="font-hub-sans rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white"
                      style={{
                        backgroundColor: typeStyle[event.type].bg,
                      }}
                    >
                      {typeStyle[event.type].label}
                    </span>
                  </div>
                  <h4 className="font-hub-serif mt-2 text-lg font-normal leading-snug tracking-[-0.015em] text-[var(--hub-ink)] sm:text-xl">
                    {event.activity}
                  </h4>
                  {"wsTip" in event && event.wsTip && (
                    <p className="font-hub-display mt-3 border-l-2 border-[var(--hub-champagne)] pl-3 text-sm italic text-[var(--hub-muted)]">
                      {event.wsTip}
                    </p>
                  )}
                  <p className="font-hub-display mt-3 max-w-xl text-[1.0625rem] leading-[1.75] text-[var(--hub-muted)]">
                    {event.description}
                  </p>
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-hub-sans"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      marginTop: "0.75rem",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--hub-champagne)",
                      textDecoration: "none",
                    }}
                  >
                    Visit site →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
