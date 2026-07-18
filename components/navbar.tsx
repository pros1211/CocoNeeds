"use client";
import React from "react";
import "../app/globals.css";
import { CircleUserRound, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const navLink = [
  { name: "home", href: "/" },
  { name: "recycle", href: "/recycle" },
  { name: "marketplace", href: "/marketplace" },
  { name: "logistics", href: "/logistics" },
];
const Navbar = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/farmer-portal")) {
    return null;
  }
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <div className="relative w-full h-full flex justify-between items-start">
          {/* left section navbar */}
          <div className="relative bg-[#f8f9fa] pl-6 pr-8 pb-5 pt-6 rounded-br-[2rem] flex items-center pointer-events-auto">
            <div className="flex items-center">
              <Image
                src="/cocoLogo.jpg"
                width={40}
                height={30}
                alt="logo CocoNeeds"
              />
              <span className="text-xl font-semibold text-[#216533]">
                Coco<span className="text-[#793C14]">Needs</span>
              </span>
            </div>
            <div className="absolute top-0 left-full w-6 h-6 rounded-tl-2xl shadow-[-10px_-10px_0_0_#f8f9fa]"></div>
          </div>
          {/* center navigation section */}
          <div className="absolute px-6 top-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6  pointer-events-auto  font-semibold tracking-wider">
            {navLink.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`capitalize px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-[#f8f9fa] text-[#2d6a4f] shadow-sm"
                      : "bg-[#75DAA8]/30 text-white hover:bg-[#609D7F]/20 backdrop-blur-sm"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          {/* right section */}
          <div className="relative bg-[#f8f9fa] pr-10 pl-8 pb-5 pt-6 rounded-bl-[2rem] flex items-center gap-6 pointer-events-auto">
            <div className="absolute top-0 right-full w-6 h-6 rounded-tr-2xl shadow-[10px_-10px_0_0_#f8f9fa]"></div>
            <CircleUserRound className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition-colors" />
            <Link
              href="/farmer-portal"
              className="px-4 py-2 font-regular bg-[#006C48] rounded-lg text-white"
            >
              Farmer Portal
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
