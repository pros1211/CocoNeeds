"use client";
import React from "react";

import { Grid2X2, Smartphone, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RewardCategory } from "./rewardTypes";

const categories = [
  {
    value: "all",
    label: "All",
    icon: Grid2X2,
  },
  {
    value: "digital",
    label: "Digital",
    icon: Smartphone,
  },
  {
    value: "pertanian",
    label: "Pertanian",
    icon: Sprout,
  },
];
interface Props {
  value: RewardCategory;
  onChange: (value: RewardCategory) => void;
}

const RewardFilter = ({ value, onChange }: Props) => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex flex-wrap gap-3 min-w-max">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <Button
              key={item.value}
              variant="outline"
              onClick={() => onChange(item.value as RewardCategory)}
              className={
                value === item.value
                  ? "bg-[#269957] text-white border-[#269957]"
                  : ""
              }
            >
              <Icon className="w-4 h-4 mr-2" />

              {item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default RewardFilter;
