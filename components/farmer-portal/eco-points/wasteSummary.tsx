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
    icon: <Target className="w-5 h-5 text-[#269957]" />,
    thumbnail: "https://placehold.co/100x100/8B5A2B/FFF?text=Shell",
  },
  {
    id: "2",
    name: "Coconut Husk",
    weight: 20,
    points: 300,
    icon: <Leaf className="w-5 h-5 text-[#269957]" />,
    thumbnail: "https://placehold.co/100x100/D2B48C/FFF?text=Husk",
  },
  {
    id: "3",
    name: "Coconut Water",
    weight: 15,
    points: 120,
    icon: <Droplet className="w-5 h-5 text-[#269957]" />,
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
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex w-full items-center justify-between pr-4">
                {/* Left: Image & Name */}
                <div className="flex items-center gap-4 w-1/3">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover border border-gray-200"
                  />
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                      {item.icon}
                    </div>
                    <span className="font-bold text-gray-900 text-lg">
                      {item.name}
                    </span>
                  </div>
                </div>

                {/* Middle: Weight */}
                <div className="flex flex-col items-center w-1/3">
                  <span className="text-xs font-semibold text-gray-500">
                    Total Weight
                  </span>
                  <span className="font-bold text-gray-900 text-lg">
                    {item.weight} kg
                  </span>
                </div>

                {/* Right: EcoPoints */}
                <div className="flex flex-col items-end w-1/3 text-right">
                  <span className="text-xs font-semibold text-gray-500">
                    Estimated EcoPoints
                  </span>
                  <span className="font-bold text-[#269957] text-lg">
                    {item.points} pts
                  </span>
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
