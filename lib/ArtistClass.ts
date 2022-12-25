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
  }
}

export { Artist, type ArtistInterface };
