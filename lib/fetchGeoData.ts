type GeoDataProps = {
  city: string;
  streetname: string;
  number: number;
  APIKEY: string;
};

// The default export is only usedr in backend...
export default async function fetchGeoData({
  city,
  streetname,
  number,
  APIKEY,
}: GeoDataProps): Promise<number[]> {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?housenumber=${number}&street=${streetname}&city=${city}&format=json&apiKey=${APIKEY}`,
    { method: 'GET' }
  );
  const { results } = await response.json();

  const data: number[] = [results[0].lat, results[0].lon];

  return data;
}

//... while this export is used in frontend during the instantiation of the artist-object
export async function fetchArtistPosition(artistLocation: {
  city: string;
  streetname: string;
  number: number;
}): Promise<number[]> {
  const response = await fetch('/api/geodata', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artistLocation),
  });

  const result = await response.json();
  return result;
}
