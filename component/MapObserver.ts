import { useMap } from "react-leaflet";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";

export default function MapObserver({ lat, lng, setLat, setLng }: {
    lat: number,
    lng: number
    setLat: Dispatch<SetStateAction<number | null>>,
    setLng: Dispatch<SetStateAction<number | null>>;


}) {
    // console.log("obse render -----------------")

    const map = useMap();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        const onMove = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {

                const c = map.getCenter();
                if (lat !== c.lat) setLat(Number(c.lat.toFixed(5)));
                if (lng !== c.lng) setLng(Number(c.lng.toFixed(5)));

            }, 750); // debounce delay (ms)
        };

        map.on("moveend", onMove);

        return () => {
            map.off("moveend", onMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [lng, lat]);

    return null;
}
