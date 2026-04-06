import { getStories } from "@/lib/api";
import StoryCard from "./components/StoryCard";
import StatsSection from "./components/StatsSection";
import EventsSection from "./components/EventsSection";
import ContactSection from "./components/ContactSection";
import QuoteBanner from "./components/QuoteBanner";
import Link from "next/link";
export default async function Home() {
  const data = await getStories();
  const stories = data.data;
  
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center text-center">

        <img
          src="/hero.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl lg:text-[60px] font-medium">
            Every Life Has a Story Worth Telling
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover the raw, unfiltered narratives of people from all walks of life.
          </p>

          <div className="mt-6 flex justify-center gap-4">

  <Link
    href="/stories"
    className="
      bg-[#D4A574] text-black px-6 py-3 rounded-full
      transition-all duration-300
      hover:bg-[#c09563]
      hover:scale-105
      hover:shadow-lg hover:shadow-[#D4A574]/30
    "
  >
    Read Stories →
  </Link>

  <Link
    href="/events"
    className="
      border border-white text-white px-6 py-3 rounded-full
      transition-all duration-300
      hover:bg-white hover:text-black
      hover:scale-105
    "
  >
    Explore Events
  </Link>

</div>
            <div className="mt-6 flex justify-center gap-4">

  <Link
    href="/stories"
    className="
      bg-[#D4A574] text-black px-6 py-3 rounded-full
      transition-all duration-300
      hover:bg-[#c09563]
      hover:scale-105
      hover:shadow-lg hover:shadow-[#D4A574]/30
    "
  >
    Read Stories →
  </Link>

  <Link
    href="/events"
    className="
      border border-white text-white px-6 py-3 rounded-full
      transition-all duration-300
      hover:bg-white hover:text-black
      hover:scale-105
    "
  >
    Explore Events
  </Link>

</div>
          </div>
        </div>
      </section>

      {/* 🔥 STORIES SECTION (DIRECTLY BELOW HERO) */}
      <section className="px-4 sm:px-6 md:px-10 py-16 md:py-20">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-semibold">
              Featured Stories
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl">
              Carefully curated human stories that have inspired change, sparked empathy, and touched thousands of hearts across communities.
            </p>
          </div>

          <button className="bg-[#a88b6a] px-5 py-2 rounded-full">
            View All Stories →
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stories.map((story: any) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

      </section>
<StatsSection />
<EventsSection/>
<ContactSection /> 
<QuoteBanner />
    </main>
  );
}
