"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  Wind,
  Loader2,
  MapPin,
  AlertCircle,
  Droplets,
} from "lucide-react";
import LocalDate from "./localDate";
interface WeatherData {
  temperature_2m: number;
  weather_code: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
}
const getWeatherDetails = (code: number) => {
  if (code == 0)
    return { text: "Clear Sky", icon: Sun, color: "text-yellow-500" };
  if (code == 1 || code == 2 || code == 3)
    return { text: "Cloudy", icon: Cloud, color: "text-gray-500" };
  if (code >= 51 && code <= 67)
    return { text: "Rain", icon: CloudRain, color: "text-blue-400" };
  if (code >= 95)
    return {
      text: "Thunderstorm",
      icon: CloudLightning,
      color: "text-purple-500",
    };
  return { text: "Unknown", icon: Cloud, color: "text-gray-400" };
};
const Weather = () => {
  // use state to store data
  const [weatherStat, setWeather] = useState<WeatherData | null>(null);
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locationName, setLocationName] = useState<string>("Local Weather");
  const fetchUserLocation = useCallback(() => {
    setLoading(true);
    setError(null);
    if (!navigator.geolocation) {
      setError("Location feature is not supported by your browser.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setCoordinates({ lat, lon });
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
          );
          if (!response.ok) throw new Error("failed to fetch weather data");
          const data = await response.json();
          setWeather(data.current);
          const geoResponse = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
          );
          if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            const exactLocation =
              geoData.city || geoData.locality || geoData.principalSubdivision;

            if (exactLocation) {
              setLocationName(exactLocation);
            }
          }
        } catch (err) {
          setError("Failed to load weather data. Please try again.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Location access denied. please enable GPS");
        setLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      },
    );
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUserLocation();
  }, [fetchUserLocation]);
  return (
    <div className="flex flex-col p-6 shadow-sm bg-white gap-6 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800 text-lg">Local Weather</h3>
        <button
          onClick={fetchUserLocation}
          className="flex items-center gap-1.5 text-xs font-medium bg-[#2d6a4f]/10 text-[#2d6a4f] px-3 py-1.5 rounded-full hover:bg-[#2d6a4f]/20 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5" />
          {loading ? "Locating..." : "Update GPS"}
        </button>
      </div>
      <LocalDate />
      {error && (
        <div className="flex items-start gap-2 bg-red-50 text-red-600 p-3 rounded-xl text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}
      {loading && !error && (
        <div className="flex flex-col items-center justify-center py-8 opacity-50">
          <Loader2 className="w-8 h-8 animate-spin text-[#2d6a4f] mb-2" />
          <span className="text-sm">Syncing with satellite...</span>
        </div>
      )}
      {weatherStat && !loading && !error && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <div>
              <div className="text-5xl font-bold text-gray-900 tracking-tighter">
                {Math.round(weatherStat.temperature_2m)}°
                <span className="text-3xl text-gray-400">C</span>
              </div>
              <p className="text-gray-500 font-medium mt-1">
                {getWeatherDetails(weatherStat.weather_code).text}
              </p>
            </div>

            {React.createElement(
              getWeatherDetails(weatherStat.weather_code).icon,
              {
                className: `w-16 h-16 ${getWeatherDetails(weatherStat.weather_code).color}`,
              },
            )}
          </div>

          {/* Secondary Stats (Wind & Humidity) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <Wind className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium">Wind</span>
                <span className="text-sm font-bold text-gray-700">
                  {weatherStat.wind_speed_10m} km/h
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <Droplets className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium">
                  Humidity
                </span>
                <span className="text-sm font-bold text-gray-700">
                  {weatherStat.relative_humidity_2m}%
                </span>
              </div>
            </div>
          </div>

          {coordinates && (
            <div className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-2">
              Lat: {coordinates.lat.toFixed(4)} | Lon:{" "}
              {coordinates.lon.toFixed(4)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
