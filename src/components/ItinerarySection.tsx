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
  explore: "#5D6B52",
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
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: dayIndex * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-2xl border border-[#C5A55A]/18 bg-white shadow-[0_4px_24px_-4px_rgba(44,28,32,0.12),0_2px_8px_-4px_rgba(44,28,32,0.08)]"
    >
      <div className="bg-[#63242D] px-7 py-8 sm:px-10 sm:py-9 md:px-12 md:py-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/12 text-lg font-semibold text-white ring-1 ring-white/20 sm:h-16 sm:w-16 sm:text-xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {dayIndex + 1}
          </span>
          <div className="min-w-0 flex-1 text-left">
            <p
              className="mb-2 text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4BA7A]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {day.day}
            </p>
            <h3
              className="text-[1.65rem] font-normal leading-tight text-white sm:text-3xl md:text-[2rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {day.title}
            </h3>
            <p
              className="mt-2 text-lg text-white/60 md:text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {day.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#FEFCF8] to-[#F8F4EC] px-5 py-8 sm:px-8 sm:py-10 md:px-11 md:py-11">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 md:gap-7">
          {day.events.map((event) => (
            <article
              key={event.activity}
              className="rounded-xl border border-[#C5A55A]/14 bg-white/90 px-6 py-7 shadow-sm backdrop-blur-sm sm:px-8 sm:py-8 md:px-9 md:py-9"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
                <div className="shrink-0 sm:w-[7.5rem]">
                  <p
                    className="inline-block rounded-md bg-[#63242D]/06 px-3 py-2 text-base font-semibold tabular-nums tracking-wide text-[#63242D] sm:block sm:bg-transparent sm:px-0 sm:py-0 sm:pt-1 sm:text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {event.time}
                  </p>
                </div>
                <div className="min-w-0 flex-1 space-y-3 border-t border-[#E8E0D4] pt-5 sm:border-t-0 sm:pt-0">
                  <span
                    className="inline-block rounded-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: typeColors[event.type],
                    }}
                  >
                    {typeLabels[event.type]}
                  </span>
                  <h4
                    className="text-xl font-normal leading-snug text-[#2C2C2C] sm:text-[1.35rem] md:text-[1.5rem]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {event.activity}
                  </h4>
                  <p
                    className="max-w-prose text-[1.0625rem] leading-[1.7] text-[#4A4A4A] md:text-lg md:leading-[1.75]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ItinerarySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="itinerary"
      className="relative border-t border-[#C5A55A]/12 bg-[#F5F0E8] py-20 md:py-28"
    >
      <div
        ref={headerRef}
        className="section-shell max-w-3xl text-center md:mb-16 mb-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-eyebrow mb-4"
        >
          Weekend itineraries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.06 }}
          className="section-title text-[#2C2C2C] mb-5"
        >
          Three Days in{" "}
          <em className="text-[#63242D] not-italic">Paradise</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.14 }}
          className="mx-auto max-w-xl text-[#4A4A4A] text-lg leading-relaxed md:text-[1.25rem]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          From the southern tip of Carneros to the mountaintop views of
          Calistoga — room to read, plan, and imagine your own long weekend.
        </motion.p>
      </div>

      <div className="section-shell max-w-4xl space-y-10 md:space-y-12 lg:max-w-5xl">
        {days.map((day, i) => (
          <DayCard key={day.day} day={day} dayIndex={i} />
        ))}
      </div>
    </section>
  );
}
