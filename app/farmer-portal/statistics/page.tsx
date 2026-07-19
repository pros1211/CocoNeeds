import React from "react";
import NetProfit from "@/components/farmer-portal/statistics/netProfit";
import DatePicker from "@/components/farmer-portal/statistics/datePicker";
import Income from "@/components/farmer-portal/statistics/income";
import Outcome from "@/components/farmer-portal/statistics/outcome";
import Cpm from "@/components/farmer-portal/statistics/cpm";
import AvgRevenue from "@/components/farmer-portal/statistics/avgRevenue";
import SpendingBreak from "@/components/farmer-portal/statistics/spendingBreak";
import SalesRecent from "@/components/farmer-portal/statistics/salesRecent";
import MarketCommodity from "@/components/farmer-portal/statistics/marketCommodity";
import FormKeuangan from "@/components/farmer-portal/statistics/formKeuangan";
import { PlusCircle } from "lucide-react";
const Statistics = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-6 p-5 gap-4">
      <div className="xl:col-span-6 p-3 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold tracking-wider">Keuangan</h3>
          <p className="text-regular font-medium tracking-widers">
            Catat Keuanganmu, jangan sampai terlewat!
          </p>
        </div>
        <div className="p-3 flex gap-2 items-center">
          <DatePicker />
          <FormKeuangan />
        </div>
      </div>
      <div className="xl:col-span-4 flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <div className="flex-1 w-full">
            <Income />
          </div>
          <div className="flex-1 w-full">
            <Outcome />
          </div>
        </div>
        <div className="flex gap-4 items-center gap-4 w-full">
          <div className="flex-1 w-full">
            <NetProfit />
          </div>
          <div className="flex-1 w-full">
            <Cpm />
          </div>
          <div className="flex-1 w-full">
            <AvgRevenue />
          </div>
        </div>
      </div>
      <div className="xl:col-span-2 w-full h-full">
        <SalesRecent />
      </div>
      <div className="xl:col-span-4 w-full h-full mt-2">
        <SpendingBreak />
      </div>

      <div className="xl:col-span-2 w-full h-full mt-2">
        <MarketCommodity />
      </div>
    </div>
  );
};

export default Statistics;
