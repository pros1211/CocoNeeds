import { Handshake, Search, Store } from "lucide-react";
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative overflow-hidden ">
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
          backgroundImage: "url('/heroMarketMobile.png')",
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
          backgroundImage: "url('/heroMarketDesktop.png')",
        }}
      />
      <div className="mx-auto px-10 py-8 lg:py-2 relative min-h-[650px]">
        <div className="w-full lg:w-1/2 z-10">
          <div className="flex flex-col gap-6 z-10 xl:px-8 xl:pb-16 xl:pt-24">
            <div>
              <span className="inline-flex font-semibold  bg-[#EAF7EF] border border-[#D6F0E0] gap-2 rounded-full text-[#2D6A4F] px-5 py-2">
                <Store size={18} className="text-[#2D6A4F]" />
                Marketplace B2B
              </span>
              <h1 className="mt-8 font-extrabold text-[#2D6A4F] text-3xl leading-[1.05] tracking-[-0.03em] max-w-[11ch] lg:max-w-[14ch] lg:text-6xl">
                Satu permintaan, Dipenuhi bersama petani indonesia
              </h1>
            </div>
            <p className="text-gray-700 font-medium text-base   text-left lg:text-lg max-w-[350px] xl:max-w-xl text-background">
              Dengan konsep{" "}
              <strong className="text-[#2D6A4F]">Crowd Supplying</strong>, kami
              menggabungkan hasil panen dari banyak petani melalui koperasi
              untuk mengoptimalkan permintaan sehingga efisien, adil dan
              transparan.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <button className="h-14 rounded-2xl cursor-pointer flex items-center justify-center shadow-lg gap-2 bg-[#72B878] text-sm lg:text-md text-white shadow-md hover:bg-[#3BA275] transition px-6">
                <Handshake size={18} />
                Bergabung jadi mitra
              </button>
              <button className="h-14 rounded-2xl flex items-center justify-center shadow-lg gap-2 bg-white font-semibold text-[#3BA275] shadow-lg border border-[#CFE5D8] hover:bg-[#72B878] hover:text-white transition px-6">
                <Search size={18} />
                Cari produsen kelapa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
