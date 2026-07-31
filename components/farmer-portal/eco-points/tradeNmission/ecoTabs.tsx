"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, Gift, Trophy } from "lucide-react";
import DailyMission from "./mission/dailyMission";
import MonthlyMission from "./mission/monthlyMission";
import Reward from "./reward/reward";
import LeaderboardPage from "./leaderboard/leaderboardPage";
const EcoTabs = () => {
  return (
    <Tabs defaultValue="mission" className="p-5 gap-2">
      <TabsList className="w-full h-16 grid grid-cols-3 rounded-2xl p-0 bg-white shadow-sm">
        <TabsTrigger
          value="mission"
          className="flex items-center gap-2 w-full h-full rounded-2xl font-semibold text-base !data-[state=active]:bg-[#269957] !data-[state=active]:text-white !data-[state=active]:shadow-md"
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-xs lg:text-lg">Mission</span>
        </TabsTrigger>
        <TabsTrigger
          value="reward"
          className="flex items-center gap-2 w-full h-full rounded-2xl font-semibold text-base data-[state=active]:bg-[#269957] data-[state=active]:text-white data-[state=active]:shadow-md"
        >
          <Gift className="w-5 h-5" />
          <span className="text-xs lg:text-lg">Reward</span>
        </TabsTrigger>
        <TabsTrigger
          value="leaderboard"
          className="flex items-center gap-2 w-full h-full rounded-2xl font-semibold text-base data-[state=active]:bg-[#269957] data-[state=active]:text-white data-[state=active]:shadow-md"
        >
          <Trophy className="w-5 h-5" />
          <span className="text-xs lg:text-lg">Leaderboard</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="mission">
        <div className="flex flex-col gap-6">
          <DailyMission />
          <MonthlyMission />
        </div>
      </TabsContent>
      <TabsContent value="reward">
        <Reward />
      </TabsContent>
      <TabsContent value="leaderboard">
        <LeaderboardPage />
      </TabsContent>
    </Tabs>
  );
};

export default EcoTabs;
