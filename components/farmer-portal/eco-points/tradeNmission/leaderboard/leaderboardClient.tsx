"use client";
import React, { useState } from "react";
import { Rank, RankCategory } from "./rankTypes";
import RankFilter from "./rankFilter";
import TopThree from "./topThree";
import LeaderboardList from "./leaderboardList";
interface LeaderboardClientProps {
  initialData: Rank[];
}
const LeaderboardClient = ({ initialData }: LeaderboardClientProps) => {
  const [rank, setRank] = useState<RankCategory>("pemula");

  const filteredData = initialData.filter((item) => item.level === rank);
  return (
    <div className="space-y-6 flex flex-col gap-6">
      <div className="px-4">
        <RankFilter rank={rank} onChange={setRank} />
      </div>
      <TopThree data={initialData} />
      <LeaderboardList data={filteredData} />
    </div>
  );
};

export default LeaderboardClient;
