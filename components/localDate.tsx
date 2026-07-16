"use client";
import React, { useState, useEffect } from "react";

export default function LocalDate() {
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setDateStr(
        now.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        }),
      );
    };

    updateDateTime();

    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!dateStr) {
    return (
      <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm min-w-[120px] h-[40px] animate-pulse">
        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
        <div className="w-16 h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return <span className="text-gray-500 text-lg font-semibold">{dateStr}</span>;
}
