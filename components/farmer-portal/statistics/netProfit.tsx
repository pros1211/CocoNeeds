"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Line, ResponsiveContainer, LineChart } from "recharts";
import { TrendingUp } from "lucide-react";
const marginData = [
  { month: "Jan", margin: 28 },
  { month: "Feb", margin: 30 },
  { month: "Mar", margin: 35 },
  { month: "Apr", margin: 32 },
  { month: "May", margin: 38 },
  { month: "Jun", margin: 40 },
  { month: "Jul", margin: 42 },
];
const NetProfit = () => {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm h-[220px]">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#269957]" />
          </div>

          <CardTitle className="text-base font-medium">
            Margin laba bersih
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">42.0%</h2>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-medium">
              <TrendingUp className="w-4 h-4 text-green-700" />

              <span className="text-xs font-semibold text-green-700">
                +2.4%
              </span>
            </div>

            <span className="text-xs text-gray-500">dari bulan lalu</span>
          </div>
        </div>
      </CardContent>
      <div className="absolute translate-y-35 h-16 w-full shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={marginData}>
            <Line
              type="natural"
              dataKey="margin"
              stroke="#269957"
              strokeWidth={3}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default NetProfit;
