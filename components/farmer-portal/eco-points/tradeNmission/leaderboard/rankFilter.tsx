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
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 flex-wrap min-w-max">
        {Object.entries(LEVEL_CONFIG).map(([key, value]) => {
          return (
            <Button
              key={key}
              onClick={() => onChange(key as RankCategory)}
              variant={rank === key ? "default" : "outline"}
              className={
                rank === key ? "bg-[#269957] text-white font-semibold" : ""
              }
            >
              <Image
                src={value.icon}
                width={50}
                height={50}
                alt={value.label}
                className="w-7 h-7 mr-2 rounded-full"
              />

              {value.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default RankFilter;
