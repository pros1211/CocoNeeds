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
    <Card className="w-full flex-1 shadow-sm p-3 flex flex-col gap-4">
      <CardHeader className="flex items-center p-0 space-y-0">
        <TrendingUp className="w-5 h-5" />
        <CardTitle className="text-md font-semibold ">
          Margin Laba Bersih
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="text-3xl font-bold text-gray-900">42.0%</div>
            <p className=" whitespace-nowrap text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
              +2.4%{" "}
              <span className="text-gray-400 text-sm font-regular">
                dari bulan lalu
              </span>
            </p>
          </div>

          <div className="h-14 w-24 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marginData}>
                <Line
                  type="monotone"
                  dataKey="margin"
                  stroke="#269957"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetProfit;
