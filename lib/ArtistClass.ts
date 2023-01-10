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
  dates: string[];

  constructor(
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
    this.position = null; // Here I would like to call fetchGeoData.
    //But asnyc functions don't work as expected during object instantiation.
    //Instead GeoData is fetched inside the upload-function, AFTER the objec instantation.
    this.dates = dates;
  }
}

export { Artist, type ArtistInterface };
