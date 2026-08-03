import Advantage from "@/components/landingPage/logistik/advantage";
import CaraKerja from "@/components/landingPage/logistik/caraKerja";
import Dampak from "@/components/landingPage/logistik/dampak";
import Hero from "@/components/landingPage/logistik/hero";
import React from "react";

const Logistics = () => {
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <Dampak />
      <CaraKerja />
      <Advantage />
    </div>
  );
};

export default Logistics;
