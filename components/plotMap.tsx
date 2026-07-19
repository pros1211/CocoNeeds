import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Polygon, Popup, useMap } from "react-leaflet";
export interface Plot {
  id: string;
  name: string;
  area: string;
  trees: number;
  coordinates: [number, number][];
}

interface PlotMapProps {
  plots: Plot[];
  activePlot: string | null;
  onPlotClick: (id: string) => void;
}
const MapControl = ({
  activePlot,
  plots,
}: {
  activePlot: string | null;
  plots: Plot[];
}) => {
  const map = useMap();
  useEffect(() => {
    if (activePlot) {
      const selected = plots.find((p) => p.id === activePlot);
      if (selected) {
        map.flyTo(selected.coordinates[0], 18, { duration: 1.5 });
      }
    }
  }, [activePlot, map, plots]);
  return null;
};
const PlotMap = ({ plots, activePlot, onPlotClick }: PlotMapProps) => {
  const center = [-6.9147, 107.6098];
  return (
    <MapContainer
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      center={center as any}
      zoom={16}
      className="w-full h-full rounded-2xl z-0"
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
      />
      <MapControl activePlot={activePlot} plots={plots} />
      {plots.map((plot) => {
        const isActive = activePlot === plot.id;
        return (
          <Polygon
            key={plot.id}
            positions={plot.coordinates}
            pathOptions={{
              color: isActive ? "#269957" : "#FFFFFF",
              weight: isActive ? 4 : 2,
              fillOpacity: isActive ? 0.4 : 0.1,
            }}
            eventHandlers={{
              click: () => onPlotClick(plot.id),
            }}
          >
            <Popup>
              <strong>{plot.name}</strong> <br />
              Area: {plot.area}
            </Popup>
          </Polygon>
        );
      })}
    </MapContainer>
  );
};

export default PlotMap;
