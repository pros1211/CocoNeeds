"use client";

import React from "react";
import { Line, ResponsiveContainer, LineChart } from "recharts";

type ChartDataPoint = {
  month: string;
  margin: number;
};

type IncomeChartProps = {
  data: ChartDataPoint[];
  isPositive: boolean;
};

const IncomeChart = ({ data, isPositive }: IncomeChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="margin"
          stroke={isPositive ? "#269957" : "#ef4444"}
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncomeChart;
