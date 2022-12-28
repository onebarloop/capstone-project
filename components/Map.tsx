import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ArtistInterface } from "../lib/ArtistClass";
import Link from "next/link";

type MapProps = {
  artists: ArtistInterface[];
};

export default function Map({ artists }: MapProps) {
  const myIcon = L.icon({
    iconUrl: "/logo.svg",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer
      center={[51.57158268136762, 10.200763543026689]}
      zoom={6}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {artists.map((artist) => (
        <Marker key={artist._id} position={artist.position} icon={myIcon}>
          <Popup>
            <Link href={`/${artist.slug}`}>{artist.artistName}</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
