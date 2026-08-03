"use client";
import React, { useEffect, useRef, useState } from "react";
import CardMisi from "./cardMisi";
import CardReward from "./cardReward";
const dataMission = [
  {
    id: 1,
    title: "Login harian",
    description: "catat hasil panenmu hari ini",
    poin: "+10 EcoPoints",
    image: "/loginHarian.png",
    progress: 1,
    total: 1,
  },
  {
    id: 2,
    title: "Lakukan panen harian",
    description: "catat hasil panenmu hari ini",
    poin: "+10 EcoPoints",
    image: "/dataPanen.png",
    progress: 1,
    total: 1,
  },
  {
    id: 3,
    title: "Isi Laporan produksi",
    description: "catat hasil produksimu hari ini",
    poin: "+15 EcoPoints",
    image: "/dataProduksi.png",
    progress: 1,
    total: 1,
  },
  {
    id: 4,
    title: "Isi laporan harian",
    description: "catat observasi kondisi lahanmu hari ini",
    poin: "+5 EcoPoints",
    image: "/laporanHarian.png",
    progress: 1,
    total: 1,
  },
];
const dataReward = [
  {
    id: 1,
    title: "Pupuk Organik 10 Kg",
    description: "Pupuk organik berkualitas",
    poin: "1500 EcoPoints",
    image: "/pupuk.png",
    category: "pertanian",
  },
  {
    id: 2,
    title: "Bibit kelapa genjah",
    description: "Bibit kelapa genjah siap tanam 100 bibit",
    poin: "500 EcoPoints",
    image: "/bibit.png",
    category: "pertanian",
  },
  {
    id: 3,
    title: "Token listrik Rp. 50.000",
    description: "Token listrik untuk mendukung operasionalmu",
    poin: "1200 EcoPoints",
    image: "/token.png",
    category: "digital",
  },
  {
    id: 4,
    title: "Voucher Gopay Rp. 10.000",
    description: "Voucher Gopay senilai 10.000",
    poin: "1000 EcoPoints",
    image: "/gopay.png",
    category: "digital",
  },
];
const MisiReward = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <h2 className="text-[#3BA275] font-semibold text-3xl">
        Selesaikan Misi, Dapatkan EcoPoint
      </h2>
      <p className="font-gray-600 text-md font-medium">
        Selain menukarkan limbah, tingkatkan setiap aktivitas harian melalui
        misi sederhana untuk mendapat tambahan Ecopoint.
      </p>
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10"
      >
        {dataMission.map((mission, index) => (
          <CardMisi
            visible={visible}
            key={mission.id}
            mission={mission}
            index={index}
          />
        ))}
        {dataReward.map((reward, index) => (
          <CardReward
            index={index + dataMission.length}
            visible={visible}
            key={reward.id}
            reward={reward}
          />
        ))}
      </div>
    </div>
  );
};

export default MisiReward;
