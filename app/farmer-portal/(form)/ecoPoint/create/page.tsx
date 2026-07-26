"use client";
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cardOption } from "@/constants/wasteData";
import TempurungForm from "@/components/farmer-portal/eco-points/tempurungForm";
import SabutForm from "@/components/farmer-portal/eco-points/sabutForm";
import AirForm from "@/components/farmer-portal/eco-points/airForm";
import { useRouter } from "next/navigation";
interface WasteFormProps {
  onNextStep?: () => void;
}
const WasteForm = ({ onNextStep }: WasteFormProps) => {
  const router = useRouter();

  const [selectedCard, setSelectedCard] = useState<number[]>([0]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const toggleCard = (index: number) => {
    let newSelectedCards = [...selectedCard];

    if (selectedCard.includes(index)) {
      if (selectedCard.length === 1) return;
      newSelectedCards = selectedCard.filter((item) => item !== index);
    } else {
      newSelectedCards = [...selectedCard, index];
    }
    setSelectedCard(newSelectedCards);
    setCurrentStepIndex(0);
  };
  const sortedSelectedCards = [...selectedCard].sort((a, b) => a - b);
  const activeCardIndex = sortedSelectedCards[currentStepIndex];
  const selectedData =
    activeCardIndex !== undefined ? cardOption[activeCardIndex] : null;
  const isLastStep = currentStepIndex === sortedSelectedCards.length - 1;
  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleFormSuccess = () => {
    if (isLastStep) {
      if (onNextStep) {
        onNextStep();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/farmer-portal/ecoPoint/delivery");
      }
    } else {
      setCurrentStepIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-xl w-full">
      <div className=" flex justify-between items-end border-b border-gray-200 pb-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Langkah 1: Isi data Limbah
          </h1>
          <p className="text-gray-500 mt-1">
            Pilih limbah kelapa yang ingin anda tukarkan.
          </p>
        </div>
        <span className="text-sm font-semibold text-gray-500">
          Langkah 1 dari 3
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Pilihan Limbah
          </h2>
          <div className="flex flex-col gap-4">
            {cardOption.map((data, index) => {
              const isActiveStep = index === activeCardIndex;
              const isSelected = selectedCard.includes(index);
              return (
                <Card
                  key={index}
                  onClick={() => toggleCard(index)}
                  className={`relative flex flex-col gap-2 ${isSelected ? "bg-[#EEF8F3]/70 border border-[#75DAA8]" : "bg-white border-gray-300"}`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-white rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-[#1F4D36] fill-[#1F4D36] stroke-white" />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg">
                      {data.title}
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-2">
                      <span className="text-sm font-medium">{data.desc}</span>
                      <span className="text-xs font-semibold text-[#59BE8E]">
                        {data.point}
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          {/* shipment summary */}
        </div>
        <div className="lg:col-span-8 flex flex-col ">
          <div className="flex items-center ml-6 justify-between">
            <h2 className="font-semibold text-lg text-gray-800">
              Informasi Limbah ({currentStepIndex + 1} dari{" "}
              {sortedSelectedCards.length})
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {selectedData &&
              selectedData.id === "9de79fd4-506d-43d5-a57f-ec624ab53fdd" && (
                <TempurungForm
                  key={selectedData.id}
                  data={selectedData}
                  isLastStep={isLastStep}
                  onSuccess={handleFormSuccess}
                />
              )}
          </div>
          <div className="flex flex-col gap-6">
            {selectedData &&
              selectedData.id === "9ff0549e-6352-41d7-b8ec-75fd54f48e0f" && (
                <SabutForm
                  key={selectedData.id}
                  data={selectedData}
                  isLastStep={isLastStep}
                  onSuccess={handleFormSuccess}
                />
              )}
          </div>
          <div className="flex flex-col gap-6">
            {selectedData &&
              selectedData.id === "cf15e95c-c704-47b0-8d06-65ec68667afa" && (
                <AirForm
                  key={selectedData.id}
                  data={selectedData}
                  isLastStep={isLastStep}
                  onSuccess={handleFormSuccess}
                />
              )}
          </div>
          <div className="flex justify-end gap-10 mt-8 ml-6 border-t border-gray-100 pt-6 pr-4">
            {currentStepIndex > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm"
              >
                Sebelumnya
              </button>
            )}
            <button
              type="submit"
              form="waste-form"
              className="bg-[#1F4D36] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#153626] transition-colors shadow-sm"
            >
              {isLastStep ? "Lanjut ke Pengiriman" : "Limbah Selanjutnya"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteForm;
