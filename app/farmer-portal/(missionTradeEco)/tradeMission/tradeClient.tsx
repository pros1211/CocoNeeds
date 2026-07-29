"use client";
import React, { useState } from "react";
import HeaderPoint from "@/components/farmer-portal/eco-points/tradeNmission/headerPoint";
import EcoTabs from "@/components/farmer-portal/eco-points/tradeNmission/ecoTabs";
const TradeClient = () => {
  return (
    <div className="p-3 flex flex-col gap-2">
      <HeaderPoint />
      <EcoTabs />
    </div>
  );
};

export default TradeClient;
