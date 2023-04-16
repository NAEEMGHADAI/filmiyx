import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_API_KEY;

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
