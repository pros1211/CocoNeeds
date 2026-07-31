import React from "react";
import { Rank } from "./rankTypes";
import { ScrollArea } from "@/components/ui/scroll-area";
import LeaderboardCard from "./LeaderboardCard";
interface leaderboardProps {
  data: Rank[];
}
const LeaderboardList = ({ data }: leaderboardProps) => {
  return (
    <ScrollArea className="rounded-2xl h-[650px]">
      <div className="space-y-4 p-3">
        {data.map((farmer, index) => (
          <LeaderboardCard key={farmer.id} farmer={farmer} rank={index + 4} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default LeaderboardList;
