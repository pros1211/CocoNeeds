import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  ChartNoAxesCombined,
  Truck,
  Recycle,
  TreePalm,
  Scan,
} from "lucide-react";
import { VscSparkleCompact } from "react-icons/vsc";
const leftNav = [
  { name: "Beranda", href: "/farmer-portal", icon: House },
  { name: "Lahan", href: "/farmer-portal/lahan", icon: TreePalm },
];

const rightNav = [
  {
    name: "Statistik",
    href: "/farmer-portal/statistics",
    icon: ChartNoAxesCombined,
  },
  { name: "EcoPoint", href: "/farmer-portal/eco-points", icon: Recycle },
];

const centerAction = {
  name: "Kirim",
  href: "/farmer-portal/pengiriman",
  icon: Truck,
};
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 pb-4 pt-3 px-6">
      <div className="flex justify-between items-end relative w-full">
        {/* LEFT ITEMS */}
        <div className="flex gap-6">
          {leftNav.map((nav) => {
            const isActive = pathname === nav.href;
            const Icon = nav.icon;
            return (
              <Link
                key={nav.name}
                href={nav.href}
                className="flex flex-col items-center gap-1 min-w-[50px]"
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${isActive ? "text-[#269957]" : "text-gray-400"}`}
                />
                <span
                  className={`text-[10px] font-semibold transition-colors ${isActive ? "text-[#269957]" : "text-gray-400"}`}
                >
                  {nav.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 🔥 CENTER FLOATING BUTTON (GoPay QRIS Style) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex flex-col items-center">
          <Link href={centerAction.href}>
            <div
              className={`w-16 h-16 rounded-[22px] flex items-center justify-center border-[5px] border-[#F3F4F6] shadow-lg transition-transform active:scale-95
                  ${pathname === centerAction.href ? "bg-[#1A6B3B]" : "bg-[#269957]"}`}
            >
              <centerAction.icon className="w-7 h-7 text-white" />
            </div>
          </Link>
          <span
            className={`text-[10px] font-bold mt-1 ${pathname === centerAction.href ? "text-[#1A6B3B]" : "text-[#269957]"}`}
          >
            {centerAction.name}
          </span>
        </div>

        {/* RIGHT ITEMS */}
        <div className="flex gap-6">
          {rightNav.map((nav) => {
            const isActive = pathname === nav.href;
            const Icon = nav.icon;
            return (
              <Link
                key={nav.name}
                href={nav.href}
                className="flex flex-col items-center gap-1 min-w-[50px]"
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${isActive ? "text-[#269957]" : "text-gray-400"}`}
                />
                <span
                  className={`text-[10px] font-semibold transition-colors ${isActive ? "text-[#269957]" : "text-gray-400"}`}
                >
                  {nav.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
