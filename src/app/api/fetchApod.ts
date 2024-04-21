const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=`;
const getApodUrl = () => {
  const apiKey = process.env.NASA_API_KEY;
  if (!apiKey) {
    throw new Error("Apod api key is missing from .env.local");
  }
  return APOD_URL + apiKey;
};

const fetchApod = async () => {
  try {
    const response = await fetch(getApodUrl());
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchApod };
