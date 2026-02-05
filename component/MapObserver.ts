import { useMap } from "react-leaflet";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";

export default function MapObserver({ center, setLat, setLng }: {
    center: [number, number]
    setLat: Dispatch<SetStateAction<number | null>>,
    setLng: Dispatch<SetStateAction<number | null>>;


}) {
    const map = useMap();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        const onMove = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {

                const c = map.getCenter();
                if (center[0] !== c.lat) setLat(Number(c.lat.toFixed(5)));
                if (center[1] !== c.lng) setLng(Number(c.lng.toFixed(5)));

            }, 750); // debounce delay (ms)
        };

        map.on("moveend", onMove);

        return () => {
            map.off("moveend", onMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [center]);

    return null;
}
