import { getStoryBySlug } from "@/lib/api";

export default async function StoryDetail({ params }: any) {
  const { slug } = await params;

  const story = await getStoryBySlug(slug);

  console.log("STORY:", story);

  if (!story) {
    return <div className="text-white p-20">Story not found</div>;
  }

  const image = story.cover_image?.url
    ? "http://localhost:1337" + story.cover_image.url
    : "/fallback.jpg";

  return (
    <section className="bg-black text-white">

      {/* BANNER */}
      <div className="relative w-full h-[300px]">
        <img src={image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-semibold text-center">
          {story.title}
        </h1>
      </div>

      {/*  CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-6">
          <div className="bg-[#111] rounded-xl overflow-hidden border border-gray-800">
            <img src={image} className="w-full h-[300px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-400">Author</p>
              <p className="text-lg font-semibold">{story.author_name}</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {story.title}
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {story.short_description}
          </p>

          <div className="text-gray-300 space-y-3">
            {story.content?.map((block: any, i: number) => (
              <p key={i}>
                {block.children?.map((child: any) => child.text).join("")}
              </p>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
