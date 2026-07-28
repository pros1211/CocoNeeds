"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, Gift, History } from "lucide-react";
const EcoTabs = () => {
  return (
    <Tabs defaultValue="mission" className="p-5">
      <TabsList className="w-full h-16 grid grid-cols-3 rounded-2xl p-0 bg-white shadow-sm">
        <TabsTrigger
          value="mission"
          className="flex items-center gap-2 w-full h-full rounded-2xl font-semibold text-base !data-[state=active]:bg-[#269957] !data-[state=active]:text-white !data-[state=active]:shadow-md"
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Mission</span>
        </TabsTrigger>
        <TabsTrigger
          value="reward"
          className="flex items-center gap-2 w-full h-full rounded-2xl font-semibold text-base data-[state=active]:bg-[#269957] data-[state=active]:text-white data-[state=active]:shadow-md"
        >
          <Gift className="w-5 h-5" />
          <span>Reward</span>
        </TabsTrigger>
        <TabsTrigger
          value="history"
          className="flex items-center gap-2 w-full h-full rounded-2xl font-semibold text-base data-[state=active]:bg-[#269957] data-[state=active]:text-white data-[state=active]:shadow-md"
        >
          <History className="w-5 h-5" />
          <span>History</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent></TabsContent>
    </Tabs>
  );
};

export default EcoTabs;
