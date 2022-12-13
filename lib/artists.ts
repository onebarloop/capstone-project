interface Artist {
  firstName?: string;
  lastName?: string;
  artistName: string;
  location: string;
  slug: string;
  tattoos: [string];
}

function replacer(string: string): string {
  return string.replaceAll(" ", "");
}

const artists: Artist[] = [
  {
    artistName: "Sascha",
    location: "Mannheim",
    slug: "sascha",
    tattoos: ["/img/bike.png"],
  },
  {
    artistName: "Internet Guy",
    location: "New York",
    slug: replacer("Internet Guy"),
    tattoos: ["/img/bike.png"],
  },
];

export default artists;
