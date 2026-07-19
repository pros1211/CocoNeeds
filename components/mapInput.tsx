"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import React from "react";
interface DrawingMapProps {
  onDrawComplete: (coordinates: [number, number][]) => void;
}
const MapInput = ({ onDrawComplete }: DrawingMapProps) => {
  const center = [-6.9147, 107.6098];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreated = (e: any) => {
    const layer = e.layer;
    const rawCoords = layer.getLatLngs()[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedCoords = rawCoords.map((coord: any) => [
      coord.lat,
      coord.lng,
    ]);

    onDrawComplete(formattedCoords);
  };
  return (
    <MapContainer
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      center={center as any}
      zoom={16}
      className="w-full h-[300px] rounded-md z-0"
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
      />
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handleCreated}
          draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon: {
              allowIntersection: false,
              shapeOptions: { color: "#269957", weight: 3, fillOpacity: 0.4 },
            },
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
};

export default MapInput;
