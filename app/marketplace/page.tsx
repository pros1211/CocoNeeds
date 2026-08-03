import Advantage from "@/components/landingPage/Marketplace/advantage";
import CaraKerja from "@/components/landingPage/Marketplace/caraKerja";
import Hero from "@/components/landingPage/Marketplace/hero";
import Integrated from "@/components/landingPage/Marketplace/integrated";
import React from "react";

const MarketPlace = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Hero />
      <Advantage />
      <CaraKerja />
      <Integrated />
    </div>
  );
};

export default MarketPlace;
