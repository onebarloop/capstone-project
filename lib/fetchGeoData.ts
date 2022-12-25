export default async function fetchGeoData(
  city: string,
  streetname: string,
  number: number
): Promise<number[]> {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?housenumber=${number}&street=${streetname}&city=${city}&format=json&apiKey=00b50afce3ec42f0b0f652adc8bfe0d8`,
    { method: "GET" }
  );
  const { results } = await response.json();

  const data: number[] = [results[0].lat, results[0].lon];

  return data;
}
