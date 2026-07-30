import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
const productRecommend = [
  {
    title: "Kopra",
    value: "680 Kg",
    percent: "20%",
    icon: "/coconut.png",
  },
  {
    title: "VCO",
    value: "200 Liter",
    percent: "30%",
    icon: "/vco.png",
  },
  {
    title: "Cocopeat",
    value: "100 Kg",
    percent: "25%",
    icon: "/cocopeat.png",
  },
  {
    title: "Kopra Putih",
    value: "120 Kg",
    percent: "25%",
    icon: "/kopraPutih.png",
  },
];
import { VscSparkle } from "react-icons/vsc";
import Image from "next/image";
import { ChartNoAxesCombined } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
const ProductAllo = () => {
  return (
    <Card className="bg-white px-1 py-5 rounded-2xl flex flex-col gap-4">
      <CardHeader className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle className="font-semibold text-lg text-[#269957]">
            Alokasi Produksi
          </CardTitle>
          <CardDescription className="text-xs text-gray-600 font-medium">
            rekomendasi produk untuk diproduksi
          </CardDescription>
        </div>
        <Link
          href="#"
          className="flex rounded-lg items-center gap-2 text-white bg-[#269957] p-2 text-xs font-semibold"
        >
          <VscSparkle className="w-4 h-4" />
          Tanyakan
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row items-center gap-2">
          {productRecommend.map((data, index) => (
            <div className="flex flex-col gap-3 text-center py-2" key={index}>
              <Image src={data.icon} width={70} height={70} alt={data.title} />
              <span className="font-semibold whitespace-nowrap">
                {data.title}
              </span>
              <span className="text-md text-[#269957] font-semibold">
                {data.value}
              </span>
              <span className="tetx-sm text-[#269957] rounded-lg font-medium bg-[#EEF8F2]">
                {data.percent}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-gray-200 p-2">
          <ChartNoAxesCombined className="w-12 h-12 text-[#269957] bg-[#EEF8F2] py-1 rounded-md" />
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-1 text-lg font-semibold">
              {formatRupiah(28000000)}{" "}
            </span>
            <span className="text-sm text-[#269957]/80 font-medium">
              +12% dari bulan lalu
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <button className="w-full text-white bg-[#269957] p-2 rounded-lg text-md font-semibold">
          Lihat alokasi
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductAllo;
