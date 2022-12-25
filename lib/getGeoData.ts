export async function getGeoData(
  street: string,
  housenumber: number,
  city: string
): Promise<number[]> {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?housenumber=${housenumber}&street=${street}&city=${city}&format=json&apiKey=00b50afce3ec42f0b0f652adc8bfe0d8`,
    { method: "GET" }
  );
  const data = await response.json();

  const postionArray: number[] = [data.results[0].lat, data.results[0].lon];

  console.log(postionArray);

  return postionArray;
}
