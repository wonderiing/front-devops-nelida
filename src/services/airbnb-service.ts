import type { AirbnbListing } from "@/types/airbnb"

const API_URL = "http://127.0.0.1:8000/api/app/airbnbs/";

export const fetchAirbnbListings = async (): Promise<AirbnbListing[]> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching Airbnb listings:", error);
    return [];
  }
};