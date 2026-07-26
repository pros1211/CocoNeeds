import React from "react";
import {
  Pencil,
  UserRound,
  User,
  Phone,
  MapPinHouse,
  Landmark,
  Building,
} from "lucide-react";
const DataInformation = () => {
  return (
    <div className="p-3 flex flex-col gap-6 rounded-lg border border-[#269957] bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#E8F5E9] p-2 rounded-lg">
            <UserRound className="w-6 h-6 text-[#269957]" />
          </div>
          <span className="text-lg font-bold text-gray-900">
            Informasi Petani
          </span>
        </div>
        <button className="flex items-center bg-white px-4 py-1.5 rounded-lg border border-[#269957] gap-2 hover:bg-[#E8F5E9] transition-colors">
          <Pencil className="w-4 h-4 text-[#269957]" />
          <span className="font-semibold text-sm text-[#269957]">Edit</span>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
          <div className="flex items-center gap-2.5 text-gray-500">
            <User className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Farmer Name</span>
          </div>
          <span className="text-sm font-medium text-gray-900 capitalize">
            Prospero Phelix
          </span>
        </div>

        {/* Row 2: Phone */}
        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
          <div className="flex items-center gap-2.5 text-gray-500">
            <Phone className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Phone Number</span>
          </div>
          <span className="text-sm font-medium text-gray-900">
            +62 812-3456-7890
          </span>
        </div>

        {/* Row 3: Address */}
        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
          <div className="flex items-center gap-2.5 text-gray-500">
            <MapPinHouse className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Address</span>
          </div>
          <span className="text-sm font-medium text-gray-900 capitalize leading-relaxed">
            Jalan Kelapa No. 45, Dusun Suka Makmur
          </span>
        </div>

        {/* Row 4: Village */}
        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
          <div className="flex items-center gap-2.5 text-gray-500">
            <Landmark className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Village</span>
          </div>
          <span className="text-sm font-medium text-gray-900 capitalize">
            Desa Suka Makmur
          </span>
        </div>

        {/* Row 5: District */}
        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
          <div className="flex items-center gap-2.5 text-gray-500">
            <Building className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">District</span>
          </div>
          <span className="text-sm font-medium text-gray-900 capitalize">
            Kecamatan Purwodadi
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataInformation;
