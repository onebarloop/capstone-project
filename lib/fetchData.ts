import { ArtistInterface } from "./ArtistClass";
import { Dispatch, SetStateAction } from "react";

export default async function fetchData(
  url: string,
  setterFunc: Dispatch<SetStateAction<ArtistInterface[] | undefined>>
): Promise<void> {
  const response = await fetch(url);
  setterFunc(await response.json());
}
