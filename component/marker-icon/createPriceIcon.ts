import L from "leaflet";
import "./marker-icon.css"; // or "../styles/leaflet.css"

export function createPriceIcon(price: number | null) {
  return L.divIcon({
    className: "price-marker",
    html: `
      <div class="price-bubble">$${price}</div>
      <div class="price-pin"></div>
    `,
    iconSize: [60, 60],
    iconAnchor: [30, 60],
  });
}

export function createNormalIcon() {
  return L.icon({
    iconUrl: "/images/leaflet/marker-icon.png",
    shadowUrl: "/images/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}
