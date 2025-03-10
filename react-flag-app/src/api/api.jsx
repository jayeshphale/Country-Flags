import axios from "axios";

export const BACKENDPOINT = "https://restcountries.com/v3.1/all";

export async function countriesData() {
  try {
    const response = await axios.get(BACKENDPOINT);
    return response.data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return []; // Return empty array to avoid UI breaking
  }
}
