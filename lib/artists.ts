function stringify(string: string): string {
  const noBlanks = string.replaceAll(" ", "");
  return noBlanks.toLowerCase();
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
    this.slug = stringify(artistName);
    this.tattoos = tatoos;
  }
}

const artists = [
  new Artist("Internet Guy", "Vorname", "Nachname", "Manneim", [
    "eins",
    "zwei",
  ]),
  new Artist("Internet bekannschaft nummer 3", "foo", "bar", "Berlin", [
    "eins",
    "zwei",
  ]),
];

export default Artist;
