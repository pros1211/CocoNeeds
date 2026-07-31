"use client";
import React from "react";
import {
  Label,
  RadialBar,
  RadialBarChart,
  PolarRadiusAxis,
  PolarAngleAxis,
} from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
const chartData = [
  {
    title: "sangat baik",
    value: 80,
    fill: "#269957",
  },
];
const chartConfig = {
  sangatBaik: {
    label: "Sangat Baik",
    color: "#269957",
  },
  cukupBaik: {
    label: "Cukup baik",
    color: "#9cd0a4",
  },
  kurang: {
    label: "Kurang",
    color: "#269957",
  },
  buruk: {
    label: "Buruk",
    color: "#ef4444",
  },
} satisfies ChartConfig;
const soilCond = [
  {
    title: "pH tanah",
    value: "6.5 (optimal)",
    numerator: 86,
    denominator: 100,
  },
  {
    title: "Kadar air",
    value: "75% (optimal)",
    numerator: 75,
    denominator: 100,
  },
  {
    title: "Pupuk",
    value: "81% (cukup)",
    numerator: 81,
    denominator: 100,
  },
  {
    title: "Bahan organik",
    value: "50% (kurang)",
    numerator: 50,
    denominator: 100,
  },
];
const RadialChart = () => {
  return (
    <Card className="px-1 py-4 bg-white rounded-2xl">
      <CardHeader>
        <CardTitle className="text-[#269957] font-semibold text-lg">
          Analisis Kondisi Lahan
        </CardTitle>
        <CardDescription className="text-gray-600 font-medium text-sm">
          Pantau kondisi lahanmu agar hasil panen optimal
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 grid-cols-2 gap-10">
        <ChartContainer
          config={chartConfig}
          className="aspect-square mx-auto h-[260px] w-[150px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={-270}
            innerRadius="75%"
            outerRadius="100%"
            barSize={18}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar dataKey="value" cornerRadius={0} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy || 0}
                          className="fill-[#269957] text-3xl font-bold tracking-wide"
                        >
                          80
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-[#269957] text-sm font-medium tracking-wide"
                        >
                          /100
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <div className="flex flex-col gap-4">
          {soilCond.map((data, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="font-semibold">{data.title}</span>
              <span className="text-md text-gray-900">{data.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-center">
        <Link
          href="/farmer-portal/lahan"
          className="w-full text-center bg-[#269957] p-2 rounded-lg text-md font-medium text-white"
        >
          Lihat detail Kondisi
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RadialChart;
