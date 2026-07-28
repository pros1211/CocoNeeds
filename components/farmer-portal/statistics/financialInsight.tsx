import React from "react";
import { VscSparkleCompact } from "react-icons/vsc";
import Image from "next/image";

type InsightColor = "red" | "green" | "orange" | "blue";

type Insight = {
  text: string;
  desc: string;
  icon: string;
  rec: string;
  color: InsightColor;
};

const insight: Insight[] = [
  {
    text: "Kenaikan harga",
    desc: "Kenaikan harga pupuk organik +20%",
    icon: "/fertilizer.png",
    color: "red",
    rec: "Beralih ke pupuk kimia sementara.",
  },
  {
    text: "Peluang Pasar",
    desc: "Harga kopra diprediksi naik 4% dalam lima hari.",
    icon: "/coconut.png",
    color: "green",
    rec: "Tunda penjualan hingga hari Jumat.",
  },
  {
    text: "Potensi keuntungan",
    desc: "Masih ada stok 300 Kg tempurung kelapa yang bisa ditukar.",
    icon: "/income.png",
    color: "orange",
    rec: "Jual ke marketplace Coconeeds.",
  },
  {
    text: "Efisiensi operasional",
    desc: "Pengeluaran operasional berkurang 6%.",
    icon: "/sprout.png",
    color: "blue",
    rec: "Pertahankan strategi pemupukan saat ini.",
  },
];

const colorStyle = {
  red: "bg-red-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
  blue: "bg-blue-500",
};

const FinancialInsight = () => {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <VscSparkleCompact className="h-5 w-5 text-[#269957]" />
            <h2 className="text-lg font-bold">AI Financial Advisor</h2>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Insight otomatis berdasarkan data pemasukan, pengeluaran, harga
            pasar dan aktivitas operasional kebun Anda.
          </p>
        </div>

        <button className="self-start font-semibold text-[#269957] hover:underline">
          Tanyakan
        </button>
      </div>

      <div
        className="
          mt-4
          flex
          flex-col
          gap-3

          lg:max-h-[500px]
          lg:overflow-y-auto
          lg:pr-2
        "
      >
        {insight.map((item, index) => (
          <div
            key={index}
            className="relative flex
              items-start
              gap-3 rounded-2xl
              border border-gray-200
              bg-white
              p-3
              sm:p-4
              shadow-sm
              transition-all
              hover:shadow-md
            "
          >
            <div
              className={`
                absolute
                left-0
                top-0
                h-full
                w-1
                rounded-l-2xl
                ${colorStyle[item.color]}
              `}
            />

            <Image
              src={item.icon}
              width={64}
              height={64}
              alt={item.text}
              className="
                h-16
                w-16
                shrink-0
                object-contain
              "
            />

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold">{item.text}</h3>

              <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>

              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                {item.rec}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialInsight;
