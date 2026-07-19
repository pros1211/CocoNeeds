"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
const Features = () => {
  const coreFeatures = [
    {
      category: "Farmers",
      image: "/farmers.png",
      title: "Agricultural and Forecasting assistance",
      description:
        "Analyze, forecast, and optimize the harvesting process using an AI assistant personalized to your land's conditions.",
    },
    {
      category: "Logistics",
      image: "/farmers.png",
      title: "end-to-end logistics",
      description:
        "Direct and efficient delivery, utilizing 200 collection point partners collaborating with village cooperatives.",
    },
    {
      category: "Marketplace",
      image: "/farmers.png",
      title: "direct negotiations between company and farmers",
      description:
        "Helps connect you with numerous customers and suppliers for your business.",
    },
    {
      category: "Circular Eco Points",
      image: "/coconutPlant.png",
      title: "Circular Economy to minimalize your waste",
      description:
        "converting residual waste such as coconut shells, husks, and coconut water into eco-points that can be exchanged for economic value.",
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <div className="flex flex-col text-center items-center gap-8 py-12 px-4 w-full bg-[#F8F9FA] shadow-md rounded-xl">
        <div className="flex flex-col items-center max-w-[650px] gap-4 justify-center">
          <p className="capitalize text-xl font-semibold text-[#8C7851]">
            our service
          </p>
          <h2 className="text-2xl font-semibold">
            Providing Assistance and a platform for <br />
            <span> Farmers, Logistics Providers, and Companies</span> <br />
            Through our Integrated System
          </h2>
        </div>
        <div className="overflow-hidden w-full max-w-7xl" ref={emblaRef}>
          <div className="flex gap-6">
            {coreFeatures.map((features, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url('${features.image}')` }}
                className="shrink-0 w-[85vw] md:w-[400px] group relative flex flex-col justify-end h-[450px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-transparent hover:border-tertiary/50 transition-all duration-500 shadow-lg bg-cover bg-center bg-no-repeat"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col justify-between h-full p-8">
                  <span className="px-4 py-1 text-xs font-bold bg-tertiary/70 text-white border border-tertiary/30 rounded-full w-fit">
                    {features.category}
                  </span>

                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                      {features.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-white text-sm leading-relaxed pb-4 font-medium">
                          {features.description}
                        </p>

                        <button className="flex items-center gap-2 text-white font-semibold text-sm hover:translate-x-1 hover:text-[#F9DFB1] transition-transform duration-300">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 mt-12">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-all active:scale-95"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
