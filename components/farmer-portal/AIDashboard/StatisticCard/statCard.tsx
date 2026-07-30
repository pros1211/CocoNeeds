import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { cardVariants } from "./variants";
import { ChevronRight } from "lucide-react";
interface StatCardProps {
  title: string;
  value: string;
  description: string;
  trend: string;
  trendColor: "green" | "blue" | "orange" | "red";
  icon: string;
  actionLabel: string;
}
type CardVariant = "green" | "blue" | "orange" | "red";
import { formatRupiah } from "@/lib/utils";
const StatCard = ({
  title,
  value,
  description,
  trend,
  trendColor,
  icon,
  actionLabel,
}: StatCardProps) => {
  const variant = cardVariants[trendColor];
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="flex flex-col px-2 pt-3">
        <div className="flex items-start gap-4">
          <Image src={icon} width={95} height={95} alt={title} />

          <div className="flex-1 flex flex-col">
            <CardTitle className="text-sm font-semibold text-gray-700">
              {title}
            </CardTitle>

            <h2
              className={`
                text-lg
                font-bold
                mt-1
                ${variant.value}
              `}
            >
              {value}
            </h2>
            <CardDescription className="text-xs leading-5 font-medium">
              {description}
            </CardDescription>

            <p
              className={`
                mt-2
                text-xs 
                font-semibold
                ${variant.trend}
              `}
            >
              {trend}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <button
          className={`
            w-full
            rounded-full
            border
            mt-auto
            p-1
            flex
            items-center
            justify-center
            gap-2
            text-sm     
            font-semibold
            transition-colors
            
            ${variant.button}
          `}
        >
          {actionLabel}

          <ChevronRight className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default StatCard;
