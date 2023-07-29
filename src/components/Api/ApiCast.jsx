import axios from "axios";


const API_KEY = '79fd63476190a574bb2d210b52a840b7';

const getMovieCredits = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Nothing to show:', error);
        return null;
    }
};

export default getMovieCredits;