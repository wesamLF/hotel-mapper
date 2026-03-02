import { useEffect, } from "react";
import { useMap } from "react-leaflet";

export function MapCenterUpdater({ lat, lng }: { lat: number, lng: number }) {
  const map = useMap();

  useEffect(() => {

    map.setView([lat, lng], map.getZoom(), { animate: true });


  }, [lat, lng]);
  return null;
}
