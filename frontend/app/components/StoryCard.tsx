import Link from "next/link";
export default function StoryCard({ story }: any) {
 const image =
  "http://localhost:1337" + story.cover_image?.url;

  return (
    <div className="relative rounded-xl overflow-hidden group aspect-square">
    
      {/* Image */}
      <img
    src={image}
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
  />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-4 text-white w-full">

        {/* Title */}
        <h3 className="text-lg font-semibold">
          {story.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {story.short_description}
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-3 text-xs">

          <p>{story.author_name}</p>

          <Link href={`/stories/${story.slug}`} className="flex items-center gap-1">
  See Details →
</Link>

        </div>

      </div>

      {/* Category Badge */}
      <div className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full">
        Success
      </div>

    </div>
  );
}