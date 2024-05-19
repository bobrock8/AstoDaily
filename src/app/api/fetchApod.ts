import { getDate } from "../db/helper";

const APOD_URL = `https://api.nasa.gov/planetary/apod`;
const getApodUrl = () => {
  const apiKey = process.env.NASA_API_KEY;
  if (!apiKey) {
    throw new Error("Apod api key is missing from .env.local");
  }
  return APOD_URL + "?date=" + getDate() + "&api_key=" + apiKey;
};

const fetchApod = async () => {
  try {
    const response = await fetch(getApodUrl(), {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchApod };
