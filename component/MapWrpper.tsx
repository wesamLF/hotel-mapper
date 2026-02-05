'use client'
import dynamic from 'next/dynamic';
import HotelCard from './HotelCard';
import { useEffect, useMemo, useState, useTransition } from 'react';
import type { Hotel, Hotels } from '@/lib/data/hotel.schema';
import Filters from './Filters';
import { fetchHotelsData } from '@/lib/data/hotel';
import {
  parseAsInteger,
  parseAsString,
  parseAsFloat,
  useQueryState,
  debounce,
} from "nuqs";
import HotelCardHolder from './HotelCardHolder';
import MapSkeleton from './MapSkeleton';

// Use dynamic import with ssr: false
const HotelMap = dynamic(() => import('@/component/HotelMap'), {
  ssr: false, // This line prevents server-side rendering
  loading: () => <MapSkeleton />
});

const MapWrpper = ({ hotels }: { hotels: Hotels, }) => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null)

  const [lat, setLat] = useQueryState(
    "lat",
    parseAsFloat.withOptions({
      shallow: false,
      limitUrlUpdates: debounce(100),

    })
  );

  const [lng, setLng] = useQueryState(
    "lng",
    parseAsFloat.withOptions({
      shallow: false,
      limitUrlUpdates: debounce(100),

    })
  );





  return (
    <div className="flex flex-col">
      <div className="flex gap-4 flex-col justify-center items-center py-10">
        <Filters setLat={setLat} setLng={setLng} />

        {(lat && lng) ?
          
            <div className="flex flex-col items-center md:flex-row gap-4 w-full">

              {selectedHotel == null ? <HotelCardHolder /> : <HotelCard selectedHotel={selectedHotel} />}
              <HotelMap hotels={hotels} lat={lat} lng={lng} setSelectedHotel={setSelectedHotel} setLat={setLat} setLng={setLng} />
            </div>
            :<h1>Please select a city</h1>

          
        }

      </div>
    </div>

  )
}

export default MapWrpper