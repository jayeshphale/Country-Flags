import axios from "axios";

export const BACKENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export async function countriesData() {
  try {
    const response = await axios.get(BACKENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message || error);
    return []; // Return an empty array to prevent crashes
  }
}
