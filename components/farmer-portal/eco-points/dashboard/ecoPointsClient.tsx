import React from "react";
import { Sprout } from "lucide-react";
import EcoStat from "./ecoStat";
import EcoMission from "./ecoMission";
import ExchangeWidget from "./exchangeWidget";
import ActiveMission from "./activeMission";
import { FaExchangeAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const EcoPointsClient = () => {
  return (
    <div className="grid grid-cols-6 gap-6 px-5 py-1">
      <div className="col-span-6 gap-3 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col">
          <Image
            src="/ecoPointLogo.png"
            width={200}
            height={60}
            alt="logo ecopoint"
            className="-translate-x-8"
          />
          <span className="text-sm font-medium">
            Kumpulkan poin dari setiap penukaran limbah kelapamu untuk alam dan
            dapatkan berbagai hadiah menarik!
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/farmer-portal/ecoPoint/create"
            className="bg-[#269957] text-white text-sm lg:text-md rounded-lg p-2"
          >
            Tukar Limbah
          </Link>
          <Link
            href="/farmer-portal/tradeMission"
            className="bg-[#269957] text-white text-sm lg:text-md flex items-center gap-2 rounded-lg p-2"
          >
            <FaExchangeAlt />
            Tukar EcoPoint
          </Link>
        </div>
      </div>
      <div className="col-span-6 flex flex-col gap-4 w-full">
        <EcoStat />
      </div>
      <div className="flex flex-col lg:flex-row w-full col-span-6 gap-4">
        <div className="flex-1 flex w-full min-w-0 gap-4 col-span-4">
          <EcoMission />
        </div>
        <div className="flex flex-col lg:grid lg:grid-rows-2 flex-1 gap-4 min-h-0">
          <ExchangeWidget />
          <ActiveMission />
        </div>
      </div>
    </div>
  );
};

export default EcoPointsClient;
