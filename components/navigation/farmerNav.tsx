"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  House,
  ChartNoAxesCombined,
  Truck,
  Recycle,
  TreePalm,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  LogOut,
} from "lucide-react";
import { VscSparkleCompact } from "react-icons/vsc";
import MobileNav from "./mobileNav";

const navigation = [
  { name: "Beranda", href: "/farmer-portal/", icon: House },
  { name: "Lahan", href: "/farmer-portal/lahan", icon: TreePalm },
  {
    name: "CocoAI",
    href: "/farmer-portal/AI-insight",
    icon: VscSparkleCompact,
  },
  {
    name: "Statistik",
    href: "/farmer-portal/statistics",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Pengiriman",
    href: "/farmer-portal/pengiriman",
    icon: Truck,
  },
  {
    name: "EcoPoint",
    href: "/farmer-portal/eco-points",
    icon: Recycle,
  },
];

const FarmerNav = () => {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <nav
        className={`
        hidden md:flex
        flex-col
        h-screen
        bg-[#F8F9FA]
        border-r
        border-gray-200
        transition-all
        duration-300
        ease-in-out
        shrink-0
        ${expanded ? "w-72 px-4" : "w-24 px-3"}
      `}
      >
        {/* Header */}

        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Image
              src="/cocoLogo.jpg"
              width={80}
              height={80}
              alt="logo"
              className="rounded-full shrink-0"
            />

            {expanded && (
              <div>
                <h2 className="font-bold text-lg">CocoNeeds</h2>

                <p className="text-xs text-gray-500">Farmer Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}

        <div className="flex flex-col gap-5">
          {navigation.map((nav) => {
            const Icon = nav.icon;
            const isActive =
              pathname === nav.href || pathname.startsWith(nav.href + "/");

            return (
              <Link
                key={nav.name}
                href={nav.href}
                className={`
                group
                relative
                flex
                items-center
                rounded-2xl
                transition-all
                duration-300
                overflow-hidden

                ${
                  expanded
                    ? "h-14 px-4 gap-4"
                    : "w-14 h-14 justify-center mx-auto"
                }

                ${
                  isActive
                    ? "text-white shadow-md"
                    : "text-gray-500 hover:text-white"
                }
              `}
              >
                <div
                  className={`
                  absolute
                  inset-0
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#88754E]
                  via-[#BFA87E]
                  to-[#DCC497]
                  transition-opacity
                  duration-300
                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }
                `}
                />

                <Icon className="relative z-10 w-6 h-6 shrink-0" />

                {expanded && (
                  <span className="relative z-10 font-semibold whitespace-nowrap">
                    {nav.name}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex-1" />

        <div className="mt-auto space-y-3 pb-6">
          <Link
            href="/"
            className={`
            flex items-center
            rounded-2xl
            hover:bg-gray-100
            transition

            ${
              expanded
                ? "w-full px-4 py-3 gap-3"
                : "w-14 h-14 justify-center mx-auto"
            }
        `}
          >
            <Settings className="w-5 h-5" />

            {expanded && <span className="font-medium">Pengaturan</span>}
          </Link>
          <button
            className={`
            flex items-center
            rounded-2xl
            hover:bg-gray-100
            transition

            ${
              expanded
                ? "w-full px-4 py-3 gap-3"
                : "w-14 h-14 justify-center mx-auto"
            }
        `}
          >
            <LogOut className="w-5 h-5 -rotate-180" />

            {expanded && <span className="font-medium">Kembali</span>}
          </button>

          <button
            onClick={() => setExpanded(!expanded)}
            className={`
            flex items-center
            rounded-2xl
            hover:bg-gray-100
            transition

            ${
              expanded
                ? "w-full px-4 py-3 gap-3"
                : "w-14 h-14 justify-center mx-auto"
            }
        `}
          >
            {expanded ? (
              <PanelLeftClose className="w-5 h-5" />
            ) : (
              <PanelLeftOpen className="w-5 h-5" />
            )}

            {expanded && <span className="font-medium">minimize</span>}
          </button>
        </div>
      </nav>

      <MobileNav />
    </>
  );
};

export default FarmerNav;
