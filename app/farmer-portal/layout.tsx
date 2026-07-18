import React from "react";
import FarmerNav from "@/components/farmerNav";
import Time from "@/components/time";
import { Search, BadgeQuestionMark, Clock, Badge, Bell } from "lucide-react";
export default function FarmerPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <FarmerNav />
      <div className="flex-1 flex flex-col gap-6 overflow-hidden">
        <header className="flex w-full items-center justify-between px-8 py-4 bg-white/80 border-b border-black-300">
          <h1 className="text-3xl font-bold text-[#609D7F]">Farmer Portal</h1>
          <div className="flex items-center gap-4">
            <Time />
            <div className="flex items-center gap-3 p-2 bg-[#f8f9fa] rounded-xl shadow-sm ">
              <Badge className="w-4 h-4" />
              <span>Level 5</span>
            </div>
            <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm bg-[#EAECEF] overflow-hidden">
              <Bell className="w-4 h-4" />
              <span>Notification</span>
              <span className="rounded-full px-2 py-1 text-white bg-[#609D7F] font-bold text-[10px]">
                9
              </span>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
