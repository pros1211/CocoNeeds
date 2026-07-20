"use client";
import React, { useState } from "react";
import "../../app/globals.css";
import { CircleUserRound, Bell, Menu, X } from "lucide-react";
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
  const [SidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/farmer-portal")) {
    return null;
  }
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <div className="relative w-full h-full flex justify-between items-center xl:items-start p-3 xl:p-0 bg-white xl:bg-transparent">
          {/* left section navbar */}
          <div className="relative bg-white xl:bg-[#f8f9fa] xl:pl-6 xl:pr-8 xl:pb-3 xl:pt-4 rounded-br-[2rem] flex items-center pointer-events-auto">
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
            <div className="hidden xl:block absolute top-0 left-full w-6 h-6 rounded-tl-2xl shadow-[-10px_-10px_0_0_#f8f9fa] "></div>
          </div>
          {/* center navigation section */}
          <div className="absolute px-6 top-6 left-1/2 -translate-x-1/2 hidden xl:flex items-center gap-6  pointer-events-auto  font-semibold tracking-wider">
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
          <div className="relative bg-white xl:bg-[#f8f9fa] xl:pr-3 xl:pl-8 xl:pb-5 xl:pt-6 rounded-bl-[2rem] flex items-center gap-2 pointer-events-auto">
            <div className="hidden xl:block absolute top-0 right-full w-6 h-6 rounded-tr-2xl shadow-[10px_-10px_0_0_#f8f9fa]"></div>
            <CircleUserRound className="hidden xl:block w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition-colors" />
            <Link
              href="/farmer-portal"
              className="px-4 py-2 font-regular text-xs xl:text-lg bg-[#006C48] rounded-lg text-white"
            >
              Farmer Portal
            </Link>
            <button
              className="xl:hidden block text-gray-800 p-1"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          SidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            SidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-3 border-b border-[#609D7F]">
            <div className="flex items-center gap-1">
              <Image
                src="/cocoLogo.jpg"
                width={36}
                height={36}
                alt="logo CocoNeeds"
              />
              <span className="text-lg font-semibold text-[#216533]">
                Coco<span className="text-[#793C14]">Needs</span>
              </span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2  rounded-full text-white bg-[#609D7F] transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col p-4 gap-2 mt-4">
            {navLink.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
                  className={`capitalize px-4 py-3 rounded-xl font-semibold transition-colors ${
                    isActive
                      ? "bg-[#006C48]/10 text-[#006C48]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
