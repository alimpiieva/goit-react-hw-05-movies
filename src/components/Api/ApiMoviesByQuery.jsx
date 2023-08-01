import axios from "axios";

const API_KEY = "79fd63476190a574bb2d210b52a840b7";
const BASE_URL = "https://api.themoviedb.org/3"; 

const getMoviesByQuery = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies by query", error);
    return [];
  }
};

export default getMoviesByQuery;
