import { useEffect, useState } from "react";
import type { ArtistInterface } from "./ArtistClass";

export default function useFetch(url: string): ArtistInterface[] {
  const [data, setData] = useState<ArtistInterface[]>([]);
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);
  return data;
}
