import React from "react";
import FarmerNav from "@/components/farmerNav";
import { Search, BadgeQuestionMark, Clock, Badge, Bell } from "lucide-react";
export default function FarmerPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#EAECEF] overflow-hidden">
      <FarmerNav />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex w-full items-center justify-between px-8 py-6 bg-transparent">
          <h1 className="text-3xl font-bold">Farmer Portal</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 p-2 bg-[#f8f9fa] rounded-xl shadow-sm">
              <Clock className="w-4 h-4" />
              <span>09.00 AM</span>
            </div>
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
        <main className="flex-1 overflow-y-auto px-8 pb-8">{children}</main>
      </div>
    </div>
  );
}
