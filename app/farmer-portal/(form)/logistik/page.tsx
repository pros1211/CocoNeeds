"use client";
import React, { useState } from "react";
import ProductInput from "./create/productInput";
import DeliveryProduct from "./delivery/deliveryPage";
const LogistikPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="w-full pb-10 h-full">
      {currentStep === 1 && (
        <ProductInput onNextStep={() => setCurrentStep(2)} />
      )}

      {currentStep === 2 && (
        <DeliveryProduct
          onPrevStep={() => setCurrentStep(1)}
          onNextStep={() => setCurrentStep(3)}
        />
      )}
      {/* {currentStep === 3 && (
        <SummaryPage
          onPrevStep={() => setCurrentStep(2)}
          onNextStep={() => setCurrentStep(4)}
        />
      )} */}
    </div>
  );
};

export default LogistikPage;
