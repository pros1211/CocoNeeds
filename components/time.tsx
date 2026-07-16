"use client";
import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
export default function Time() {
  const [timeStr, setTimeStr] = useState<string>("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-sm text-gray-700 text-sm font-medium">
      <Clock />
      <span>{timeStr}</span>
    </div>
  );
}
