"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const days = [
  {
    day: "Day one",
    title: "Arrive & unwind",
    subtitle: "Carneros to Yountville",
    events: [
      {
        time: "2:00 PM",
        activity: "Check in at Carneros Resort & Spa",
        description:
          "Private cottages among the vines—your base for what comes next.",
        type: "stay",
      },
      {
        time: "4:00 PM",
        activity: "Tasting at Etude Wines",
        description:
          "Carneros Pinot on the terrace, where the breeze matches the pour.",
        type: "wine",
      },
      {
        time: "7:30 PM",
        activity: "Dinner at Bouchon Bistro",
        description:
          "Yountville’s benchmark bistro—save room for the classics.",
        type: "dine",
      },
    ],
  },
  {
    day: "Day two",
    title: "The heart of the valley",
    subtitle: "Oakville to St. Helena",
    events: [
      {
        time: "10:00 AM",
        activity: "Robert Mondavi Winery",
        description:
          "Tour the reopened icon—where much of modern Napa began.",
        type: "wine",
      },
      {
        time: "12:30 PM",
        activity: "Lunch at The Grove @ COPIA",
        description:
          "Campus dining with serious wine adjacency.",
        type: "dine",
      },
      {
        time: "3:00 PM",
        activity: "Pure Luxury Tour",
        description:
          "Chauffeured miles tailored to what you like in the glass.",
        type: "explore",
      },
      {
        time: "8:00 PM",
        activity: "JaM Cellars Ballroom",
        description:
          "Live music and downtown energy without leaving the valley vibe.",
        type: "explore",
      },
    ],
  },
  {
    day: "Day three",
    title: "The top of the valley",
    subtitle: "Calistoga & beyond",
    events: [
      {
        time: "9:00 AM",
        activity: "Mount View Hotel & Spa",
        description:
          "Mud baths, mineral water, and a slow start at the northern rim.",
        type: "stay",
      },
      {
        time: "11:30 AM",
        activity: "Louis Martini Winery",
        description:
          "Heritage Cabernet in a cellar that has seen generations.",
        type: "wine",
      },
      {
        time: "1:00 PM",
        activity: "Lunch at Calistoga Depot",
        description:
          "A depot turned dining room—high-ceiling charm at the top of the map.",
        type: "dine",
      },
      {
        time: "4:00 PM",
        activity: "Marquee Pinball Lounge",
        description:
          "Pinball and cocktails—a playful last stop before the road home.",
        type: "explore",
      },
    ],
  },
];

const typeStyle: Record<
  string,
  { bg: string; label: string }
> = {
  stay: { bg: "var(--hub-wine)", label: "Stay" },
  dine: { bg: "var(--hub-terra)", label: "Dine" },
  wine: { bg: "var(--hub-wine-deep)", label: "Wine" },
  explore: { bg: "var(--hub-sage)", label: "Explore" },
};

export default function ItinerarySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="itinerary"
      className="border-t border-[var(--hub-line)] bg-[var(--hub-paper-2)]"
      style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}
    >
      <div ref={headerRef} className="section-shell mx-auto mb-14 max-w-2xl md:mb-20 lg:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          className="section-eyebrow text-center"
        >
          Weekend itineraries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.06 }}
          className="section-title mt-4 text-center"
        >
          Three days in{" "}
          <span className="text-[var(--hub-wine)]">paradise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12 }}
          className="hub-prose mt-5 text-center"
        >
          One possible long weekend—swap cellar doors, linger over lunch, or
          add a fourth day. The mileage still clocks in at twenty-five to
          thirty.
        </motion.p>
      </div>

      <div className="section-shell mx-auto max-w-3xl">
        <ol className="space-y-16 md:space-y-20">
          {days.map((day, dayIndex) => (
            <DayBlock key={day.title} day={day} index={dayIndex} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function DayBlock({
  day,
  index,
}: {
  day: (typeof days)[0];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="relative"
    >
      <div className="mb-10 border-l-2 border-[var(--hub-wine)] pl-6 md:mb-12 md:pl-8">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--hub-gold)]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {day.day}
        </p>
        <h3
          className="mt-2 text-2xl font-normal capitalize text-[var(--hub-ink)] md:text-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {day.title}
        </h3>
        <p
          className="mt-1 text-lg text-[var(--hub-muted)]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {day.subtitle}
        </p>
      </div>

      <ul className="space-y-0">
        {day.events.map((event, ei) => (
          <li
            key={event.activity}
            className={`flex flex-col gap-5 border-[var(--hub-line)] py-10 md:flex-row md:gap-12 md:py-12 ${
              ei === 0 ? "" : "border-t"
            }`}
          >
            <time
              className="shrink-0 text-lg font-semibold tabular-nums text-[var(--hub-ink)] md:w-32 md:text-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {event.time}
            </time>
            <div className="min-w-0 flex-1 md:border-l md:border-[var(--hub-line)] md:pl-12">
              <span
                className="inline-block rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: typeStyle[event.type].bg,
                }}
              >
                {typeStyle[event.type].label}
              </span>
              <h4
                className="mt-4 text-xl font-normal leading-snug text-[var(--hub-ink)] md:text-2xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {event.activity}
              </h4>
              <p
                className="mt-4 max-w-xl text-[1.0625rem] leading-[1.75] text-[var(--hub-muted)]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {event.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </motion.li>
  );
}
