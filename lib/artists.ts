function stringify(string: string) {
  const noBlanks = string.replaceAll(" ", "");
  return noBlanks.toLowerCase();
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
    this.slug = stringify(artistName);
    this.tattoos = tatoos;
  }
}

const artists = [
  new Artist("Internet Guy", "Sascha", "Weber", "Manneim", ["eins", "zwei"]),
  new Artist("Internet bekannschaft nummer 3", "Alex", "Bayer", "Manneim", [
    "eins",
    "zwei",
  ]),
  new Artist("Internet bekannschaft nummer 3", "Alex", "Bayer", "Manneim", [
    "eins",
    "zwei",
  ]),
];

export default artists;
