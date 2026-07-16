import React from "react";
import FarmerNav from "@/components/farmerNav";
import Weather from "@/components/weather";
const FarmerPortal = () => {
  return (
    <div className="bg-white rounded-3xl w-full h-full p-8 shadow-sm">
      <Weather />
    </div>
  );
};

export default FarmerPortal;
