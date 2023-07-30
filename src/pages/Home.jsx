import { useState , useEffect} from "react";
import getPopularMovies from "components/Api/Api";
import MoviesList from "components/MovieList/MovieList";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
   

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setPopularMovies(movies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };
        fetchPopularMovies();
    }, []);

    return (
        <div>
      <h1>Trending today</h1>
      <MoviesList movies={popularMovies} />
    </div>
  );
};

export default HomePage;
