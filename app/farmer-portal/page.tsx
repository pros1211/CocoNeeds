import React from "react";
import Weather from "@/components/farmer-portal/homeDash/weather";
import CopraForecast from "@/components/farmer-portal/homeDash/copraForecast";
import Greeting from "@/components/farmer-portal/greeting";
import LocalDate from "@/components/localDate";
import FarmerStat from "@/components/farmer-portal/homeDash/farmerStat";
import StackedChart from "@/components/farmer-portal/homeDash/stackedChart";
import Insight from "@/components/farmer-portal/homeDash/insight";
import Task from "@/components/farmer-portal/homeDash/task";
import DailyReport from "@/components/farmer-portal/homeDash/dailyReport";
const FarmerPortal = () => {
  return (
    <main className="w-full h-full px-8 pb-8 grid grid-cols-1 xl:grid-cols-6 gap-6 max-w-screen-2xl mx-auto p-6">
      {/* header content */}
      <div className="xl:col-span-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <Greeting />
            <LocalDate />
          </div>
          <DailyReport />
        </div>
        <FarmerStat />
      </div>
      <div className="xl:col-span-4 flex flex-col gap-6">
        <div className="xl:col-span-2 flex gap-4">
          <StackedChart />
        </div>
        <div className="flex gap-6">
          <Weather />
          <CopraForecast />
        </div>
      </div>
      <div className="xl:col-span-2 flex flex-col gap-4 min-h-0">
        <div className="shrink-0">
          <Insight />
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto rounded-2xl scrollbar-hide pb-2">
          <Task />
        </div>
      </div>
    </main>
  );
};

export default FarmerPortal;
