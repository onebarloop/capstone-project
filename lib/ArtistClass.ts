function normalize(string: string): string {
  return string.replaceAll(" ", "").toLowerCase();
}

interface ArtistInterface {
  artistName: string;
  firstName: string;
  lastName: string;
  location: string;
  slug: string;
  tattoos: string[];
  _id: string;
}

class Artist {
  //Typescript
  artistName: string;
  firstName: string;
  lastName: string;
  location: string;
  slug: string;
  tattoos: string[];
  //Typescript end

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
