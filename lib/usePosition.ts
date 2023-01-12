import { useEffect, useState } from "react";

export default function usePosition() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  return position;
}
