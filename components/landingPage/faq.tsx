"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import "../../app/globals.css";
import { ArrowDown } from "lucide-react";
const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };
  const faqList = [
    {
      title: "What can an AI assistant do?",
      answer:
        "An AI assistant can help forecast the optimal harvest time based on coconut plantation conditions and available data.",
    },
    {
      title: "What is the Eco Points feature?",
      answer:
        "Eco points are points that you get every time you sell your harvest or exchange your harvest waste for recycling. These points can be used for",
    },
    {
      title: "How do I find a logistics partner for shipping?",
      answer: "",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-center flex gap-4 flex-col items-center ">
          <h2 className="text-3xl text-[#2C694E] font-bold capitalize">
            frequently asked questions
          </h2>
          <button className="p-3 flex text-white flex-start items-center gap-4 bg-[#006C48] rounded-full capitalize">
            contact us
            <span className="bg-white rounded-full p-2">
              <ArrowRight color="#59BE8E" className="w-3 h-3" />
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {faqList.map((question, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="flex flex-col p-4 gap-4 rounded-xl border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold tracking-wider">
                    {question.title}
                  </span>
                  <ArrowDown
                    className={`w-5 h-5 shrink-0 text-[#2d6a4f] transition-transform duration-500 ${
                      isOpen ? "-rotate-180" : "rotate-0"
                    }`}
                    color="#3BA275"
                  />
                </div>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed pr-8">
                      {question.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
