export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-10 py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + SOCIAL */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            HUMANS OF<br />NEWYORK
          </h2>

          <div className="flex gap-4 mt-4">

  <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white transition">
    <img src="/icons/facebook.svg" className="w-4 h-4 filter invert brightness-0" />
  </a>

  <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white transition">
    <img src="/icons/instagram.svg" className="w-4 h-4 filter invert brightness-0" />
  </a>

  <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white transition">
    <img src="/icons/twitter.svg" className="w-4 h-4 filter invert brightness-0"/>
  </a>

  <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white transition">
    <img src="/icons/linkedin.svg" className="w-4 h-4 filter invert brightness-0" />
  </a>

</div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p className="text-sm leading-relaxed">
            123 Madison Avenue, Suite 450 <br />
            New York, NY 10016 <br />
            United States
          </p>

          <p className="mt-4 text-sm">+1-0123456789</p>
          <p className="text-sm underline mt-1">
            sales@humansofnewyork.com
          </p>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">Support Center</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Stay Connected
          </h3>

          <p className="text-sm mb-4">
            Subscribe to our newsletter for weekly stories and event updates.
          </p>

          <input
            placeholder="Email address"
            className="w-full p-3 rounded-full bg-[#1a1a1a] border border-gray-700 mb-3 text-sm outline-none"
          />

          <button className="w-full bg-[#D4A574] text-black py-3 rounded-full hover:opacity-90 transition">
            Subscribe
          </button>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between text-sm text-white-500 gap-4">

        <p>
          Copyright © Humans of New York 2026. All Rights Reserved
        </p>

        <p>
          Crafted & Cared by Awranqe
        </p>

      </div>

    </footer>
  );
}