
import type { Hotel } from "@/lib/data/hotel.schema";



export default function HotelCard({ selectedHotel }: { selectedHotel: Hotel }) {


  return (
    <div className="w-80 sm:w-72 md:w-80 h-full shadow-xl rounded-2xl overflow-hidden bg-base-100">
      <figure className="relative">
        <img
          src={selectedHotel.imageUrl ?? ""}
          alt={selectedHotel.name}
          className="h-52 w-full object-cover"
        />
        <span className="badge badge-primary absolute top-3 left-3">Featured</span>
      </figure>

      <div className="card-body ">
        
        <div className="">

          <h2 className="card-title text-lg font-semibold">{selectedHotel.name}</h2>

          {selectedHotel.address && (
            <p className="text-sm text-gray-500 mt-1">{selectedHotel.address}</p>
          )}

          {selectedHotel.rating != null && (
            <p className="text-sm text-gray-500 mt-1">⭐ {selectedHotel.rating} stars</p>
          )}

          {(selectedHotel.contact.email || selectedHotel.contact.phone) && (
            <div className="mt-2 text-sm text-secondary">
              {selectedHotel.contact.email && <p>Email: {selectedHotel.contact.email}</p>}
              {selectedHotel.contact.phone && <p>Phone: {selectedHotel.contact.phone}</p>}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-4 ">
          <div>
            <p className="text-sm text-gray-400">From</p>
            <p className="text-xl font-bold text-primary">$0/night</p>
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              const query = encodeURIComponent(selectedHotel.name + " " + (selectedHotel.address ?? ""));
              const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
              window.open(url, "_blank"); // opens in new tab
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
