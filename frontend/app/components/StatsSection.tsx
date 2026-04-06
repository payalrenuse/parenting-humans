"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Stories Shared" },
  { value: 60, suffix: "K+", label: "Lives Touched" },
  { value: 4, suffix: "+", label: "Events Hosted" },
  { value: 12, suffix: "+", label: "Cities Reached" },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // 👇 Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 👇 Start counting ONLY when visible
  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const steps = 50;
    const intervalTime = duration / steps;

    const intervals = stats.map((item, index) => {
      const increment = item.value / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];

          if (newCounts[index] < item.value) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              item.value
            );
          }

          return newCounts;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [start]);

  return (
    <section ref={ref} className="bg-black text-white px-10 py-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center">
            
            {/* TEXT */}
            <div className="text-center px-10">
              <h2 className="text-[48px] font-medium text-[#D4A574]">
               {Math.floor(counts[index])}
                {item.suffix}
              </h2>

              <p className="text-[20px] text-gray-400 mt-2">
                {item.label}
              </p>
            </div>

            {/* DIVIDER */}
            {index !== stats.length - 1 && (
              <div className="h-16 w-px bg-gray-700"></div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}