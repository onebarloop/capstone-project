import { useEffect, useState } from "react";
import Artist from "./ArtistClass";

export default function useFetch(url: string): Artist[] {
  const [data, setData] = useState<Artist[]>([]);
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
