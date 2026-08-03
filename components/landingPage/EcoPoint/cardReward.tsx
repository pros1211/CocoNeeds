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
import { Button } from "@/components/ui/button";
export interface Reward {
  id: number;
  title: string;
  description: string;
  poin: string;
  image: string;
}

interface props {
  reward: Reward;
  visible: boolean;
  index: number;
}

const CardReward = ({ reward, visible, index }: props) => {
  return (
    <Card
      className="rounded-3xl border-green-100 shadow-sm hover:shadow-md transition-all"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(40px) scale(.95)",

        filter: visible ? "blur(0px)" : "blur(2px)",

        transition: `opacity .7s cubic-bezier(.34,1.56,.64,1), transform .7s cubic-bezier(.34,1.56,.64,1),filter .7s ease`,

        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="flex items-center flex-col xl:flex-row gap-5 p-5">
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
      </div>
    </Card>
  );
};

export default CardReward;
