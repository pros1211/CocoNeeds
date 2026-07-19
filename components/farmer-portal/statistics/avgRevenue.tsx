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
    <Card className="flex flex-col p-3 gap-4 bg-white rounded-2xl shadow-md h-full w-full justify-between flex-1">
      <CardHeader className="flex flex-row items-center gap-3 p-0 space-y-0">
        <Coins className="w-6 h-6 text-[#F59E0B]" />
        <CardTitle className="font-semibold text-md leading-tight tracking-wider text-gray-900">
          Pendapatan / Kelapa
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex flex-col gap-2 items-start min-w-0">
            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
              Rp 1.500
            </span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-white bg-[#F59E0B] px-2 py-1 rounded-md whitespace-nowrap">
              <ArrowUpRight className="w-3 h-3" />
              Naik Rp 100
            </span>
          </div>

          <div className="h-14 w-24 shrink-0">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <AreaChart data={recentData}>
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#F59E0B"
                  fill="#F59E0B"
                  strokeWidth={2}
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvgRevenue;
