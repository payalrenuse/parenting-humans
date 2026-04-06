"use client";

import StoryCard from "../components/StoryCard";

export default function StoriesClient({ stories }: any) {
  return (
    <section className="bg-black text-white">

      {/* 🔥 BANNER */}
      <div className="relative w-full h-[300px]">

  {/* IMAGE */}
  <img
    src="/stories-banner.png"
    className="w-full h-full object-cover"
  />

  {/* DARK + GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

  {/* TEXT */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
      Stories
    </h1>
  </div>

</div>

      {/* 🔥 CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story: any) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

      </div>

    </section>
  );
}