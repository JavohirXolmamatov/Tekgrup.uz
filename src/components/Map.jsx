import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ className }) {
  return (
    <MapContainer
      center={[41.3111, 69.2797]} // Toshkent koordinatalari
      zoom={13}
      scrollWheelZoom={false}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[41.3111, 69.2797]}>
        <Popup>Toshkent, O'zbekiston</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
