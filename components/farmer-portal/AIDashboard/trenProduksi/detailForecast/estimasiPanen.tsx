import React from "react";
import Image from "next/image";
import {
  Box,
  CalendarDays,
  CirclePile,
  Clock,
  TimelineIcon,
  TreePalm,
  TrendingUp,
} from "lucide-react";
import { VscSparkleCompact } from "react-icons/vsc";
const statusLahan = [
  {
    icon: "/irigasi.png",
    title: "Kelembapan tanah",
    value: "78%",
    status: "optimal",
  },
  {
    icon: "/pH.png",
    title: "pH tanah",
    value: "6.3",
    status: "optimal",
  },
  {
    icon: "/irigasi.png",
    title: "Risiko hama",
    value: "rendah",
    status: "rendah",
  },
  {
    icon: "/coco.png",
    title: "tingkat gugur buah",
    value: "12%",
    status: "rendah",
  },
];
const produkPotensial = [
  {
    icon: "/kopraPutih.png",
    product: "kopra putih",
    value: "3 Ton",
  },
  {
    icon: "/vco.png",
    product: "virgin coconut oil",
    value: "900 Liter",
  },
  {
    icon: "/cocopeat.png",
    product: "coco peat",
    value: "1.3 Ton",
  },
  {
    icon: "/cocopeat.png",
    product: "minyak kelapa",
    value: "1.100 liter",
  },
];
const harvestSchedule = [
  {
    icon: CalendarDays,
    title: "rentang waktu panen",
    value: "20 Jul – 5 Agu 2026",
    subtitle: "16 Hari",
  },
  {
    icon: Clock,
    title: "perkiraan puncak panen",
    value: "25 Jul – 30 Jul 2026",
    subtitle: "5 Hari",
  },
];
const EstimasiPanen = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-300 rounded-3xl bg-white shadow-sm overflow-hidden">
      {/* estimasi total  panen*/}
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center gap-2">
          <CirclePile className="text-[#269957] bg-[#EEF8F2] p-1 rounded-full w-8 h-8" />
          <div className="flex flex-col">
            <h2 className="font-semibold">Estimasi hasil panen</h2>

            <p className="text-sm text-gray-500">Prediksi hasil panen</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/crate.png" width={120} height={100} alt="Coconut icon" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-end gap-2">
                <span className="text-4xl flex items-end gap-2 font-semibold text-[#269957]">
                  12.4
                </span>
                <span className="text-lg font-semibold">Ton</span>
              </div>
              <p className="text-sm font-medium text-gray-500">
                total hasil kelapa/kopra
              </p>
              <span className="bg-[#EEF8F2] max-w-fit p-2 text-[#269957] text-xs font-semibold rounded-lg">
                +8.4% dibanding bulan lalu
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-green-100 bg-[#F8FCF9] p-5">
          <div className="flex items-center gap-3">
            <Image
              src="/vco.png"
              width={80}
              height={80}
              alt="recommend icon"
              className="rounded-full"
            />

            <div className="flex-1">
              <p className="text-sm font-semibold text-[#269957]">
                Rekomendasi produk
              </p>

              <h3 className="mt-2 text-lg font-semibold">Virgin Coconut Oil</h3>

              <p className="mt-1 text-md font-semibold text-[#269957]">
                Estimasi 900 Liter
              </p>

              <p className=" text-sm text-gray-600">
                VCO menjadi produk dengan harga jual tertinggi dan estimasi
                bahan baku VCO tertinggi di periode ini.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* estimasi & kondisi siap panen */}
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center gap-3">
          <TreePalm />
          <div className="flex flex-col">
            <h2 className="flex gap-2 font-semibold text-lg lg:text-xl">
              Estimasi siap panen
            </h2>

            <p className="text-sm text-gray-500">Prediksi hasil panen</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-4xl text-[#269957] font-semibold">82%</span>
          <p className="text-xs font-medium text-white bg-[#269957] max-w-fit p-2 text-center rounded-md">
            Mayoritas siap panen
          </p>
        </div>
        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-[#269957]"
            style={{
              width: `${(82 / 100) * 100}%`,
            }}
          />
        </div>
        <div className="flex flex-col gap-2 px-2 divide-y divide-gray-300">
          {statusLahan.map((data, index) => (
            <div
              key={index}
              className="flex items-center justify-between  rounded-lg px-2 py-1"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={data.icon}
                  width={40}
                  height={40}
                  alt="condition icon"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-md font-semibold">{data.title}</span>
                  <span className="text-sm text-[#269957] font-semibold">
                    {data.status}
                  </span>
                </div>
              </div>
              <span className="font-semibold text-sm">{data.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* estimasi waktu panen */}
      <div className="flex flex-col h-full p-3 gap-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-[#EEF8F2] flex items-center justify-center">
            <CalendarDays className="text-[#269957]" size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-lg">Estimasi waktu panen</h2>

            <p className="text-xs text-gray-500">
              Informasi waktu panen terbaik
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {harvestSchedule.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-start gap-6">
                <div className="h-11 w-11 rounded-full bg-[#EEF8F2] flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#269957]" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-500">{item.title}</p>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-200" />

        {/* Production Trend */}

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#EEF8F2] flex items-center justify-center">
              <VscSparkleCompact className="text-[#269957]" size={20} />
            </div>

            <p className="font-semibold text-md">Produksi meningkat</p>
          </div>

          <p className="text-sm text-justify  text-gray-600">
            Produksi diperkirakan meningkat dibandingkan periode sebelumnya
            didukung kondisi lahan, cuaca dan kualitas pohon yang optimal
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-start gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F5EF]">
            <Box className="h-6 w-6 text-[#8A6335]" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Potential Products</h2>

            <p className="text-xs text-gray-500">
              Estimasi hasil olahan berdasarkan prediksi panen AI.
            </p>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {produkPotensial.map((data, index) => (
            <div key={index} className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <Image
                  src={data.icon}
                  alt={data.product}
                  width={46}
                  height={46}
                />

                <span className="font-medium text-sm text-gray-800">
                  {data.product}
                </span>
              </div>

              <span className="font-semibold text-sm text-gray-900">
                {data.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstimasiPanen;
