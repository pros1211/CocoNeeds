import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExchangeWidget = () => {
  return (
    <div className="flex flex-col w-full p-5 gap-6 bg-white rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[#2C694E] font-semibold text-md">
            Tukar EcoPoint
          </h3>
          <span className="text-xs font-medium">
            Tukar poinmu menjadi hal bernilai
          </span>
        </div>
        <Link
          href="/farmer-portal/tradeMission"
          className="text-[#609D7F] font-semibold"
        >
          Lihat semua
        </Link>
      </div>
      <div className="flex flex-col gap-1 overflow-y-auto max-h-[300px]">
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
          <div className="flex gap-4 items-center">
            <Image src="/token.png" width={80} height={80} alt="reward icon" />
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-800 text-md font-bold">
                Token Listrik Rp.10.000
              </h4>
              <span className="text-[#2C694E] font-semibold">1.000 poin</span>
            </div>
          </div>
          <Link
            href="/farmer-portal/tradeMission"
            className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2"
          >
            Tukar
          </Link>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
          <div className="flex gap-4 items-center">
            <Image src="/token.png" width={80} height={80} alt="reward icon" />
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-800 text-md font-bold">
                Token Listrik Rp.10.000
              </h4>
              <span className="text-[#2C694E] font-semibold">1.000 poin</span>
            </div>
          </div>
          <Link
            href="/farmer-portal/tradeMission"
            className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2"
          >
            Tukar
          </Link>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
          <div className="flex gap-4 items-center">
            <Image src="/token.png" width={80} height={80} alt="reward icon" />
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-800 text-md font-bold">
                Token Listrik Rp.10.000
              </h4>
              <span className="text-[#2C694E] font-semibold">1.000 poin</span>
            </div>
          </div>
          <Link
            href="/farmer-portal/tradeMission"
            className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2"
          >
            Tukar
          </Link>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
          <div className="flex gap-4 items-center">
            <Image src="/token.png" width={80} height={80} alt="reward icon" />
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-800 text-md font-bold">
                Token Listrik Rp.10.000
              </h4>
              <span className="text-[#2C694E] font-semibold">1.000 poin</span>
            </div>
          </div>
          <Link
            href="/farmer-portal/tradeMission"
            className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2"
          >
            Tukar
          </Link>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
          <div className="flex gap-4 items-center">
            <Image src="/token.png" width={80} height={80} alt="reward icon" />
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-800 text-md font-bold">
                Token Listrik Rp.10.000
              </h4>
              <span className="text-[#2C694E] font-semibold">1.000 poin</span>
            </div>
          </div>
          <Link
            href="/farmer-portal/tradeMission"
            className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2"
          >
            Tukar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExchangeWidget;
