import fetchGeoData from "./fetchGeoData";

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
  position: any;
  dates: string[];

  // construcor set to private, since it is only needed inside the static factory-method
  private constructor(
    artistName: string,
    city: string,
    streetname: string,
    number: number,
    tatoos: string[],
    dates: string[]
  ) {
    this.artistName = artistName;
    this.location = { city, streetname, number };
    this.slug = normalize(artistName);
    this.tattoos = tatoos;
    this.dates = dates;
  }
  // static ASYNC factory method.
  public static async create(
    artistName: string,
    city: string,
    streetname: string,
    number: number,
    tatoos: string[],
    dates: string[]
  ) {
    const artist = new Artist(
      artistName,
      city,
      streetname,
      number,
      tatoos,
      dates
    );
    artist.position = await fetchGeoData({ ...artist.location });
    return artist;
  }
}

export { Artist, type ArtistInterface };
