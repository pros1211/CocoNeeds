"use client";
import React from "react";
import { Coins, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart } from "recharts";
import { ChartContainer, type ChartConfig } from "../../ui/chart";
const revenueData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1250 },
  { month: "Mar", revenue: 1100 },
  { month: "Apr", revenue: 1300 },
  { month: "May", revenue: 1450 },
  { month: "Jun", revenue: 1400 },
  { month: "Jul", revenue: 1500 },
];
const chartConfig = {
  cost: {
    label: "pendapatan",
    color: "#F59E0B",
  },
} satisfies ChartConfig;

const AvgRevenue = () => {
  const recentData = revenueData.slice(-4);

  return (
    <Card className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm h-[220px]">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
            <Coins className="w-5 h-5 text-[#F59E0B]" />
          </div>

          <CardTitle className="text-base font-medium">
            Pendapatan per Kelapa
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2 items-start min-w-0">
          <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
            Rp 1.500
          </span>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1 rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-sm font-semibold">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-xs">Naik Rp 100</span>
            </div>
          </div>
        </div>
      </CardContent>
      <div className="h-16 w-full shrink-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            data={recentData}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Area
              type="natural"
              dataKey="revenue"
              stroke="#F59E0B"
              fill="#F59E0B"
              strokeWidth={2}
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default AvgRevenue;
