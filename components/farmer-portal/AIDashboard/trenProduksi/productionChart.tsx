import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { productionTrend } from "./chartData";

export const chartConfig = {
  actual: {
    label: "Data Aktual",
    color: "#15803D",
  },

  forecast: {
    label: "Prediksi AI",
    color: "#84CC16",
  },
} satisfies ChartConfig;
const ProductionChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <LineChart
        data={productionTrend}
        margin={{
          left: 12,
          right: 20,
          top: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid vertical={false} />

        <XAxis dataKey="month" tickLine={false} axisLine={false} />

        <YAxis tickLine={false} axisLine={false} />

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        {/* Actual */}

        <Line
          dataKey="actual"
          stroke="var(--color-actual)"
          strokeWidth={3}
          dot={{
            r: 5,
            fill: "var(--color-actual)",
            stroke: "var(--color-actual)",
          }}
          activeDot={{
            r: 8,
          }}
          connectNulls={false}
        />

        {/* Forecast */}

        <Line
          dataKey="forecast"
          stroke="var(--color-forecast)"
          strokeWidth={2}
          strokeDasharray="6 6"
          dot={{
            r: 5,
            fill: "var(--color-forecast)",
            stroke: "var(--color-forecast)",
          }}
          activeDot={{
            r: 7,
          }}
          connectNulls={true}
        />
        <ChartLegend
          content={<ChartLegendContent />}
          verticalAlign="bottom"
          align="left"
        />
      </LineChart>
    </ChartContainer>
  );
};

export default ProductionChart;
