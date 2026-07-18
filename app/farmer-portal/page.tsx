import React from "react";
import FarmerNav from "@/components/farmerNav";
import Weather from "@/components/weather";
import CopraForecast from "@/components/copraForecast";
import Greeting from "@/components/greeting";
import LocalDate from "@/components/localDate";
import FarmerStat from "@/components/farmerStat";
import StackedChart from "@/components/stackedChart";
import MarketTrend from "@/components/marketTrend";
import Task from "@/components/task";
const FarmerPortal = () => {
  return (
    <main className="w-full h-full px-8 pb-8 grid grid-cols-1 xl:grid-cols-6 gap-6 max-w-screen-2xl mx-auto p-6">
      {/* header content */}
      <div className="xl:col-span-6 flex justify-between items-center">
        <div>
          <Greeting />
          <LocalDate />
        </div>
        <button className="p-4 bg-[#269957] rounded-xl text-white font-semibold ">
          Daily Report
        </button>
      </div>
      <div className="xl:col-span-4 flex flex-col gap-6">
        <FarmerStat />
        <div className="flex gap-4">
          <StackedChart />
          <MarketTrend />
        </div>
        <div className="flex gap-6">
          <Weather />
          <CopraForecast />
        </div>
      </div>
      <div className="xl:col-span-2">
        <Task />
      </div>
    </main>
  );
};

export default FarmerPortal;
