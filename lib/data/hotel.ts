import { delay } from "../delay"
import type { Hotels } from "./hotel.schema";
import { HOTEL_IMAGES } from "./RANDOM_HOTEL_IMAGES ";




export const fetchHotelsData = async (lat: number | null, lng: number | null, radius = 4000, limit = 40) => {
    if (!lat || !lng) return [];


    try {
        const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
        if (!apiKey) throw new Error("Geoapify API key is missing");
        const url = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=circle:${lng},${lat},${radius}&limit=${limit}&apiKey=${apiKey}`;

        const res = await fetch(url, { cache: "no-store" });

        if (!res.ok) {
            const text = await res.text();
            console.error("Geoapify API error:", res.status, text);
            return [];
        }

        const data = await res.json();
        return data.features.map((f: any) => {
            const randomIndex = Math.floor(Math.random() * HOTEL_IMAGES.length); // new random per hotel
            return {
                id: f.properties.place_id,
                name: f.properties.name,
                rating: f.properties.accommodation?.stars ?? null,
                lat: f.properties.lat,
                lng: f.properties.lon,
                address: f.properties.formatted,
                imageUrl: HOTEL_IMAGES[randomIndex], // use a random image
                contact: {
                    email: f.properties.contact?.email ?? null,
                    phone: f.properties.contact?.phone ?? null,
                }
            };
        });
    } catch (err) {
        console.error("Error fetching hotels:", err);
        return [];
    }
};


