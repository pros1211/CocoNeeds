import React from "react";
import { Sprout } from "lucide-react";
import EcoStat from "./ecoStat";
import EcoMission from "./ecoMission";
import ExchangeWidget from "./exchangeWidget";
import ActiveMission from "./activeMission";
const EcoPointsClient = () => {
  return (
    <div className="grid grid-cols-6 gap-6 p-5">
      <div className="col-span-6 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Sprout className="w-6 h-6 text-[#59BE8E]" />
            <h1 className="font-semibold text-2xl text-[#59BE8E]">EcoPoint</h1>
          </div>
          <span className="text-sm font-medium">
            Kumpulkan poin dari setiap penukaran limbah kelapamu untuk alam dan
            dapatkan berbagai hadiah menarik!
          </span>
        </div>
        <button className="bg-[#59BE8E]"></button>
      </div>
      <div className="col-span-6 flex flex-col gap-4 w-full">
        <EcoStat />
      </div>
      <div className="flex w-full col-span-6 gap-4">
        <div className="flex-1 flex w-full min-h-0 gap-4 col-span-4">
          <EcoMission />
        </div>
        <div className="col-span-2 grid grid-rows-2 flex-1 gap-4 min-h-0">
          <ExchangeWidget />
          <ActiveMission />
        </div>
      </div>
    </div>
  );
};

export default EcoPointsClient;
