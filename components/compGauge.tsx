"use client";
import React, { useMemo, useState } from "react";
import { PieChart, Pie, Label, Sector } from "recharts";
import Image from "next/image";
import type {
  PieSectorDataItem,
  PieSectorShapeProps,
} from "recharts/types/polar/Pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "../app/globals.css";
const monthlyData = {
  january: [
    { component: "Copra", number: 900, fill: "var(--color-copra)" },
    { component: "Shell", number: 700, fill: "var(--color-shell)" },
    { component: "Coconut Oil", number: 300, fill: "var(--color-oil)" },
    { component: "Coconut Milk", number: 200, fill: "var(--color-milk)" },
    { component: "Coconut Fiber", number: 800, fill: "var(--color-fiber)" },
  ],
  february: [
    { component: "Copra", number: 400, fill: "var(--color-copra)" },
    { component: "Shell", number: 500, fill: "var(--color-shell)" },
    { component: "Coconut Oil", number: 400, fill: "var(--color-oil)" },
    { component: "Coconut Milk", number: 100, fill: "var(--color-milk)" },
    { component: "Coconut Fiber", number: 500, fill: "var(--color-fiber)" },
  ],
  march: [
    { component: "Copra", number: 900, fill: "var(--color-copra)" },
    { component: "Shell", number: 700, fill: "var(--color-shell)" },
    { component: "Coconut Oil", number: 200, fill: "var(--color-oil)" },
    { component: "Coconut Milk", number: 300, fill: "var(--color-milk)" },
    { component: "Coconut Fiber", number: 800, fill: "var(--color-fiber)" },
  ],
  april: [
    { component: "Copra", number: 900, fill: "var(--color-copra)" },
    { component: "Shell", number: 700, fill: "var(--color-shell)" },
    { component: "Coconut Oil", number: 200, fill: "var(--color-oil)" },
    { component: "Coconut Milk", number: 300, fill: "var(--color-milk)" },
    { component: "Coconut Fiber", number: 800, fill: "var(--color-fiber)" },
  ],
  may: [
    { component: "Copra", number: 900, fill: "var(--color-copra)" },
    { component: "Shell", number: 700, fill: "var(--color-shell)" },
    { component: "Coconut Oil", number: 300, fill: "var(--color-oil)" },
    { component: "Coconut Milk", number: 200, fill: "var(--color-milk)" },
    { component: "Coconut Fiber", number: 800, fill: "var(--color-fiber)" },
  ],
  june: [
    { component: "Copra", number: 900, fill: "var(--color-copra)" },
    { component: "Shell", number: 700, fill: "var(--color-shell)" },
    { component: "Coconut Oil", number: 300, fill: "var(--color-oil)" },
    { component: "Coconut Milk", number: 200, fill: "var(--color-milk)" },
    { component: "Coconut Fiber", number: 800, fill: "var(--color-fiber)" },
  ],
  july: [
    { component: "Copra", number: 900, fill: "var(--color-copra)" },
    { component: "Shell", number: 700, fill: "var(--color-shell)" },
    { component: "Coconut Oil", number: 300, fill: "var(--color-oil)" },
    { component: "Coconut Milk", number: 200, fill: "var(--color-milk)" },
    { component: "Coconut Fiber", number: 800, fill: "var(--color-fiber)" },
  ],
};
const chartConfig = {
  sales: {
    label: "Sales",
  },
  Copra: {
    label: "Copra",
    color: "#DDA15E",
  },
  Shell: {
    label: "Shell",
    color: "#BC6C25",
  },
  "Coconut Oil": {
    label: "Coconut Oil",
    color: "#606C38",
  },
  "Coconut Milk": {
    label: "Coconut Milk",
    color: "#FEFAE0",
  },
  "Coconut Fiber": {
    label: "Coconut Fiber",
    color: "#283618",
  },
} satisfies ChartConfig;
const CompGauge = () => {
  const [activeTab, setActiveTab] = useState<"Profit" | "Composition">(
    "Profit",
  );
  const [activeMonth, setMonth] = useState<keyof typeof monthlyData>("january");
  const activeData = monthlyData[activeMonth];
  const totalSales = useMemo(() => {
    if (!activeData) return 0;
    return activeData.reduce((acc, curr) => acc + curr.number, 0);
  }, [activeData]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const renderPieShape = (props: PieSectorShapeProps) => {
    const { outerRadius = 0, innerRadius = 0, index } = props;

    if (index === activeIndex) {
      return (
        <g>
          <Sector {...props} outerRadius={outerRadius + 8} />
          <Sector
            {...props}
            outerRadius={outerRadius + 22}
            innerRadius={outerRadius + 12}
          />
        </g>
      );
    }

    return <Sector {...props} outerRadius={outerRadius} />;
  };
  return (
    <div className="flex-1 w-full flex flex-col bg-[#F8F9FA] p-6 rounded-2xl w-full ">
      <div className="flex justify-end mb-4 pr-4">
        <Select
          value={activeMonth}
          onValueChange={(val) => setMonth(val as keyof typeof monthlyData)}
        >
          <SelectTrigger className="w-[140px] bg-white border-gray-200 rounded-xl shadow-sm text-gray-700">
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-100 shadow-lg rounded-xl">
            <SelectItem value="january">January</SelectItem>
            <SelectItem value="february">February</SelectItem>
            <SelectItem value="march">March</SelectItem>
            <SelectItem value="april">April</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ChartContainer config={chartConfig} className="w-full min-h-[300px]">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <ChartLegend
            content={
              <ChartLegendContent
                nameKey="component"
                className="flex-col items-start pr-20 gap-3 text-md font-medium [&_[style*='background-color']]:w-8 [&_[style*='background-color']]:h-8 [&_[style*='background-color']]:rounded-sm"
              />
            }
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Pie
            data={activeData}
            dataKey="number"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={140}
            strokeWidth={3}
            stroke="#ffffff"
            nameKey="component"
            shape={renderPieShape}
            onClick={(_, index) =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  const imageSize = 120;
                  const nudgeX = -100;
                  const nudgeY = 0;
                  return (
                    <g>
                      <circle
                        cx={(viewBox.cx || 0) + nudgeX}
                        cy={(viewBox.cy || 0) + nudgeY}
                        r={imageSize / 2}
                        fill="#f3f4f6"
                      />

                      <image
                        href="/coconut.png"
                        className="rounded-full"
                        x={(viewBox.cx || 0) - imageSize / 2 + nudgeX}
                        y={(viewBox.cy || 0) - imageSize / 2 + nudgeY}
                        width={imageSize}
                        height={imageSize}
                      />
                    </g>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default CompGauge;
