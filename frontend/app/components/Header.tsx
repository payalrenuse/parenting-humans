"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Stories", href: "/stories" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="flex items-center justify-between px-10 py-4 text-white">

        {/* Logo */}
        <div className="text-lg font-semibold leading-tight">
          <p>Parenting</p>
          <p>Humans</p>
        </div>

        {/* Nav */}
        <nav className="flex gap-8 text-sm items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} className="relative group">
                {item.name}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
                )}

                {/* Hover underline */}
                {!isActive && (
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 items-center">
  <img src="/icons/facebook.svg" className="w-4 h-4 cursor-pointer" />
  <img src="/icons/linkedin.svg" className="w-4 h-4 cursor-pointer" />
  <img src="/icons/youtube.svg" className="w-4 h-4 cursor-pointer" />
  <img src="/icons/instagram.svg" className="w-4 h-4 cursor-pointer" />
  <img src="/icons/twitter.svg" className="w-4 h-4 cursor-pointer" />
</div>
      </div>
    </header>
  );
}