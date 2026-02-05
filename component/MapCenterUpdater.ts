import { useEffect, } from "react";
import { useMap } from "react-leaflet";

export function MapCenterUpdater({ center, lat, lng }: { center: [number, number], lat: number, lng: number }) {
  const map = useMap();

  useEffect(() => {

    map.setView(center, map.getZoom(), { animate: true });

  
  }, [lat, lng, map]);
  return null;
}
