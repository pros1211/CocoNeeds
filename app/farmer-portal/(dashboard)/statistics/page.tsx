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
import FinancialInsight from "@/components/farmer-portal/statistics/financialInsight";
const Statistics = () => {
  return (
    <div className="flex flex-col p-5 gap-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold tracking-wider">Keuangan</h3>
          <p className="text-xs lg:text-regular font-medium tracking-widers">
            Catat Keuanganmu, jangan sampai terlewat!
          </p>
        </div>
        <div className="p-2 flex gap-2 items-center">
          <FormKeuangan />
          <DatePicker />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <Income />
          <Outcome />
          <NetProfit />
          <Cpm />
          <AvgRevenue />
        </div>
        {/* LEFT */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SalesRecent />

            <SpendingBreak />
          </div>

          <MarketCommodity />
        </div>

        {/* RIGHT */}

        <div className="col-span-12 lg:col-span-4 flex-1 min-h-0">
          <FinancialInsight />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
