import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Users, CalendarDays } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import LeaderboardClient from "./leaderboardClient";
import { Rank } from "./rankTypes";
const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<Rank[]>([]);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("leaderboard")
        .select("*")
        .order("ecoPoint", { ascending: false });

      setLeaderboard(data ?? []);
    }

    load();
  }, []);
  return (
    <div className="flex flex-col gap-4 bg-white w-full rounded-lg">
      <div className="flex flex-col gap-2 py-2 lg:gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-gray-300">
        <Image
          src="/ecopointLeaderboard.png"
          width={280}
          height={150}
          alt="ecopoint leaderboard logo"
          className="w-44 lg:w-72 h-auto"
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-2 lg:p-3 rounded-lg bg-white shadow-sm">
            <Users className="w-10 h-10 bg-[#EEF8F2] p-2 rounded-md text-[#269957]" />
            <div className="flex flex-col gap-1 whitespace-nowrap">
              <span className="font-semibold text-xs lg:text-md">
                Total Petani
              </span>
              <span className="text-[#269957] font-semibold text-md lg:text-lg">
                1.000
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 lg:p-3  rounded-lg bg-white shadow-sm">
            <CalendarDays className="w-10 h-10 bg-[#EEF8F2] p-2 rounded-md text-[#269957]" />
            <div className="flex flex-col gap-1">
              <span className="font-semibold  text-sm lg:text-md">Musim </span>
              <span className="text-[#269957] font-semibold whitespace-nowrap text-md lg:text-lg">
                Agustus 2026
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <LeaderboardClient initialData={leaderboard} />
      </div>
    </div>
  );
};

export default LeaderboardPage;
