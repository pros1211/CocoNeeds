"use client";
import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function LocalDate() {
  const [dateStr, setDateStr] = useState<string>("");
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setDateStr(
        now.toLocaleDateString("id-ID", {
          weekday: "short",
          day: "2-digit",
          month: "short",
        }),
      );

      setTimeStr(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateDateTime();

    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!dateStr || !timeStr) {
    return (
      <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm min-w-[120px] h-[40px] animate-pulse">
        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
        <div className="w-16 h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-500 text-sm font-medium">{dateStr}</span>

      <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm text-gray-700 text-sm font-medium">
        <Clock className="w-4 h-4" />
        <span suppressHydrationWarning>{timeStr}</span>
      </div>
    </div>
  );
}
