"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo,  type Dispatch, type SetStateAction } from "react";
import { createNormalIcon, } from "./marker-icon/createPriceIcon";
import type { Hotel, Hotels } from "@/lib/data/hotel.schema";
import MapObserver from "./MapObserver";
import { MapCenterUpdater } from "./MapCenterUpdater";

export default function HotelMap({ hotels, lat, lng, setSelectedHotel, setLat, setLng }: {
    hotels: Hotels,
    lat: number
    lng: number,
    setSelectedHotel: Dispatch<SetStateAction<Hotel | null>>,
    setLat: Dispatch<SetStateAction<number | null>>,
    setLng: Dispatch<SetStateAction<number | null>>;


}) {
    const center = useMemo(() => [lat, lng] as [number, number], [lat, lng]);


// console.log("hotel map render")


    return (
        <div className="w-full md:flex-1" style={{ height: "600px",  }}>
            <MapContainer center={center} zoom={14} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
                <MapObserver lat={center[0]} lng={center[1]} setLat={setLat} setLng={setLng} />
                <MapCenterUpdater  lat={center[0]} lng={center[1]} />
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
                />

                {hotels.map((hotel) =>

                    <Marker key={hotel.id}
                        position={[hotel.lat, hotel.lng]}
                        icon={createNormalIcon()}

                        eventHandlers={{
                            click: () => setSelectedHotel(hotel),
                        }}>
                        <Popup offset={[0, 0]}>
                             {hotel?.name ?? "hotel"}
                        </Popup>
                    </Marker>

                )}

            </MapContainer>
        </div>
    );
}





