import { useEffect, useState } from 'react';

export default function usePosition() {
  const [position, setPosition] = useState<[number, number] | null | undefined>(
    undefined
  );
  function error() {
    setPosition(null);
  }
  function success(position: GeolocationPosition) {
    setPosition([position.coords.latitude, position.coords.longitude]);
  }
  const options = { timeout: 5000 };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return position;
}
