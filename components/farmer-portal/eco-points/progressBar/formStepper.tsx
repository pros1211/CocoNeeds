"use client";

import { usePathname } from "next/navigation";

import StepItem from "./stepItem";

import { FORM_STEPS } from "./stepConfig";
import React from "react";

export default function FormStepper() {
  const pathname = usePathname();

  const currentIndex = FORM_STEPS.findIndex((step) => pathname === step.href);

  return (
    <div className="bg-white p-2">
      <div className="grid grid-cols-3  md:w-[520px] ">
        {FORM_STEPS.map((step, index) => (
          <StepItem
            key={step.id}
            number={step.id}
            title={step.title}
            active={index === currentIndex}
            complete={index < currentIndex}
            showLine={index !== FORM_STEPS.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
