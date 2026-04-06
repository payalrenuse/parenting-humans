"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Submitted");
  };


  return (
    
    <section className="bg-black text-white px-10 py-20">

  {/* HEADING */}
  <div className="max-w-6xl mx-auto mb-12">
    <h1 className="text-4xl font-semibold">
      Sharing Human Stories That Connect Hearts and Shape Perspectives
    </h1>

    <p className="text-gray-400 mt-4 max-w-2xl">
      Real voices. Real moments. Stories that bring people closer,
      spark empathy, and leave a lasting impact.
    </p>
  </div>

  {/* CARD CONTAINER */}
  <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 bg-[#1a120b] p-10 rounded-2xl">
    
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-semibold text-[#D4A574]">
            Share Your Story!
          </h2>

          <p className="text-gray-400 mt-2">
            Your experience is unique and we’re eager to listen!
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <input
              placeholder="Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              placeholder="Your Journey..."
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg h-32"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <div className="flex items-start gap-2 text-sm text-gray-400">
  <input type="checkbox" className="mt-1" />
  <p>
    I consent to being contacted and my story being shortlisted.
  </p>
</div>
            <button className="bg-[#D4A574] text-black px-6 py-3 rounded-full hover:scale-105 transition">
              Submit
            </button>

          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full flex items-center">
  <div className="relative w-full h-full max-h-[595px] rounded-xl overflow-hidden">

  <img
    src="/contact.png"
    className="w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40" />

  {/* TEXT OVER IMAGE */}
  <div className="absolute bottom-0 p-6 w-full text-white">
    <p className="text-sm text-gray-300">Top stories:</p>
    <p className="text-sm mb-4">
      The ones we tell, the ones we become.
    </p>

    <hr className="border-gray-500 mb-3" />

    <h3 className="font-semibold">Rahul Kapur</h3>
    <p className="text-sm text-gray-400">
      Founder & CEO, Humans of New York
    </p>
  </div>

</div>

      </div>
      </div>
    </section>
  );
}