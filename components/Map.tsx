import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getGeoData } from "../lib/getGeoData";

export default function Map({ artists }) {
  var myIcon = L.icon({
    iconUrl: "/logo.svg",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  return (
    <MapContainer
      center={[49.1605613, 8.6335683]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {artists.map((artist) => (
        <Marker
          key={1}
          position={getGeoData(
            artist.location.street,
            artist.location.housenumber,
            artist.location.city
          )}
          icon={myIcon}
        ></Marker>
      ))}
    </MapContainer>
  );
}
