import React from "react";
import Link from "next/link";
import "../../app/globals.css";
const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-[60vh] w-full flex mb-10 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/coconutPlant.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green via-green/80 to-transparent z-0"></div>
        <div className="relative z-10 p-6 xl:px-8 xl:pb-16 xl:pt-32 pt-24 lg:pt-28 flex flex-col gap-8 max-w-[800px]">
          <span className="p-3 text-xs xl:text-lg rounded-full max-w-fit text-[#70E000] bg-[#70E000]/30">
            Bersama Membangun Agroindustri Kelapa
          </span>
          <div className="flex flex-col items-start gap-6 ">
            <h1 className=" text-background font-bold tracking-widers text-2xl xl:text-5xl ">
              Satu Platform untuk Menghubungkan Seluruh Ekosistem Kelapa
            </h1>
            <p className=" text-xs xl:text-md max-w-[350px] xl:max-w-[600px] text-justify text-background">
              Mulai dari petani, koperasi, penyedia logistik, hingga perusahaan,
              CocoNeeds menyatukan seluruh pihak rantai pasok dalam satu
              platform digital berbasis AI untuk menciptakan agroindustri yang
              lebih efisien, berkelanjutan, dan saling menguntungkan.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="bg-[#70E000] max-w-fit p-2 rounded-xl text-xs xl:text-lg font-regular tracking-wide cursor-pointer"
              href="/"
            >
              Gabung sebagai Petani
            </Link>
            <Link
              href="#"
              className="bg-transparent text-white border border-white text-xs xl:text-lg border-1 max-w-fit p-2 rounded-xl font-regular tracking-wide cursor-pointer"
            >
              Bermitra dengan Kami
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
