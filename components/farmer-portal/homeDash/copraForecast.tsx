"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  Loader2,
  AlertCircle,
  Droplets,
} from "lucide-react";
// interface for store 5-day weather forecast
interface DailyForecast {
  time: string[];
  weather_code: number[];
}
// get weather codes to determines status condition for drying copra
const weatherForecast = (code: number) => {
  if (code <= 2) {
    return {
      status: "optimal",
      color: "bg-[#269957]/10 text-[#269957]",
      bar: "bg-[#269957]",
      icon: Sun,
    };
  }
  if (code === 3 || (code >= 45 && code <= 48)) {
    return {
      status: "fair",
      color: "bg-yellow-100 text-yellow-700",
      bar: "bg-yellow-400",
      icon: Cloud,
    };
  }
  return {
    status: "Poor",
    color: "bg-red-100 text-red-600",
    bar: "bg-red-500",
    icon: CloudRain,
  };
};
const CopraForecast = () => {
  const [forecast, setForecast] = useState<DailyForecast | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchForecast = useCallback(() => {
    setLoading(true);
    setError(null);
    const defaultLat = -6.9147;
    const defaultLon = 107.6098;
    const fetchAPI = async (lat: number, lon: number) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code&timezone=auto&forecast_days=5`,
        );
        if (!response.ok) throw new Error("failed to fetch weather forecast");
        const data = await response.json();
        setForecast(data.daily);
      } catch (err) {
        setError("failed to load forecast data");
      } finally {
        setLoading(false);
      }
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchAPI(position.coords.latitude, position.coords.longitude);
        },
        () => {
          fetchAPI(defaultLat, defaultLon);
        },
        { timeout: 10000 },
      );
    } else {
      fetchAPI(defaultLat, defaultLon);
    }
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchForecast();
  }, [fetchForecast]);
  const getSummaryMessage = () => {
    if (!forecast) return "";
    const todayCode = forecast.weather_code[0];
    if (todayCode <= 2)
      return "Perfect conditions to lay out copra today. Maximum sun exposure expected.";
    if (todayCode === 3 || (todayCode >= 45 && todayCode <= 48))
      return "High humidity expected. Drying process may take longer than usual.";
    return "High moisture risk today. Keep copra covered or use mechanical dryers.";
  };
  return (
    <div className="flex flex-col p-6 shadow-md bg-white gap-4 rounded-xl w-full h-full">
      <div className="flex items-center gap-3">
        <div className="bg-orange-100 p-2 rounded-xl">
          <Sun className="w-5 h-5 text-orange-500" />
        </div>
        <h3 className="font-semibold text-gray-800 text-lg">
          Copra Drying Forecast
        </h3>
      </div>

      {loading && (
        <div className="flex-1 flex flex-col items-center justify-center py-8 opacity-50">
          <Loader2 className="w-8 h-8 animate-spin text-[#2d6a4f] mb-2" />
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2 bg-red-50 text-red-600 p-3 rounded-xl text-sm mt-4">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {forecast && !loading && !error && (
        <>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">
            {getSummaryMessage()}
          </p>

          {/* 5-Day Timeline */}
          <div className="flex justify-between items-end h-full gap-2 mt-4">
            {forecast.time.map((dateString, index) => {
              const condition = weatherForecast(forecast.weather_code[index]);

              // Format date from "2026-07-18" to "Sat"
              const dateObj = new Date(dateString);
              const dayName =
                index === 0
                  ? "Hari ini"
                  : dateObj.toLocaleDateString("id-ID", { weekday: "long" });

              return (
                <div
                  key={dateString}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  {/* Status Tooltip/Badge */}
                  <div
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${condition.color}`}
                  >
                    {condition.status}
                  </div>

                  {/* Icon */}
                  <condition.icon
                    className={`w-5 h-5 ${condition.status === "Optimal" ? "text-yellow-500" : "text-gray-400"}`}
                  />

                  {/* Visual Bar Indicator */}
                  <div
                    className={`w-full h-1.5 rounded-full ${condition.bar} opacity-80`}
                  ></div>

                  {/* Day Name */}
                  <span className="text-xs font-semibold text-gray-600">
                    {dayName}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CopraForecast;
