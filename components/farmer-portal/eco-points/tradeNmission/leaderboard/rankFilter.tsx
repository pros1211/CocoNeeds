"use client";
import React from "react";
import { RankCategory } from "./rankTypes";
import { LEVEL_CONFIG } from "./rankTypes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
Object.entries(LEVEL_CONFIG);
interface rankProps {
  rank: RankCategory;
  onChange: (value: RankCategory) => void;
}
const RankFilter = ({ rank, onChange }: rankProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(LEVEL_CONFIG).map(([key, value]) => {
        return (
          <Button
            key={key}
            onClick={() => onChange(key as RankCategory)}
            variant={rank === key ? "default" : "outline"}
            className={rank === key ? "bg-[#269957] text-white" : ""}
          >
            <Image
              src={value.icon}
              width={50}
              height={50}
              alt={value.label}
              className="w-4 h-4 mr-2 rounded-full"
            />

            {value.label}
          </Button>
        );
      })}
    </div>
  );
};

export default RankFilter;
