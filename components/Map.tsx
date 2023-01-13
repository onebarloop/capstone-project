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
import { useEffect, useState } from "react";
import Select, { ActionMeta } from "react-select";

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

  console.log(select);

  //This function is needed to setup an event listener to the map itself. As a functional component it must return JSX, therefore the fragments.
  function ClickMap(): JSX.Element {
    useMapEvents({
      click() {
        setSelect(null);
      },
    });
    return <></>;
  }

  type Option = {
    value: string;
    label: string;
  };

  const options: Option[] = artists.map((artist) => ({
    value: artist._id,
    label: artist.artistName,
  }));

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useEffect(() => {
    if (selectedOption !== null) {
      setSelect(selectedOption.value);
    } else return;
  }, [selectedOption]);

  return (
    <>
      <StyledSelect
        defaultValue={selectedOption}
        onChange={(option: Option | undefined) => setSelectedOption(option)}
        options={options}
      />
      <StyledMapContainer
        center={[51.57158268136762, 10.200763543026689]}
        zoom={6}
        style={{ height: "80vh", width: "100%" }}
      >
        <ClickMap />

        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

        {artists.map(({ _id, position, slug, artistName }) => (
          <Marker
            key={_id}
            position={position}
            icon={select === _id ? userIcon : artistIcon}
            eventHandlers={{
              click: () => {
                select === _id ? setSelect(null) : setSelect(_id);
              },
            }}
          >
            <Popup closeButton={false}>
              <Link href={`/${slug}`}>{artistName}</Link>
            </Popup>
          </Marker>
        ))}
        {userPosition !== null && (
          <Marker position={userPosition} icon={userIcon}>
            <Popup>This is YOU!</Popup>
          </Marker>
        )}
      </StyledMapContainer>
    </>
  );
}

const StyledSelect = styled(Select)`
  z-index: 1001;
`;

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
