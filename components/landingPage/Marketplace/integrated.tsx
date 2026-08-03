"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Leaf } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ecoData = [
  {
    title: "Marketplace",
    desc: "Pasar B2B khusus industri kelapa untuk transaksi aman, transparan dan saling menguntungkan",
    icon: "/marketplace.png",
  },
  {
    title: "Smart Logistics",
    desc: "Pengiriman efisien dengan fitur pickup, penjadwalan dan tracking secara real-time",
    icon: "/truckMarket.png",
  },
  {
    title: "Product Traceability",
    desc: "Verifikasi asal, kualitas dan data kelapa melalui sertifikat yang diterbitkan secara otomatis.",
    icon: "/clipboard.png",
  },
  {
    title: "EcoPoint",
    desc: "Dapatkan poin dari setiap aktivitas transaksi untuk ditukarkan dengan berbagai manfaat.",
    icon: "/Coin_2.png",
  },
];

const Integrated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col gap-6 items-center py-8 bg-center min-h-[600px] rounded-xl bg-no-repeat bg-cover w-full mt-10"
      style={{ backgroundImage: "url('/bg-integrate.png')" }}
    >
      <span className="inline-flex font-semibold  text-[#4F9D5A] bg-[#EAF6EA] border border-[#D6F0E0] gap-2 rounded-full text-[#2D6A4F] px-5 py-2">
        <Leaf size={18} className="w-6 h-6" />
        Ekosistem
      </span>
      <div className="max-w-5xl items-center flex flex-col gap-4 px-4">
        <h2 className="text-[#2D6A4F] font-bold text-2xl sm:text-3xl tracking-wide leading-snug text-center">
          Terintegrasi dalam ekosistem CocoNeeds
        </h2>
        <p className="text-gray-600 font-medium text-md max-w-3xl text-center leading-6 break-words">
          Semua proses di CocoNeeds saling terhubung secara otomatis. petani,
          koperasi, logistik, AI dan marketplace bekerja sama dalam satu sistem
          terintegrasi
        </p>
      </div>

      <div className="relative w-full max-w-6xl px-4 sm:px-6">
        {/* desktop connector */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none z-10"
          aria-hidden="true"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={`h-conn-${i}`}
              className="absolute"
              style={{
                top: "72px",
                left: `calc(${(i + 1) * 25}% - 28px)`,
                width: "56px",
                height: "2px",
                background:
                  "repeating-linear-gradient(90deg, #B9E3C7 0px, #B9E3C7 8px, transparent 8px, transparent 16px)",
                backgroundSize: "32px 2px",
                animation: isVisible ? "flowDash 1.2s linear infinite" : "none",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.8s ease-out",
              }}
            />
          ))}
        </div>

        <div
          className="lg:hidden absolute inset-0 pointer-events-none z-10 hidden sm:max-md:hidden"
          style={{ display: undefined }}
          aria-hidden="true"
        ></div>
        {/* mobile  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ecoData.map((data, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="flex md:hidden justify-center -my-1 relative z-10">
                  <div
                    style={{
                      width: "2px",
                      height: "32px",
                      background:
                        "repeating-linear-gradient(180deg, #B9E3C7 0px, #B9E3C7 8px, transparent 8px, transparent 16px)",
                      backgroundSize: "2px 32px",
                      animation: isVisible
                        ? "flowDashVertical 1.2s linear infinite"
                        : "none",
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.8s ease-out ${index * 0.15}s`,
                    }}
                  />
                </div>
              )}

              <Card
                className="relative z-20 h-full rounded-[28px] border border-[#E8EFEA] bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#72C58F]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`,
                }}
              >
                <CardContent className="h-full flex flex-col items-center gap-3">
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg border border-[#EDF3EE] transition-all duration-300 group-hover:shadow-xl hover:scale-110 hover:shadow-xl">
                    <Image
                      src={data.icon}
                      alt={data.title}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 text-center flex-1">
                    <CardTitle className="text-2xl font-bold text-[#184D3A] min-h-[36px] flex items-center">
                      {data.title}
                    </CardTitle>

                    <CardDescription className="mt-2 text-base leading-7 text-center min-h-[84px]">
                      {data.desc}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrated;
