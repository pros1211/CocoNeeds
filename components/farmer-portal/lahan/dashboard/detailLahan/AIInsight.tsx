import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { VscSparkle } from "react-icons/vsc";

const AIInsight = () => {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <VscSparkle className="w-5 h-5" />
        <CardTitle className="text-[#269957] font-semibold">
          AI Insight
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-md font-medium">
          Kondisi lahan sangat baik. kelembapan serta pH tanah berada pada level
          optimal. panen diperkirakan optimal 12 hari lagi dengan estimasi 510 -
          520 Kg
        </p>
      </CardContent>
    </Card>
  );
};

export default AIInsight;
