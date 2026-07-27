"use client";
import React, { useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Label, Sector } from "recharts";
import Image from "next/image";
import type { PieSectorShapeProps } from "recharts/types/polar/Pie";
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
import "../../../app/globals.css";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
  const innerRadius = isMobile ? 55 : 75;
  const outerRadius = isMobile ? 85 : 115;
  return (
    <div className="w-full flex flex-col bg-[#F8F9FA] p-3 md:p-6 rounded-2xl min-h-[300px]">
      <div className="flex justify-center md:justify-end mb-4">
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

      <ChartContainer
        config={chartConfig}
        className="relative w-full flex-1 w-full min-h-[380px] md:min-h-[250px]"
      >
        <PieChart
          margin={
            isMobile
              ? { top: 0, right: 0, bottom: 20, left: 0 }
              : { top: 20, right: 20, bottom: 20, left: 20 }
          }
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <ChartLegend
            content={
              <ChartLegendContent
                nameKey="component"
                className={`p-3 gap-3 text-sm font-medium [&_[style*='background-color']]:w-4 [&_[style*='background-color']]:h-4 [&_[style*='background-color']]:rounded-sm ${
                  isMobile
                    ? "flex-wrap justify-center mt-6"
                    : "flex-col items-start -translate-y-12"
                }`}
              />
            }
            layout={isMobile ? "horizontal" : "vertical"}
            verticalAlign={isMobile ? "bottom" : "middle"}
            align={isMobile ? "center" : "right"}
          />
          <Pie
            data={activeData}
            dataKey="number"
            cx={isMobile ? "50%" : "60%"}
            cy={isMobile ? "38%" : "35%"}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            strokeWidth={3}
            stroke="#ffffff"
            nameKey="component"
            shape={renderPieShape}
            onClick={(_, index) =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          ></Pie>
        </PieChart>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-30 rounded-full bg-[#F3F4F6] shadow-sm flex items-center justify-center z-10">
          <img
            src="/coconut.png"
            alt="Coconut"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
        </div>
      </ChartContainer>
    </div>
  );
};

export default CompGauge;
