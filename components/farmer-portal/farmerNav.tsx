"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  ChartNoAxesCombined,
  Truck,
  Recycle,
  icons,
} from "lucide-react";
import { TreePalm } from "lucide-react";
import { VscSparkleCompact } from "react-icons/vsc";
import Image from "next/image";
const navigation = [
  { name: "home", href: "/farmer-portal", icon: House },
  { name: "Lahan", href: "/farmer-portal/lahan", icon: TreePalm },
  {
    name: "assistant",
    href: "/farmer-portal/AI-insight",
    icon: VscSparkleCompact,
  },
  {
    name: "stat",
    href: "/farmer-portal/statistics",
    icon: ChartNoAxesCombined,
  },
  { name: "logistics", href: "/logis", icon: Truck },
  { name: "recycle", href: "/farmer-portal/eco-points", icon: Recycle },
];
const FarmerNav = () => {
  const pathname = usePathname();
  return (
    <nav className="w-24 min-h-screen bg-[#F8F9FA] border-r border-gray-200 flex flex-col items-center py-2 px-3 gap-4 shrink-0">
      <Image
        src="/cocoLogo.jpg"
        width={70}
        height={70}
        alt="coconeeds Logo"
        className="rounded-full"
      />
      {navigation.map((nav) => {
        const isActive = pathname === nav.href;
        const Icon = nav.icon;
        return (
          <Link
            key={nav.name}
            href={nav.href}
            className={`relative group overflow-hidden transition-all duration-300 shadow-sm w-13 h-13 flex items-center justify-center rounded-2xl p-4 rounded-lg shadow-sm 
                  ${isActive ? "text-white shadow-md scale-105" : "bg-white hover:text-white text-gray-500"}`}
          >
            <div
              className={`" absolute inset-0 bg-gradient-to-br from-[#88754E] via-[#BFA87E]/80 to-[#DCC497]/60 shadow-md" : "bg-white hover:bg-[#BFA87E]/40 transition-opacity duration-300 -z-10"
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            ></div>
            <Icon className="w-6 h-6 z-10" />
          </Link>
        );
      })}
    </nav>
  );
};

export default FarmerNav;
