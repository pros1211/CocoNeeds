"use client";
import React, { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Koperasi } from "@/constants/wasteData";
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const MapUpdater = ({
  coordinates,
}: {
  coordinates: [number, number] | null;
}) => {
  useEffect(() => {
    console.log("Map Mounted");

    return () => {
      console.log("Map Unmounted");
    };
  }, []);
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.flyTo(coordinates, 13, { duration: 1.5 });
    }
  }, [coordinates, map]);
  return null;
};
interface MapProps {
  koperasiData: Koperasi[];
  selectedKoperasi: Koperasi | null;
}
const MapKopdes = ({ koperasiData, selectedKoperasi }: MapProps) => {
  // koordinat maluku
  const defaultCenter: [number, number] = [-3.2384, 129.2806];
  const center = useMemo(() => {
    if (!selectedKoperasi) return null;

    return [selectedKoperasi.latitude, selectedKoperasi.longitude] as [
      number,
      number,
    ];
  }, [selectedKoperasi]);
  return (
    <div className="h-full w-full rounded-xl overflow-hidden z-0 relative">
      <MapContainer
        center={defaultCenter}
        zoom={8}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater
          key={selectedKoperasi?.id ?? "default"}
          coordinates={center}
        />
        {koperasiData.map((kop) => (
          <Marker
            key={kop.id}
            position={[kop.latitude, kop.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="font-sans">
                <p className="font-bold text-[#1F4D36] m-0">{kop.nama}</p>
                <p className="text-sm m-0 text-gray-600">
                  {kop.desa}, {kop.kecamatan}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapKopdes;
