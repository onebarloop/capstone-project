import { getGeoData } from "./getGeoData";

function normalize(string: string): string {
  return string.replaceAll(" ", "").toLowerCase();
}

interface ArtistInterface extends Artist {
  _id: string;
}

class Artist {
  artistName: string;
  location: {
    city: string;
    streetname: string;
    number: number;
  };
  slug: string;
  tattoos: string[];
  position: any; // Not ideal.

  constructor(
    artistName: string,
    city: string,
    streetname: string,
    number: number,
    tatoos: string[]
  ) {
    this.artistName = artistName;
    this.location = { city, streetname, number };
    this.slug = normalize(artistName);
    this.tattoos = tatoos;
    this.position = null;
  }
}

export { Artist, type ArtistInterface };
