import React from "react";
import FarmerNav from "@/components/farmerNav";
import Weather from "@/components/weather";
import Greeting from "@/components/greeting";
import LocalDate from "@/components/localDate";
import FarmerStat from "@/components/farmerStat";
import StackedChart from "@/components/stackedChart";
const FarmerPortal = () => {
  return (
    <main className="w-full h-full px-8 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-12 flex items-center justify-between mb-2">
        <Greeting />
        <LocalDate />
      </div>
      <div className="lg:col-span-12">
        <FarmerStat />
      </div>
      <div className="lg:col-span-4 flex flex-col h-full">
        <Weather />
      </div>
      <div className="lg:col-span-8 flex flex-col h-full">
        <StackedChart />
      </div>
    </main>
  );
};

export default FarmerPortal;
