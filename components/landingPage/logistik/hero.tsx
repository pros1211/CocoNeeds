import { Box, Calendar1, Play } from "lucide-react";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="
      absolute
      inset-0
      bg-cover
      bg-center
      bg-no-repeat
      lg:hidden
      z-0
    "
        style={{
          backgroundImage: "url('/herologistikMobile.png')",
        }}
      />
      <div
        className="
      absolute
      inset-0
      hidden
      lg:block
      bg-cover
      bg-center
      bg-no-repeat
      z-0
    "
        style={{
          backgroundImage: "url('/heroLogistikDesktop.png')",
        }}
      />
      <div className="mx-auto px-5 lg:px-8 relative min-h-[500px] lg:min-h-[650px]">
        <div className="w-full lg:w-1/2 z-10">
          <div className="flex flex-col gap-6 z-10 mt-20">
            <div>
              <span className="inline-flex font-semibold items-center bg-[#EAF7EF] border border-[#D6F0E0] gap-2 rounded-full  text-[#2D6A4F] text-sm lg:text-lg px-5 py-2">
                <Box size={18} className="text-[#2D6A4F]" />
                Smart Logistics
              </span>
              <h1 className="text-3xl text-[#2D6A4F] lg:text-5xl max-w-[12ch] lg:max-w-[16ch] tracking-[-0.03em] leading-[1.05] font-extrabold mt-8 breaking-words">
                Pengiriman Efisien dan Aman dari Petani hingga Pembeli
              </h1>
              <p className="mt-10 text-gray-700 font-medium text-xs xl:text-lg max-w-[350px] xl:max-w-xl text-justify text-background">
                Setiap pengiriman dapat dipantau dan dijadwalkan serta dikelola
                melalui sistem terintegrasi. AI membantu mengoptimalkan proses
                dan konsolidasi muatan hingga estimasi kedatangan.
              </p>
              <div className="mt-10 flex gap-5">
                <button className="h-14 rounded-2xl cursor-pointer flex items-center shadow-lg gap-2 bg-[#2D6A4F] text-sm lg:text-md text-white shadow-md hover:bg-[#3BA275] transition px-6">
                  <Calendar1 size={18} />
                  Jadwalkan pickup
                </button>
                <button className="h-14 rounded-2xl flex items-center shadow-lg gap-2 bg-[#2D6A4F] text-sm lg:text-md text-white shadow-lg border border-[#CFE5D8] hover:bg-[#3BA275] transition px-6">
                  <Play size={18} />
                  Cara Kerja
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
