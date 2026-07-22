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
        <button className="text-[#609D7F] font-semibold">Lihat semua</button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center shadow-xs border border-gray-200 p-3 rounded-lg">
          <div className="flex flex-col gap-1">
            <h4 className="text-gray-800 text-md font-bold">Pulsa Rp.10.000</h4>
            <span className="text-[#2C694E] font-semibold">1.000 poin</span>
          </div>
          <button className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2">
            Tukar
          </button>
        </div>
        <div className="flex justify-between items-center shadow-xs border border-gray-200 p-3 rounded-lg">
          <div className="flex flex-col gap-1">
            <h4 className="text-gray-800 text-md font-bold">Pulsa Rp.10.000</h4>
            <span className="text-[#2C694E] font-semibold">1.000 poin</span>
          </div>
          <button className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2">
            Tukar
          </button>
        </div>
        <div className="flex justify-between items-center shadow-xs border border-gray-200 p-3 rounded-lg">
          <div className="flex flex-col gap-1">
            <h4 className="text-gray-800 text-md font-bold">Pulsa Rp.10.000</h4>
            <span className="text-[#2C694E] font-semibold">1.000 poin</span>
          </div>
          <button className=" text-white rounded-lg text-sm font-semibold bg-[#2D6A4F]/80 p-2">
            Tukar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeWidget;
