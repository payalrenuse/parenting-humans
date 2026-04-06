export default function EventCard({ event }: any) {
  if (!event) return null;

  const image = event?.thumbnail?.url
    ? `http://localhost:1337${event.thumbnail.url}`
    : "/fallback.jpg";

  const avatar = event?.author_image?.url
    ? `http://localhost:1337${event.author_image.url}`
    : "/avatar.jpg";

  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
      {/* SQUARE IMAGE */}
      <div className="relative w-full aspect-square">
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 p-4 w-full">

          <h3 className="text-white text-lg font-semibold leading-snug">
            {event.title}
          </h3>

          <div className="flex items-center justify-between mt-4">

            {/* LEFT */}
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-white text-sm font-medium">
                {event.author_name}
              </p>
            </div>

            {/* RIGHT */}
            <div className="text-xs text-right">
              <p className="text-white">
                {new Date(event.date).toDateString()}
              </p>
              <p className="text-gray-300">
                Virtual Event
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}