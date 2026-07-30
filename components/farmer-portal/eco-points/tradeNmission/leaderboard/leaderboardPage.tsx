import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Users, CalendarDays } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { RankCategory } from "./rankTypes";
import { getLeaderboard } from "@/app/action";
import LeaderboardClient from "./leaderboardClient";
import { Rank } from "./rankTypes";
import RankFilter from "./rankFilter";
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
    <div className="flex flex-col gap-4 bg-white w-full rounded-lg p-2">
      <div className="flex items-center justify-between border-b border-gray-300">
        <Image
          src="/ecopointLeaderboard.png"
          width={280}
          height={150}
          alt="ecopoint leaderboard logo"
          className="rounded-full"
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm">
            <Users className="w-10 h-10 bg-[#EEF8F2] p-2 rounded-md text-[#269957]" />
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-md">Total Petani</span>
              <span className="text-[#269957] font-semibold text-lg">
                1.000
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm">
            <CalendarDays className="w-10 h-10 bg-[#EEF8F2] p-2 rounded-md text-[#269957]" />
            <div className="flex flex-col gap-1">
              <span className="font-semibold     text-md">Musim </span>
              <span className="text-[#269957] font-semibold text-lg">
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
