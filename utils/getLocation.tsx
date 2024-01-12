import axios, { AxiosResponse } from "axios";

export default async function getlocation(searchQuery: string) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=6&countrycodes=NG`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Error: Request failed with status code ${response.status}`);
      return null;
    }
  } catch (error) {
    // Handle the error
    console.error(`Error: ${error}`);
    return null;
  }
}
