import React from "react";
import { ListTodo } from "lucide-react";
const ActiveMission = () => {
  return (
    <div className="flex flex-col p-4 shadow-md rounded-lg bg-white">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#609D7F]">Misi Pertumbuhan</h3>
        </div>
        <button className="text-[#609D7F] font-semibold">Lihat semua</button>
      </div>
      <div className="p-2 flex flex-col gap-1">
        <div className="flex items-center justify-between rounded-lg shadow-xs border border-gray-200 p-3 ">
          <div className="flex items-center gap-4">
            <span className="bg-[#B1F0CE] p-2 rounded-lg">
              <ListTodo className="w-8 h-8 rounded-lg text-[#2C694E]" />
            </span>
            <div className="flex flex-col gap-1">
              <h4 className="text-md font-semibold">Misi Harian</h4>
              <p className="text-xs font-medium">
                Input data perawatan lahan hari ini
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[#2C694E] text-sm">
              +10 poin
            </span>
            <button className="bg-[#B1F0CE] border border-[#2C694E] text-xs font-medium p-2 rounded-lg">
              Selesai
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg shadow-xs border border-gray-200 p-3 ">
          <div className="flex items-center gap-4">
            <span className="bg-[#B1F0CE] p-2 rounded-lg">
              <ListTodo className="w-8 h-8 rounded-lg text-[#2C694E]" />
            </span>
            <div className="flex flex-col gap-1">
              <h4 className="text-md font-semibold">Misi Mingguan</h4>
              <p className="text-xs font-medium">Lakukan pemupukan 3 kali</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[#2C694E] text-sm">
              +10 poin
            </span>
            <button className="bg-[#B1F0CE] border border-[#2C694E] text-xs font-medium p-2 rounded-lg">
              Selesai
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg shadow-xs border border-gray-200 p-3 ">
          <div className="flex items-center gap-4">
            <span className="bg-[#B1F0CE] p-2 rounded-lg">
              <ListTodo className="w-8 h-8 rounded-lg text-[#2C694E]" />
            </span>
            <div className="flex flex-col gap-1">
              <h4 className="text-md font-semibold">Misi Bulanan</h4>
              <p className="text-xs font-medium">Tanam 8 pohon di lahan anda</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[#2C694E] text-sm">
              +10 poin
            </span>
            <button className="bg-[#B1F0CE] border border-[#2C694E] text-xs font-medium p-2 rounded-lg">
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveMission;
