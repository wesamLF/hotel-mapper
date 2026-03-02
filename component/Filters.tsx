"use client";

import {
  parseAsInteger,
  parseAsString,
  parseAsFloat,
  useQueryState,
  debounce,
} from "nuqs";
import { useTransition, useMemo, type SetStateAction, type Dispatch } from "react";
import cities from "cities.json";

type City = {
  name: string;
  lat: string;
  lng: string;
  country: string;
};

const Filters = ({ setLat, setLng }: {
  setLat: Dispatch<SetStateAction<number | null>>,
  setLng: Dispatch<SetStateAction<number | null>>;

}) => {
  const [isPending, startTransition] = useTransition();



  const [city, setCity] = useQueryState(
    "city",
    parseAsString.withOptions({
      shallow: false,
      limitUrlUpdates: debounce(400),
      startTransition,
    })
  );

// console.log("filters render")

 const cityOptions = useMemo(() => {
  return (cities as City[])
    .filter((c) => c.country.toUpperCase() === "SA") // filter by Saudi Arabia code
    .slice(0, 1000); 
}, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-accent-content/20  text-neutral p-4 rounded-2xl shadow-lg w-full">
      {isPending && <span className="text-sm opacity-70">Loading…</span>}

      {/* City Select */}
      <div className="form-control w-full md:w-1/3">
        <label className="label mb-1">
          <span className=" ">Select A City</span>
        </label>
        <select
          className="select select-bordered w-full "
          value={city || ""}
          onChange={(e) => {
            const value = e.target.value;
            if (!value) {
              setCity(null);
              setLat(null);
              setLng(null);
              return;
            }

            const selected = (cities as City[]).find(
              (c) => `${c.name}, ${c.country}` === value
            );

            if (selected) {
              setCity(selected.name);
              setLat(Number(selected.lat));
              setLng(Number(selected.lng));
            }
          }}
        >
          <option value="">All cities</option>
          {cityOptions.map((c) => {
            const label = `${c.name}, ${c.country}`;
            return (
              <option key={`${c.name}-${c.lat}`} value={label}>
                {label}
              </option>
            );
          })}
        </select>
      </div>



    </div>
  );
};

export default Filters;
