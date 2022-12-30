import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ArtistInterface } from "../lib/ArtistClass";
import Link from "next/link";
import styled from "styled-components";

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
    <StyledMapContainer
      center={[51.57158268136762, 10.200763543026689]}
      zoom={6}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      {artists.map((artist) => (
        <Marker key={artist._id} position={artist.position} icon={myIcon}>
          <Popup>
            <Link href={`/${artist.slug}`}>{artist.artistName}</Link>
          </Popup>
        </Marker>
      ))}
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled(MapContainer)`
  .leaflet-control {
    background-color: rgba(50, 50, 50, 1);
  }
  .leaflet-control-zoom-in {
    background-color: rgba(217, 217, 217, 1);
  }
  .leaflet-control-zoom-out {
    background-color: rgba(217, 217, 217, 1);
  }
`;
