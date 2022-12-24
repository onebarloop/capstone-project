function normalize(string: string): string {
  return string.replaceAll(" ", "").toLowerCase();
}

interface ArtistInterface extends Artist {
  _id: string;
}

class Artist {
  artistName: string;
  firstName: string;
  lastName: string;
  location: {
    postalCode: number;
    city: string;
    streetname: string;
    number: number;
  };
  slug: string;
  tattoos: string[];

  constructor(
    artistName: string,
    firstName: string,
    lastName: string,
    postalCode: number,
    city: string,
    streetname: string,
    number: number,
    tatoos: string[]
  ) {
    this.artistName = artistName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = { postalCode, city, streetname, number };
    this.slug = normalize(artistName);
    this.tattoos = tatoos;
  }
}

export { Artist, type ArtistInterface };
