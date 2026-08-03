import { Gift, Leaf } from "lucide-react";
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative overflow-hidden  bg-white">
      <div
        className="
            absolute
            inset-y-0
            right-20
            w-[80%]
            hidden
            lg:block
            z-0
            pointer-events-none
        "
      >
        <Image
          src="/hero_2.png"
          alt="Eco Hero"
          fill
          priority
          className="
                object-contain
                object-right-center
            "
        />
      </div>
      <div className=" absolute w-full h-[260px] mt-10 inset-y-0 left-10 lg:hidden ">
        <Image src="/hero_2.png" fill className="object-contain" alt="" />
      </div>
      <div className="mx-auto px-5 lg:px-8 relative min-h-[480px] lg:min-h-[650px]">
        <div className="w-full lg:w-1/2 z-10">
          <div className="flex flex-col gap-6 z-10 pt-16 xl:px-8 xl:pb-16 xl:pt-24">
            <div>
              <span className="inline-flex font-semibold items-center bg-[#EAF7EF] border border-[#D6F0E0] gap-2 rounded-full  text-[#2D6A4F] text-sm lg:text-md px-5 py-2">
                <Leaf size={18} className="text-[#2D6A4F]" />
                EcoPoint
              </span>
              <h1 className="text-3xl lg:text-6xl mt-8 max-w-[300px] lg:max-w-[400px]  font-extrabold text-[#184D3A]">
                Dari Limbah menjadi Nilai
              </h1>
            </div>
            <p className="text-gray-700 font-medium text-xs xl:text-lg max-w-[350px] xl:max-w-xl text-justify text-background">
              Setiap limbah kelapa yang anda serahkan bernilai EcoPoints.
              Tukarkan poin untuk mendapatkan berbagai hadiah yang mendukung
              operasional sekaligus mengurangi emisi karbon.
            </p>
            <div className="mt-10 flex gap-5">
              <button className="h-14 rounded-2xl cursor-pointer flex items-center shadow-lg gap-2 bg-[#2D6A4F] text-sm lg:text-md text-white shadow-md hover:bg-[#3BA275] transition px-6">
                <Leaf size={18} />
                Mulai kumpulkan EcoPoint
              </button>
              <button className="h-14 rounded-2xl flex items-center shadow-lg gap-2 bg-[#2D6A4F] text-sm lg:text-md text-white shadow-lg border border-[#CFE5D8] hover:bg-[#3BA275] transition px-6">
                <Gift size={18} />
                Lihat hadiah
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
