import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    async function catchItem() {
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (error) {
        console.log(error);
      }
    }
    catchItem();
  }, [url]);
  return data;
}
