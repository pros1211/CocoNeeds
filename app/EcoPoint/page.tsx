import Advantage from "@/components/landingPage/EcoPoint/advantage";
import CaraKerja from "@/components/landingPage/EcoPoint/caraKerja";
import Hero from "@/components/landingPage/EcoPoint/hero";
import MisiReward from "@/components/landingPage/EcoPoint/MisiReward";
import React from "react";

const EcoPoint = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <Hero />
      <div>
        <Advantage />
      </div>
      <div className="bg-[#15885D]">
        <CaraKerja />
      </div>
      <div className="py-20">
        <MisiReward />
      </div>
    </div>
  );
};

export default EcoPoint;
