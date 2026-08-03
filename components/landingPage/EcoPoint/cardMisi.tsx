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
  visible: boolean;
  index: number;
}

const CardMisi = ({ mission, visible, index }: Props) => {
  return (
    <Card
      className="rounded-2xl shadow-sm hover:shadow-lg transition-all border-green-100"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(40px) scale(.95)",

        filter: visible ? "blur(0px)" : "blur(4px)",

        transition: `
      opacity .7s cubic-bezier(.34,1.56,.64,1),
      transform .7s cubic-bezier(.34,1.56,.64,1),
      filter .7s ease
    `,

        transitionDelay: `${index * 120}ms`,
      }}
    >
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
    </Card>
  );
};

export default CardMisi;
