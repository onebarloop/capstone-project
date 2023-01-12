import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ArtistInterface } from "../lib/ArtistClass";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

type MapProps = {
  artists: ArtistInterface[];
  userPosition: [number, number] | null;
};

export default function Map({ artists, userPosition }: MapProps) {
  const artistIcon = L.icon({
    iconUrl: "/logo.svg",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const userIcon = L.icon({
    iconUrl: "/userIcon.svg",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const [select, setSelect] = useState<string | null>(null);

  function ClickMap() {
    useMapEvents({
      click() {
        setSelect(null);
      },
    });
    return <></>;
  }

  return (
    <StyledMapContainer
      center={[51.57158268136762, 10.200763543026689]}
      zoom={6}
      style={{ height: "80vh", width: "100%" }}
    >
      <ClickMap />
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

      {artists.map((artist) => (
        <Marker
          key={artist._id}
          position={artist.position}
          icon={select === artist._id ? userIcon : artistIcon}
          eventHandlers={{
            click: () => {
              select === artist._id ? setSelect(null) : setSelect(artist._id);
            },
          }}
        >
          <Popup>
            <Link href={`/${artist.slug}`}>{artist.artistName}</Link>
          </Popup>
        </Marker>
      ))}
      {userPosition !== null && (
        <Marker position={userPosition} icon={userIcon}>
          <Popup>This is YOU!</Popup>
        </Marker>
      )}
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
  .leaflet-popup {
    font-family: Roboto;
  }
  .leaflet-popup-tip {
    background-color: rgba(217, 217, 217, 1);
  }
  .leaflet-popup-content-wrapper {
    background-color: rgba(217, 217, 217, 1);
  }
`;
