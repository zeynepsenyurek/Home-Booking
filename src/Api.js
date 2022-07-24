export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.GEO_API_OPTIONS_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const searchDestinationApi = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.SEARCH_DESTINATION_API_KEY,
    "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
  },
};
export const DESTINATION_API_URL =
  "https://airbnb19.p.rapidapi.com/api/v1/searchDestination";

export const searchPropertyByPlace = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.SEARCH_PROPERTY_BY_PLACE_KEY,
    "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
  },
};

export const PROPERTY_API_URL =
  "https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace";
