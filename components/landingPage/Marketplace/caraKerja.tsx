"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const dataAlur = [
  {
    step: 1,
    title: "Permintaan",
    desc: "perusahaan membuat permintaan pembelian dengan spesifikasi, jumlah, harga dan tujuan pengiriman",
    icon: "/clipboard.png",
  },
  {
    step: 2,
    title: "Negosiasi",
    desc: "Koperasi melakukan negosiasi harga agar harga minimum dari petani terpenuhi hingga kedua belah pihak sepakat.",
    icon: "/chat.png",
  },
  {
    step: 3,
    title: "Deal",
    desc: "Kesepakatan tercapai dan kontrak pemesanan dibuat antara koperasi dan perusahaan.",
    icon: "/handshake.png",
  },
  {
    step: 4,
    title: "Crowd Supplying",
    desc: "Koperasi mengumpulkan pasokan dari banyak petani untuk memenuhi permintaan.",
    icon: "/users.png",
  },
  {
    step: 5,
    title: "Pengiriman",
    desc: "Barang dari petani dijemput oleh koperasi, dikurasi kemudian dikirim dan dapat dilacak melalui sistem.",
    icon: "/truckMarket.png",
  },
  {
    step: 6,
    title: "Produk diterima",
    desc: "Produk diterima oleh pembeli dan mendapat sertifikat keaslian produk.",
    icon: "/box.png",
  },
];

const STEP_COUNT = dataAlur.length;
const STEP_DELAY = 400;
const STEP_ANIM_MS = 500;

const CaraKerja = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [visibleStep, setVisibleStep] = useState(-1);
  // trigger ketika page pertama diload
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  // trigger image animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => observer.disconnect();
  }, []);
  // delay tiap step animasi
  useEffect(() => {
    if (!triggered) return;
    let frame: ReturnType<typeof setTimeout>;
    const reveal = (i: number) => {
      if (i >= STEP_COUNT) return;
      frame = setTimeout(
        () => {
          setVisibleStep(i);
          reveal(i + 1);
        },
        i === 0 ? 300 : STEP_DELAY,
      );
    };
    reveal(0);
    return () => clearTimeout(frame);
  }, [triggered]);

  const stepStyle = (i: number): React.CSSProperties => ({
    opacity: visibleStep >= i ? 1 : 0,
    transform:
      visibleStep >= i
        ? "translateY(0) scale(1)"
        : "translateY(24px) scale(0.92)",
    transition: `opacity ${STEP_ANIM_MS}ms cubic-bezier(0.34,1.56,0.64,1), transform ${STEP_ANIM_MS}ms cubic-bezier(0.34,1.56,0.64,1)`,
  });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center gap-6 pb-10 px-4"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[#3BA275] text-center leading-snug">
        Pembelian, Negosiasi hingga Pengiriman dalam 1 alur
      </h2>
      <p className="mt-2 text-gray-600 font-medium leading-8 text-center max-w-3xl">
        Semua proses berlangsung secara transparan mulai dari permintaan
        industri, negosiasi, crowd supplying, hingga pengiriman produk.
      </p>

      <div className="hidden lg:block relative w-full max-w-6xl py-6">
        {/* garis */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            top: "72px",
            left: "8%",
            right: "8%",
            height: "2px",
            background:
              "repeating-linear-gradient(90deg, #B9E3C7 0px, #B9E3C7 8px, transparent 8px, transparent 16px)",
          }}
        />
        {/* animasi garis */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            top: "72px",
            left: "8%",
            right: "8%",
            height: "2px",
            background:
              "repeating-linear-gradient(90deg, rgba(185,227,199,0.7) 0px, rgba(185,227,199,0.7) 8px, transparent 8px, transparent 16px)",
            backgroundSize: "32px 2px",
            animation: triggered ? "flowDash 1.2s linear infinite" : "none",
            opacity: triggered ? 1 : 0,
            transition: "opacity 0.6s ease-out",
          }}
        />

        <div className="relative z-20 grid grid-cols-6 gap-4">
          {dataAlur.map((data, index) => (
            <div
              key={data.step}
              className="flex flex-col text-center items-center gap-3 p-2"
              style={stepStyle(index)}
            >
              <div className="relative w-[80px] h-[80px] lg:w-[100px] lg:h-[70px] flex items-center justify-center rounded-2xl bg-white shadow-sm border border-[#EDF3EE]">
                <Image
                  src={data.icon}
                  width={60}
                  height={44}
                  alt={`step ${data.step} icon`}
                  className="object-contain"
                />
              </div>

              <div className="flex justify-center">
                <span className="w-8 h-8 rounded-full bg-[#EAF8EF] text-[#2D6A4F] text-sm font-bold flex items-center justify-center shadow-sm">
                  {data.step}
                </span>
              </div>

              <h3 className="font-semibold text-lg text-[#2D6A4F] min-h-[28px]">
                {data.title}
              </h3>

              <p className="text-sm font-medium leading-6 text-gray-600 max-w-[180px] min-h-[72px]">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden relative w-full max-w-md mx-auto py-4">
        <div
          className="absolute pointer-events-none z-10"
          style={{
            top: "40px",
            bottom: "calc(56px + 24px)",
            left: "31px",
            width: "2px",
            background:
              "repeating-linear-gradient(180deg, #B9E3C7 0px, #B9E3C7 8px, transparent 8px, transparent 16px)",
          }}
        />

        <div
          className="absolute pointer-events-none z-10"
          style={{
            top: "40px",
            bottom: "calc(56px + 24px)",
            left: "31px",
            width: "2px",
            background:
              "repeating-linear-gradient(180deg, rgba(185,227,199,0.7) 0px, rgba(185,227,199,0.7) 8px, transparent 8px, transparent 16px)",
            backgroundSize: "2px 32px",
            animation: triggered
              ? "flowDashVertical 1.2s linear infinite"
              : "none",
            opacity: triggered ? 1 : 0,
            transition: "opacity 0.6s ease-out",
          }}
        />

        <div className="relative z-20 flex flex-col gap-6">
          {dataAlur.map((data, index) => (
            <div
              key={data.step}
              className="flex items-start gap-4 pl-2"
              style={stepStyle(index)}
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="relative w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white shadow-md border border-[#EDF3EE]">
                  <Image
                    src={data.icon}
                    width={34}
                    height={34}
                    alt={`step ${data.step} icon`}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 bg-white rounded-2xl border border-[#E8EFEA] shadow-sm p-4 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-[#EAF8EF] text-[#2D6A4F] text-xs font-bold flex items-center justify-center shrink-0">
                    {data.step}
                  </span>
                  <h3 className="font-semibold text-base text-[#2D6A4F]">
                    {data.title}
                  </h3>
                </div>
                <p className="text-sm font-medium leading-6 text-gray-600 break-words">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={imageRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 w-full max-w-6xl"
      >
        <div
          className="relative aspect-square h-auto sm:h-[520px] w-full rounded-2xl bg-white"
          style={{
            opacity: showImage ? 1 : 0,
            transform: showImage
              ? "translateY(0px) scale(1)"
              : "translateY(80px) scale(0.95)",
            filter: showImage ? "blur(0px)" : "blur(6px)",
            transition: "all .9s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <Image src="/WTB.png" alt="WTB" fill className="object-contain" />
        </div>

        <div
          className="relative aspect-square h-auto sm:h-[520px] w-full rounded-2xl bg-white"
          style={{
            opacity: showImage ? 1 : 0,
            transform: showImage
              ? "translateY(0px) scale(1)"
              : "translateY(80px) scale(0.95)",
            filter: showImage ? "blur(0px)" : "blur(6px)",
            transition: "all .9s cubic-bezier(.22,1,.36,1)",
            transitionDelay: "250ms",
          }}
        >
          <Image src="/deal.png" alt="Deal" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default CaraKerja;
