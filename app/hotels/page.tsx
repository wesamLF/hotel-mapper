

import Filters from "@/component/Filters";
import MapWrpper from "@/component/MapWrpper";
import type { SearchParams } from "nuqs/server";
import { fetchHotelsData } from "@/lib/data/hotel";
import { searchParamsLoader } from "./hotels-search-params";
import type { Hotels } from "@/lib/data/hotel.schema";





const page = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
    const { lat, lng } = await searchParamsLoader(searchParams)
    const hotels: Hotels = await fetchHotelsData(lat, lng)

    console.log("______________________ page")
    return (
        <main className="max-w-[1400px] mx-auto ">
            
            <MapWrpper hotels={hotels} />


        </main>)
}

export default page