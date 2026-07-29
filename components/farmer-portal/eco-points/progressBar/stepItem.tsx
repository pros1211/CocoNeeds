import React from "react";
import { Check } from "lucide-react";
interface Props {
  number: number;
  title: string;
  active: boolean;
  complete: boolean;
  showLine: boolean;
}

const StepItem = ({ number, title, active, complete, showLine }: Props) => {
  return (
    <div className="relative flex flex-1 flex flex-col items-center">
      <div className="relative flex items-center w-full justify-center">
        <div
          className={`
            z-10
            w-8 h-8
            rounded-full
            border-[2px]
            flex items-center justify-center
            text-sm font-semibold
            bg-white
            transition-all
            ${
              complete
                ? "bg-[#269957] border-[#269957] text-white"
                : active
                  ? "border-[#269957] text-[#269957]"
                  : "border-gray-300 text-gray-400"
            }
          `}
        >
          {complete ? <Check className="w-5 h-5 text-[#269957]" /> : number}
        </div>

        {showLine && (
          <div
            className={`
              absolute
              left-1/2
              right-[-50%]
              h-[3px]
              rounded-full
              ${complete ? "bg-[#269957]" : "bg-gray-300"}
            `}
          />
        )}
      </div>

      <span
        className={`
          mt-2
          text-sm
          font-semibold
          text-center
          ${active || complete ? "text-[#269957]" : "text-gray-500"}
        `}
      >
        {title}
      </span>
    </div>
  );
};

export default StepItem;
