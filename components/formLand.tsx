"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Dynamically import the drawing map so Next.js doesn't crash on the server
const DynamicDrawingMap = dynamic(() => import("@/components/mapInput"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] bg-gray-100 animate-pulse rounded-md flex items-center justify-center text-sm text-gray-500">
      Loading Satellite Editor...
    </div>
  ),
});

export const FormLand = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState<[number, number][] | null>(
    null,
  );
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    trees: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!coordinates) {
      alert("Please draw your land boundaries on the map first!");
      return;
    }

    const newPlot = {
      id: `plot-${Date.now()}`,
      name: formData.name,
      area: formData.area + " Ha",
      trees: Number(formData.trees),
      coordinates: coordinates,
    };

    console.log("Saving new land to database:", newPlot);
    setIsOpen(false);
    setCoordinates(null);
    setFormData({ name: "", area: "", trees: "" });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-sm font-medium bg-[#269957] text-white px-4 py-2 rounded-lg hover:bg-[#1e7a45] transition-colors">
        + Add Land
      </SheetTrigger>

      <SheetContent className="overflow-y-auto sm:max-w-2xl p-5">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold">
            Register New Land
          </SheetTitle>
          <SheetDescription>
            Trace the borders of your land on the map and enter your plantation
            details below.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label className="font-semibold text-gray-700">
              1. Draw Land Boundaries
            </Label>
            <div className="border rounded-md overflow-hidden shadow-sm">
              <DynamicDrawingMap
                onDrawComplete={(coords) => setCoordinates(coords)}
              />
            </div>
            {coordinates && (
              <span className="text-xs text-green-600 font-medium mt-1">
                ✓ Boundaries captured successfully!
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="font-semibold text-gray-700">
              2. Land Name
            </Label>
            <Input
              id="name"
              placeholder="e.g. Lahan Utara (Coconut)"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <Label htmlFor="area" className="font-semibold text-gray-700">
                Area (Hectares)
              </Label>
              <Input
                id="area"
                type="number"
                step="0.1"
                placeholder="e.g. 1.5"
                required
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <Label htmlFor="trees" className="font-semibold text-gray-700">
                Number of Trees
              </Label>
              <Input
                id="trees"
                type="number"
                placeholder="e.g. 250"
                required
                value={formData.trees}
                onChange={(e) =>
                  setFormData({ ...formData, trees: e.target.value })
                }
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            className="w-full bg-[#269957] hover:bg-[#1e7a45] text-white mt-4 py-6 text-lg"
          >
            Save Land Details
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};
