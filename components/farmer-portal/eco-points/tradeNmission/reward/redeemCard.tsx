"use client";
import React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Minus, Plus, X, Leaf } from "lucide-react";

import { Reward } from "./rewardTypes";

interface Props {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  reward: Reward | null;
}

const RedeemCard = ({ open, onOpenChange, reward }: Props) => {
  if (!reward) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-visible">
        <div className="absolute left-1/2 -translate-x-1/2 -top-10">
          <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-white flex items-center justify-center shadow-lg">
            <Leaf className="w-10 h-10 text-[#269957]" />
          </div>
        </div>
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-5 top-5"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="pt-14 px-8 pb-8 flex flex-col gap-6">
          <div className="flex justify-center">
            <Image
              src={reward.image}
              width={230}
              height={230}
              alt={reward.title}
            />
          </div>

          {/* Title */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">{reward.title}</h2>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2 text-[#269957] font-semibold">
              <Leaf className="w-4 h-4" />
              {reward.poin}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-center font-medium">Jumlah</p>

            <div className="flex justify-center items-center gap-6">
              <Button size="icon" variant="outline" className="rounded-full">
                <Minus />
              </Button>

              <span className="font-bold text-xl">1</span>

              <Button size="icon" variant="outline" className="rounded-full">
                <Plus />
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-green-100 bg-green-50 px-5 py-4 flex justify-between">
            <span>Sisa EcoPoints</span>

            <span className="font-semibold text-[#269957]">2.450 Points</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-12 rounded-xl"
            >
              Batal
            </Button>

            <Button className="h-12 rounded-xl bg-[#269957] hover:bg-[#1f7d49]">
              Redeem
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RedeemCard;
