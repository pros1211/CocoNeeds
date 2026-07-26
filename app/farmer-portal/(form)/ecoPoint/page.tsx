"use client";
import React, { useState } from "react";
import WasteForm from "./create/page";
import ShipmentPage from "./delivery/page";
import SummaryPage from "./summary/page";
const WasteData = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="w-full pb-10 h-full">
      {/* You can add a Progress Bar Component here later! */}

      {/* Render Step 1 */}
      {currentStep === 1 && <WasteForm onNextStep={() => setCurrentStep(2)} />}

      {/* Render Step 2 (for later) */}
      {currentStep === 2 && (
        <ShipmentPage
          onPrevStep={() => setCurrentStep(1)}
          onNextStep={() => setCurrentStep(3)}
        />
      )}
      {currentStep === 3 && (
        <SummaryPage
          onPrevStep={() => setCurrentStep(2)}
          onNextStep={() => setCurrentStep(4)}
        />
      )}
    </div>
  );
};

export default WasteData;
