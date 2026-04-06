export default function QuoteBanner() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/clouds.png" // <-- replace with your image
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-light text-center opacity-70">
          Humans of New York
        </h2>
      </div>

    </section>
  );
}