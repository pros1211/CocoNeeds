import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Droplet, Leaf, Target } from "lucide-react";
const summaryData = [
  {
    id: "1",
    name: "Coconut Shell",
    weight: 25,
    points: 500,
    condition: "Dry",
    quality: "Good",
    moisture: "< 10%",
    notes: "Clean and sorted shell pieces",
    photos: ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg"],
    extraPhotos: 2,
    icon: <Target className="w-4 h-4 lg:w-5 lg:h-5 text-[#269957]" />,
    thumbnail: "https://placehold.co/100x100/8B5A2B/FFF?text=Shell",
  },
  {
    id: "2",
    name: "Coconut Husk",
    weight: 20,
    points: 300,
    icon: <Leaf className="w-4 h-4 lg:w-5 lg:h-5 text-[#269957]" />,
    thumbnail: "https://placehold.co/100x100/D2B48C/FFF?text=Husk",
  },
  {
    id: "3",
    name: "Coconut Water",
    weight: 15,
    points: 120,
    icon: <Droplet className="w-4 h-4 lg:w-5 lg:h-5 text-[#269957]" />,
    thumbnail: "https://placehold.co/100x100/98FB98/FFF?text=Water",
  },
];
const WasteSummary = () => {
  return (
    <div className="flex flex-col gap-6 w-full shadow-md rounded-xl p-5 bg-white">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl text-gray-900">Limbah ditukarkan</h2>
        <p className="text-sm text-gray-500">
          Periksa kembali data limbah yang akan kamu tukarkan.
        </p>
      </div>

      {/* Accordion List */}
      <Accordion className="flex flex-col gap-4 w-full">
        {summaryData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all data-[state=open]:border-[#269957] data-[state=open]:bg-[#F4FBF7] px-4"
          >
            <AccordionTrigger className="hover:no-underline px-0 py-4">
              {/* ================= MOBILE ================= */}

              <div className="flex lg:hidden w-full flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-10 h-10 rounded-xl object-cover border"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-md">{item.name}</h3>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="bg-white rounded-full p-1 shadow border">
                        {item.icon}
                      </div>

                      <span className="text-md text-gray-500">
                        Jenis limbah
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-50 p-2">
                    <p className="text-xs text-gray-500">Berat total</p>

                    <h4 className="font-bold text-lg">{item.weight} kg</h4>
                  </div>

                  <div className="rounded-xl bg-green-50 p-2">
                    <p className="text-xs text-gray-500">EcoPoints</p>

                    <h4 className="font-bold text-lg text-[#269957]">
                      {item.points} pts
                    </h4>
                  </div>
                </div>
              </div>

              {/* ================= DESKTOP ================= */}

              <div className="hidden lg:flex w-full items-center justify-between pr-4">
                <div className="flex items-center gap-5 w-[40%]">
                  <img
                    src={item.thumbnail}
                    className="w-16 h-16 rounded-2xl border"
                  />

                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-full p-3 shadow border">
                      {item.icon}
                    </div>

                    <h3 className="font-bold text-xl">{item.name}</h3>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-500 font-semibold">Total Weight</p>

                  <h2 className="text-xl font-bold">{item.weight} kg</h2>
                </div>

                <div className="text-right">
                  <p className="text-gray-500 font-semibold">
                    Estimated EcoPoints
                  </p>

                  <h2 className="text-xl font-bold text-[#269957]">
                    {item.points} pts
                  </h2>
                </div>
              </div>
            </AccordionTrigger>

            {/* --- CONTENT (DETAILS) --- */}
            <AccordionContent className="pb-4">
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm mt-2 flex justify-between items-start">
                <div className="flex gap-8 items-start divide-x divide-gray-100 w-full">
                  {/* Condition */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-500">
                      Condition
                    </span>
                    <span className="bg-[#F4FBF7] text-[#269957] px-3 py-1 rounded-full text-xs font-bold border border-[#E8F5EE] w-fit">
                      {item.condition || "-"}
                    </span>
                  </div>

                  {/* Quality */}
                  <div className="flex flex-col gap-2 pl-8">
                    <span className="text-xs font-semibold text-gray-500">
                      Quality
                    </span>
                    <span className="bg-[#F4FBF7] text-[#269957] px-3 py-1 rounded-full text-xs font-bold border border-[#E8F5EE] w-fit">
                      {item.quality || "-"}
                    </span>
                  </div>

                  {/* Moisture */}
                  <div className="flex flex-col gap-2 pl-8">
                    <span className="text-xs font-semibold text-gray-500">
                      Moisture
                    </span>
                    <span className="text-sm font-semibold text-gray-800 mt-1">
                      {item.moisture || "-"}
                    </span>
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-2 pl-8 flex-1">
                    <span className="text-xs font-semibold text-gray-500">
                      Notes
                    </span>
                    <span className="text-sm font-medium text-gray-700 mt-1">
                      {item.notes || "-"}
                    </span>
                  </div>
                </div>

                {/* Photos (Right Aligned) */}
                {item.photos && (
                  <div className="flex flex-col gap-2 pl-8 border-l border-gray-100 shrink-0">
                    <span className="text-xs font-semibold text-gray-500">
                      Photos ({item.photos.length + (item.extraPhotos || 0)})
                    </span>
                    <div className="flex gap-2 mt-1">
                      {item.photos.map((photo, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-12 rounded-lg bg-gray-200 border border-gray-300 overflow-hidden"
                        >
                          <img
                            src={photo}
                            alt="waste"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {item.extraPhotos && (
                        <div className="w-12 h-12 rounded-lg border border-dashed border-gray-300 flex items-center justify-center bg-gray-50 text-sm font-bold text-gray-600">
                          +{item.extraPhotos}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WasteSummary;
