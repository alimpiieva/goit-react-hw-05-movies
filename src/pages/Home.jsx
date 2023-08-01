import { useState , useEffect} from "react";
import getPopularMovies from "components/Api/Api";
import MoviesList from "components/MovieList/MovieList";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPopularMovies = async () => {
      setIsLoading(true);
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPopularMovies();
    }, []);

    return (
    <>
      <h1>Trending today</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops..Somesing went wrong..</p>}
      {popularMovies.length > 0 && <MoviesList movies={popularMovies} />}
    </>
  );
};

export default HomePage;
