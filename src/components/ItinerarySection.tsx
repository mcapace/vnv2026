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
  stay: "#722F37",
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

function TimelineEvent({
  event,
  index,
  isLeft,
}: {
  event: (typeof days)[0]["events"][0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-start gap-4 md:gap-8 ${
        isLeft ? "md:flex-row-reverse md:text-right" : ""
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#C5A55A] bg-[#FEFCF8] z-10 mt-1.5" />

      {/* Content */}
      <div
        className={`ml-12 md:ml-0 md:w-[calc(50%-32px)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        } group`}
      >
        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
          <span
            className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full text-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              backgroundColor: typeColors[event.type],
            }}
          >
            {typeLabels[event.type]}
          </span>
          <span
            className="text-[#C5A55A] text-xs tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {event.time}
          </span>
        </div>
        <h4
          className="text-lg md:text-xl text-[#2C2C2C] mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {event.activity}
        </h4>
        <p
          className="text-[#4A4A4A]/70 text-sm leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
        >
          {event.description}
        </p>
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
      <div ref={headerRef} className="max-w-4xl mx-auto px-6 text-center mb-20">
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
          className="text-3xl sm:text-4xl md:text-5xl text-[#2C2C2C] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Three Days in{" "}
          <em className="text-[#722F37]">Paradise</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#4A4A4A]/70 text-lg max-w-2xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
        >
          From the southern tip of Carneros to the mountaintop views of
          Calistoga — a curated journey through the best of Napa Valley.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Vertical line */}
        <div className="timeline-line" />

        {days.map((day, dayIndex) => {
          const dayRef = useRef<HTMLDivElement>(null);
          const dayInView = useInView(dayRef, { once: true, margin: "-80px" });

          return (
            <div key={day.day} className="mb-20 last:mb-0">
              {/* Day header */}
              <motion.div
                ref={dayRef}
                initial={{ opacity: 0, y: 20 }}
                animate={dayInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="text-center mb-12 relative"
              >
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#C5A55A] z-10 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">
                    {dayIndex + 1}
                  </span>
                </div>
                <div className="ml-12 md:ml-0">
                  <span
                    className="text-[#C5A55A] text-[10px] tracking-[0.4em] uppercase block mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {day.day}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl text-[#2C2C2C]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {day.title}
                  </h3>
                  <p
                    className="text-[#4A4A4A]/50 text-sm mt-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {day.subtitle}
                  </p>
                </div>
              </motion.div>

              {/* Events */}
              <div className="space-y-8">
                {day.events.map((event, eventIndex) => (
                  <TimelineEvent
                    key={event.activity}
                    event={event}
                    index={eventIndex}
                    isLeft={eventIndex % 2 === 0}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
