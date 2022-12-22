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
  location: string;
  slug: string;
  tattoos: string[];

  constructor(
    artistName: string,
    firstName: string,
    lastName: string,
    location: string,
    tatoos: string[]
  ) {
    this.artistName = artistName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.slug = normalize(artistName);
    this.tattoos = tatoos;
  }
}

export { Artist, type ArtistInterface };
