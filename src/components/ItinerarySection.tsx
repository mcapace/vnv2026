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
      className="bg-white rounded-sm shadow-sm border border-[#C5A55A]/10 overflow-hidden"
    >
      {/* Day header */}
      <div className="bg-[#63242D] px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white text-sm font-semibold shrink-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {dayIndex + 1}
          </span>
          <div>
            <span
              className="text-[#C5A55A] text-[10px] tracking-[0.3em] uppercase block mb-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {day.day}
            </span>
            <h3
              className="text-white text-xl sm:text-2xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {day.title}
            </h3>
            <p
              className="text-white/50 text-sm mt-0.5"
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
          <div key={event.activity} className="px-6 py-5 sm:px-8 sm:py-6 flex gap-4 sm:gap-6">
            {/* Time column */}
            <div className="shrink-0 w-16 sm:w-20 pt-0.5">
              <span
                className="text-[#C5A55A] text-xs tracking-wide whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {event.time}
              </span>
            </div>

            {/* Content column */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span
                  className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 text-white rounded-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: typeColors[event.type],
                  }}
                >
                  {typeLabels[event.type]}
                </span>
              </div>
              <h4
                className="text-[#2C2C2C] text-base sm:text-lg mb-1 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {event.activity}
              </h4>
              <p
                className="text-[#4A4A4A]/70 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
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
      <div ref={headerRef} className="section-prose max-w-3xl text-center mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#C5A55A] text-[11px] tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Sample Itinerary
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C] mb-4 text-balance"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Three Days in{" "}
          <em className="text-[#63242D]">Paradise</em>
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

      {/* Day cards - single column, clean layout */}
      <div className="section-prose max-w-3xl lg:max-w-4xl space-y-8 md:space-y-10">
        {days.map((day, i) => (
          <DayCard key={day.day} day={day} dayIndex={i} />
        ))}
      </div>
    </section>
  );
}
