"use client";
import React from "react";
import "../app/globals.css";
import { CircleUserRound, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
      <div className="flex items-center p-4 justify-between">
        <span className="text-logo font-bold text-2xl">CocoNeeds</span>
        <div className="flex items-center gap-8 text-sm font-semibold tracking-wider">
          {navLink.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative capitalize py-2 text-md font-semibold transition-colors after:w-full after:bottom-1 after:left-0 after:h-[2px] 
                    after:content-[''] after:absolute after:bg-[#2d6a4f] after:transition-transform after:duration-300 after:ease-in-out 
                    ${
                      isActive
                        ? "text-[#2d6a4f] after:scale-x-100"
                        : "text-[#171717] hover:text-[#2d6a4f] after:scale-x-0 hover:after:scale-x-100"
                    }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <Bell />
          <CircleUserRound />
          <Link
            href="/farmer-portal"
            className="p-3 font-regular bg-[#006C48] rounded-lg text-white"
          >
            Farmer Portal
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
