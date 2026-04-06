"use client";

import { useState } from "react";

import EventCard from "../components/EventCard";

export default function EventsClient({ events }: any) {
  const [active, setActive] = useState("all");
const now = new Date();

const filteredEvents = events.filter((event: any) => {
  const eventDate = new Date(event.date);

  if (active === "upcoming") return eventDate >= now;
  if (active === "past") return eventDate < now;

  return true; // all events
});
  return (
  <section className="bg-black text-white px-6 md:px-10 lg:px-16">

    {/* 🔥 BANNER */}
    <div className="relative w-full h-[300px]">

      <img
        src="/events-banner.png"
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-semibold">
        Events
      </h1>

    </div>

      {/* BUTTONS */}
     <div className="flex gap-4 mb-10">

  {/* ALL EVENTS */}
  <button
    onClick={() => setActive("all")}
    className={`px-5 py-2 rounded-full border transition-all duration-300
    ${active === "all"
      ? "bg-[#D4A574] text-black border-[#D4A574]"
      : "border-gray-600 text-white hover:bg-[#D4A574] hover:text-black"
    }`}
  >
    All Events
  </button>

  {/* UPCOMING */}
  <button
    onClick={() => setActive("upcoming")}
    className={`px-5 py-2 rounded-full border transition-all duration-300
    ${active === "upcoming"
      ? "bg-[#D4A574] text-black border-[#D4A574]"
      : "border-gray-600 text-white hover:bg-[#D4A574] hover:text-black"
    }`}
  >
    Upcoming Events
  </button>

  {/* PAST */}
  <button
    onClick={() => setActive("past")}
    className={`px-5 py-2 rounded-full border transition-all duration-300
    ${active === "past"
      ? "bg-[#D4A574] text-black border-[#D4A574]"
      : "border-gray-600 text-white hover:bg-[#D4A574] hover:text-black"
    }`}
  >
    Past Events
  </button>

</div>

      {/* GRID */}
     <div className="grid grid-cols-3 gap-8 mt-4">
        {filteredEvents.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}