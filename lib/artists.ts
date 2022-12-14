import { nanoid } from "nanoid";

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
  id: string;
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
    this.id = nanoid();
  }
}

const artists: Artist[] = [
  new Artist("Cheap Backpieces", "Vorname", "Nachname", "Mannheim", [
    "/img/heart.png",
    "/img/paper.png",
    "/img/hand.png",
    "/img/Xskull.png",
  ]),
  new Artist("Custom Tattoos Berlin", "foo", "bar", "Berlin", [
    "/img/Xalien.png",
    "/img/Xhead.png",
    "/img/Xhat.png",
    "/img/triangle.png",
  ]),
  new Artist("World of pain", "foo", "bar", "Hamburg", [
    "/img/tree.png",
    "/img/Xfish.png",
    "/img/whale.png",
    "/img/moon.png",
  ]),
  new Artist("Der Biberbau", "foo", "bar", "München", [
    "/img/bike.png",
    "/img/fox.png",
    "/img/Xlink.png",
    "/img/moon.png",
  ]),
  new Artist("Peters kleines Tattoostudio", "foo", "bar", "Ludwigshafen", [
    "/img/pen.png",
    "/img/Xskull.png",
    "/img/Xshroom.png",
    "/img/ice.png",
  ]),
  new Artist("Stick And Poke", "foo", "bar", "Bielefeld", [
    "/img/Xsimba.png",
    "/img/Xpooh.png",
    "/img/Xape.png",
    "/img/tree.png",
  ]),
];
console.log(artists);
export default artists;
