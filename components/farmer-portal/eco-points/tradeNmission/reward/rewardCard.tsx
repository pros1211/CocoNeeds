import React from "react";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { Reward } from "./rewardTypes";
import { Button } from "@/components/ui/button";
interface props {
  reward: Reward;
  onRedeem: (reward: Reward) => void;
}
const RewardCard = ({ reward, onRedeem }: props) => {
  return (
    <Card className="rounded-3xl border-green-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-5 p-5">
        <div className="shrink-0">
          <Image
            src={reward.image}
            width={120}
            height={120}
            alt={reward.title}
            className="rounded-2xl"
          />
        </div>
        <div className="flex-1 space-y-2">
          <CardTitle className="text-xl">{reward.title}</CardTitle>

          <div className="text-[#269957] font-semibold">{reward.poin}</div>

          <CardDescription>{reward.description}</CardDescription>
        </div>

        <div className="shrink-0">
          <Button
            onClick={() => onRedeem(reward)}
            className="h-12 w-36 rounded-xl bg-[#269957]"
          >
            <Leaf className="w-5 h-5" />
            Tukar Poin
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RewardCard;
