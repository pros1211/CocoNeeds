import React from "react";
import Link from "next/link";
import "../app/globals.css";
const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-[60vh] rounded-2xl flex mb-10 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/coconutPlant.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-0"></div>
        <div className="relative z-10 p-8 flex flex-col gap-4 max-w-[800px]">
          <span className="p-3 rounded-full max-w-fit text-[#70E000] bg-[#70E000]/30">
            empowering a sustainable coconut industry
          </span>
          <h1 className="capitalize text-background font-bold tracking-widers text-5xl ">
            Transforming your coconut <br />
            industry into wealth
          </h1>
          <p className="max-w-[600px] text-justify text-background">
            With CocoNeeds, we connect you with farmers, logistics providers,
            and various buyers to process your coconuts into a range of products
            that can boost your business.
          </p>
          <div className="flex items-center gap-4">
            <Link
              className="bg-[#70E000] max-w-fit p-2 rounded-xl font-regular tracking-wide cursor-pointer"
              href="/"
            >
              Join with Us!
            </Link>
            <Link
              href="#"
              className="bg-transparent text-white border border-white border-1 max-w-fit p-2 rounded-xl font-regular tracking-wide cursor-pointer"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
