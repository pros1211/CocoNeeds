"use client";
import React, { useMemo, useState } from "react";
import { Receipt } from "lucide-react";
import RewardCard from "./rewardCard";
import { rewardData } from "./rewardData";
import { RewardCategory } from "./rewardTypes";
import { Reward } from "./rewardTypes";
import RewardFilter from "./rewardFilter";
import RedeemCard from "./redeemCard";
const RewardClient = () => {
  const [category, setCategory] = useState<RewardCategory>("all");
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);

  const [open, setOpen] = useState(false);
  const filteredRewards = useMemo(() => {
    if (category === "all") return rewardData;

    return rewardData.filter((reward) => reward.category === category);
  }, [category]);
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl flex items-center gap-2 text-[#269975]">
            <Receipt className="w-7 h-7" />
            Penukaran poin
          </h2>
          <p className="text-sm font-medium font-gray-600">
            Tukarkan EcoPointmu menjadi berbagai hadiah bernilai ekonomi!
          </p>
        </div>
      </div>
      <RewardFilter value={category} onChange={setCategory} />
      <div className="space-y-4">
        {filteredRewards.map((reward) => (
          <RewardCard
            key={reward.id}
            reward={reward}
            onRedeem={(reward) => {
              setSelectedReward(reward);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <RedeemCard reward={selectedReward} open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default RewardClient;
