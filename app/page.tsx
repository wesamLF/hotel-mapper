import Link from "next/link";


export const metadata = {
  title: 'Hotel Mapper',
};

export default async function Home() {


  return (
    <main>
      <div className="flex flex-col min-h-screen font-sans">

        {/* ===== HERO SECTION ===== */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/60"></div>

          {/* Hero content */}
          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Discover Hotels in Saudi Arabia
            </h1>
            <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
              Explore the best hotels, find hidden gems, and plan your perfect stay.
            </p>
            <div className="flex justify-center gap-4">
              <Link href={"/hotels"}  className="btn btn-lg btn-secondary">Get Started</Link>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-28 px-6 bg-base-100" id="features">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Features</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="p-10 rounded-3xl shadow-xl hover:shadow-2xl transition text-center bg-white">
              <div className="text-6xl mb-5 text-primary">📍</div>
              <h3 className="text-2xl font-semibold mb-3">Explore Cities</h3>
              <p className="text-gray-600 text-lg">Browse hotels by city and discover hidden gems across Saudi Arabia.</p>
            </div>

            <div className="p-10 rounded-3xl shadow-xl hover:shadow-2xl transition text-center bg-white">
              <div className="text-6xl mb-5 text-primary">🏨</div>
              <h3 className="text-2xl font-semibold mb-3">Hotel Listings</h3>
              <p className="text-gray-600 text-lg">See detailed hotel info including ratings, location, and contact details.</p>
            </div>

            <div className="p-10 rounded-3xl shadow-xl hover:shadow-2xl transition text-center bg-white">
              <div className="text-6xl mb-5 text-primary">🗺️</div>
              <h3 className="text-2xl font-semibold mb-3">Interactive Map</h3>
              <p className="text-gray-600 text-lg">Visualize hotels on a map to easily plan your stay and route.</p>
            </div>
          </div>
        </section>

        {/* ===== ABOUT US ===== */}
        <section className="py-28 px-6 bg-accent-content/10" id="htu">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center">

            {/* Left: Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-amber-200">
              <img
                src={"/images/map.png"}
                alt="Map illustration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Steps */}
            <div className="flex flex-col gap-6" >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How to Use</h2>
              <p className="text-gray-700 text-lg md:text-xl">
                Easily find the perfect hotel using our interactive map and filters. Just follow these steps:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-600 text-lg md:text-xl">
                <li>Select your city from the dropdown to center the map.</li>
                <li>Browse hotels displayed on the map with ratings and contact info.</li>
                <li>Click on a hotel marker to view details in the hotel card.</li>
                <li>Use the "Book Now" button to open Google Maps for directions or planning your stay.</li>
              </ol>

              <p className="text-gray-500 mt-4 text-sm">
                Map data is powered by OpenStreetMap & Geoapify.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CALL TO ACTION ===== */}
        <section className="my-28 py-28 px-6 bg-gradient-to-r from-primary to-secondary text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to find your perfect hotel?</h2>
          <Link href={"/hotels"} className="btn btn-lg btn-secondary">Get Started</Link>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-base-200 text-gray-600 text-center p-6 mt-auto">
          &copy; {new Date().getFullYear()} Hotel Explorer. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
