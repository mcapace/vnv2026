"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const days = [
  {
    day: "Day One",
    title: "Arrive & Unwind",
    subtitle: "Carneros to Yountville",
    events: [
      {
        time: "2:00 PM",
        activity: "Check in at Carneros Resort & Spa",
        description:
          "Settle into a private cottage surrounded by rolling vineyards. Let the valley welcome you.",
        type: "stay",
      },
      {
        time: "4:00 PM",
        activity: "First Tasting at Etude Wines",
        description:
          "Begin with the Pinot Noirs that put Carneros on the world stage — sipped on the terrace overlooking the estate.",
        type: "wine",
      },
      {
        time: "7:30 PM",
        activity: "Dinner at Bouchon Bistro",
        description:
          "Thomas Keller's beloved French bistro in Yountville. The roast chicken and steak frites are legendary.",
        type: "dine",
      },
    ],
  },
  {
    day: "Day Two",
    title: "The Heart of the Valley",
    subtitle: "Oakville to St. Helena",
    events: [
      {
        time: "10:00 AM",
        activity: "Robert Mondavi Winery",
        description:
          "Tour the iconic winery — newly reopened — where Napa's modern era began. Reserve a private barrel tasting.",
        type: "wine",
      },
      {
        time: "12:30 PM",
        activity: "Lunch at The Grove @ COPIA",
        description:
          "Farm-fresh California cuisine in the heart of Napa's culinary campus. Don't miss the seasonal tasting menu.",
        type: "dine",
      },
      {
        time: "3:00 PM",
        activity: "Pure Luxury Tour",
        description:
          "Private chauffeured tour through the valley's most scenic routes, with stops curated to your palate.",
        type: "explore",
      },
      {
        time: "8:00 PM",
        activity: "Live Music at JaM Cellars Ballroom",
        description:
          "End the night with live performances and JaM's award-winning wines in downtown Napa's coolest venue.",
        type: "explore",
      },
    ],
  },
  {
    day: "Day Three",
    title: "The Top of the Valley",
    subtitle: "Calistoga & Beyond",
    events: [
      {
        time: "9:00 AM",
        activity: "Mount View Hotel & Spa Morning",
        description:
          "Start with a spa treatment at this historic Calistoga gem — mud baths and mineral pools await.",
        type: "stay",
      },
      {
        time: "11:30 AM",
        activity: "Louis Martini Winery",
        description:
          "One of Napa's original wineries, Louis Martini delivers powerful Cabernets with century-deep roots.",
        type: "wine",
      },
      {
        time: "1:00 PM",
        activity: "Lunch at Calistoga Depot",
        description:
          "A beautifully restored train depot turned vibrant restaurant at the top of the valley.",
        type: "dine",
      },
      {
        time: "4:00 PM",
        activity: "Marquee Pinball Lounge",
        description:
          "Classic arcade meets craft cocktails — an unexpected delight and the perfect finale to your valley adventure.",
        type: "explore",
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  stay: "#63242D",
  dine: "#C17744",
  wine: "#4A1C23",
  explore: "#7A8B6F",
};

const typeLabels: Record<string, string> = {
  stay: "Stay",
  dine: "Dine",
  wine: "Wine",
  explore: "Explore",
};

function DayCard({
  day,
  dayIndex,
}: {
  day: (typeof days)[0];
  dayIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: dayIndex * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white rounded-sm shadow-md border border-[#C5A55A]/12 overflow-hidden"
    >
      {/* Day header */}
      <div className="bg-[#63242D] px-6 py-6 sm:px-10 sm:py-8">
        <div className="flex items-start sm:items-center gap-4 sm:gap-5">
          <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 text-white text-base sm:text-lg font-semibold shrink-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {dayIndex + 1}
          </span>
          <div className="min-w-0 text-left">
            <span
              className="text-[#C5A55A] text-[10px] sm:text-[11px] tracking-[0.3em] uppercase block mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {day.day}
            </span>
            <h3
              className="text-white text-2xl sm:text-3xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {day.title}
            </h3>
            <p
              className="text-white/55 text-base sm:text-lg mt-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {day.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Events list */}
      <div className="divide-y divide-[#F5F0E8]">
        {day.events.map((event, i) => (
          <div key={event.activity} className="px-6 py-6 sm:px-10 sm:py-7 flex gap-5 sm:gap-8">
            {/* Time column */}
            <div className="shrink-0 w-[4.5rem] sm:w-24 pt-1">
              <span
                className="text-[#C5A55A] text-sm font-medium tracking-wide whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {event.time}
              </span>
            </div>

            {/* Content column */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 text-white rounded-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: typeColors[event.type],
                  }}
                >
                  {typeLabels[event.type]}
                </span>
              </div>
              <h4
                className="text-[#2C2C2C] text-lg sm:text-xl mb-1.5 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {event.activity}
              </h4>
              <p
                className="text-[#4A4A4A]/80 leading-relaxed text-base sm:text-[1.05rem]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ItinerarySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="itinerary" className="relative py-24 md:py-32 bg-[#FEFCF8] overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="section-shell max-w-4xl text-center mb-14 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-eyebrow mb-4"
        >
          Weekend itineraries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-title text-[#2C2C2C] mb-4"
        >
          Three Days in{" "}
          <em className="text-[#63242D] not-italic">Paradise</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#4A4A4A]/70 max-w-2xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
        >
          From the southern tip of Carneros to the mountaintop views of
          Calistoga &mdash; a curated journey through the best of Napa Valley.
        </motion.p>
      </div>

      <div className="section-shell max-w-5xl space-y-8 md:space-y-10">
        {days.map((day, i) => (
          <DayCard key={day.day} day={day} dayIndex={i} />
        ))}
      </div>
    </section>
  );
}
