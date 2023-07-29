import axios from "axios";

const API_KEY = "79fd63476190a574bb2d210b52a840b7";

const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        return response.data.results;
    } catch (error) {
        console.error("No movies found", error);
        return [];
    }
};

export default getPopularMovies;