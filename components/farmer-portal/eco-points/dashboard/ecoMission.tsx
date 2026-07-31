import Image from "next/image";
import Link from "next/link";
import React from "react";
const EcoMission = () => {
  return (
    <div className="flex flex-col w-full p-5 gap-6 bg-white rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[#2C694E] font-semibold text-md">
            Cara mendapatkan EcoPoint
          </h3>
          <span className="text-xs font-medium">
            kerjakan misi dan dapatkan poinnya
          </span>
        </div>
        <Link
          href="/farmer-portal/tradeMission"
          className="text-[#609D7F] font-semibold"
        >
          Lihat semua
        </Link>
      </div>
      <div className="p-3 flex flex-col rounded-lg shadow-sm border border-gray-200 bg-white">
        <div className="flex justify-between items-center border-b border-gray-400">
          <div className="py-2 flex items-center gap-4">
            <Image
              src="/dataPanen.png"
              width={80}
              height={80}
              alt="icon mission"
            />
            <div className="flex flex-col gap-1">
              <h4 className="capitalize text-md font-semibold">
                Isi data panen
              </h4>
              <p className="text-xs font-medium tracking-wider">
                Catat hasil panenmu hari ini
              </p>
            </div>
          </div>
          <span className="text-[#3BA275] font-semibold">+20 poin</span>
        </div>
      </div>
      <div className="p-3 flex flex-col rounded-lg shadow-sm border border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b border-gray-400 ">
          <div className="py-2 flex items-center gap-4">
            <Image
              src="/dataProduksi.png"
              width={80}
              height={80}
              alt="icon mission"
            />
            <div className="flex flex-col gap-1">
              <h4 className="capitalize text-md font-semibold">
                Isi laporan produksi
              </h4>
              <p className="text-xs font-medium tracking-wider">
                Catat hasil laporan produksi untuk dianalisis
              </p>
            </div>
          </div>
          <span className="text-[#3BA275] font-semibold">+30 poin</span>
        </div>
      </div>
      <div className="p-3 flex flex-col rounded-lg shadow-sm bg-white border border-gray-200">
        <div className="flex items-center justify-between border-b border-gray-400">
          <div className="py-2 flex items-center gap-4">
            <Image
              src="/dataPerawatan.png"
              width={80}
              height={80}
              alt="icon mission"
            />
            <div className="flex flex-col gap-1">
              <h4 className="capitalize text-md font-semibold">
                pemupukan organik
              </h4>
              <p className="text-xs font-medium tracking-wider">
                Gunakan pupuk organik untuk pohonmu
              </p>
            </div>
          </div>
          <span className="text-[#3BA275] font-semibold">+15 poin</span>
        </div>
      </div>
      <div className="p-3 flex flex-col rounded-lg shadow-sm bg-white border border-gray-200">
        <div className="border-b border-gray-400 flex items-center justify-between">
          <div className=" py-2 flex items-center gap-4">
            <Image
              src="/water-drop.png"
              width={60}
              height={60}
              alt="icon mission"
            />
            <div className="flex flex-col gap-1">
              <h4 className="capitalize text-md font-semibold">
                Perawatan irigasi
              </h4>
              <p className="text-xs font-medium tracking-wider">
                Siram lahanmu hari ini
              </p>
            </div>
          </div>
          <span className="text-[#3BA275] font-semibold">+5 poin</span>
        </div>
      </div>
    </div>
  );
};

export default EcoMission;
