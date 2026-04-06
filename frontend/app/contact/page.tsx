export default function ContactPage() {
  return (
    <section className="bg-black text-white">

      {/* 🔥 BANNER */}
      <div className="relative w-full h-[300px] md:h-[380px]">
        <img
          src="/contact-banner.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* 🔥 CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <p className="text-white-400 mb-8">
            Have a story to share? Want to collaborate or sponsor an event?
            We'd love to hear from you.
          </p>

          <div className="space-y-6">

            <div>
              <p className="font-semibold">Email Us</p>
              <p className="text-white-400 text-sm">stories@humans.com</p>
            </div>

            <div>
              <p className="font-semibold">Visit Us</p>
              <p className="text-white-400 text-sm">
                123 Madison Avenue, Suite 450<br />
                New York, NY 10016
              </p>
            </div>

            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-white-400 text-sm">
                +1-0123456789<br />
                Mon-Fri: 10am - 5pm IST
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#111] p-8 rounded-2xl">

          <h3 className="text-lg font-semibold mb-6">Send a Message</h3>

          <form className="space-y-4">

            {/* ROW */}
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Your full name"
                className="p-3 bg-black border border-gray-700 rounded-lg"
              />
              <input
                placeholder="hello@example.com"
                className="p-3 bg-black border border-gray-700 rounded-lg"
              />
            </div>

            <input
              placeholder="Story Submission"
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
            />

            <textarea
              placeholder="Tell us what's on your mind..."
              className="w-full p-3 bg-black border border-gray-700 rounded-lg h-32"
            />

            <button className="bg-[#D4A574] text-black px-6 py-3 rounded-full">
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* 🔥 MAP */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-16">
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=New York&output=embed"
            className="w-full h-[300px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </section>
  );
}