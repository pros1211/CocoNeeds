"use client";
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
interface Mission {
  title: string;
  description: string;
  poin: string;
  progress: number;
  total: number;
  image: string;
}

interface Props {
  mission: Mission;
}
const MissionCard = ({ mission }: Props) => {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-lg transition-all border-green-100">
      <CardHeader>
        <div className="flex justify-center">
          <Image
            src={mission.image}
            width={180}
            height={180}
            alt={mission.title}
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-md lg:text-lg font-semibold">
          {mission.title}
        </CardTitle>
        <p>{mission.description}</p>
        <div className="inline-flex mt-2 mb-2 rounded-full bg-green-50 px-3 py-2 text-green-700 font-semibold text-xs">
          {mission.poin}
        </div>

        <div className="space-y-1">
          <div className="h-2 rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#269957]"
              style={{
                width: `${(mission.progress / mission.total) * 100}%`,
              }}
            />
          </div>

          <div className="flex justify-end text-xs font-semibold">
            {mission.progress} / {mission.total}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <button className="w-full rounded-xl bg-[#269957] py-2 text-white font-semibold hover:bg-[#1d7b46] transition">
          Mulai
        </button>
      </CardFooter>
    </Card>
  );
};

export default MissionCard;
