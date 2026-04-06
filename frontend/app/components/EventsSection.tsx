import EventCard from "./EventCard";
import { getEvents } from "@/lib/api";

export default async function EventsSection() {
  const events = await getEvents();
console.log(events);
  return (
    <section className="bg-black text-white px-10 py-20">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-semibold">Events</h2>
          <p className="text-gray-400 mt-2 max-w-xl">
            Thoughtfully curated gatherings where conversations flow freely,
            stories are shared openly, and real human connections are made.
          </p>
        </div>

        <button className="bg-[#D4A574] text-black px-5 py-2 rounded-full">
          View all Events →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

    </section>
  );
}