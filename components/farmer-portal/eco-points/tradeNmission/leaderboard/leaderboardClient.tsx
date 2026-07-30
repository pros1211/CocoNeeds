"use client";
import React, { useState } from "react";
import { Rank, RankCategory } from "./rankTypes";
import RankFilter from "./rankFilter";
interface LeaderboardClientProps {
  initialData: Rank[];
}
const LeaderboardClient = ({ initialData }: LeaderboardClientProps) => {
  const [rank, setRank] = useState<RankCategory>("pemula");

  const filteredData = initialData.filter((item) => item.level === rank);
  return (
    <div className="space-y-6">
      <RankFilter rank={rank} onChange={setRank} />
    </div>
  );
};

export default LeaderboardClient;
