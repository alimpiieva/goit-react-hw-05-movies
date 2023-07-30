import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getPopularMovies from "components/Api/Api";
import MoviesList from "components/MovieList/MovieList";
const Movies = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (movieId !== '') {
            const fetchPopularMovies = async () => {
                setIsLoading(true);
                try {
                    const movies = await getPopularMovies();
                    setPopularMovies(movies);
                    setIsLoading(false);
                } catch (error) {
                    setError(error);
                    setIsLoading(false);
                }
            };
            fetchPopularMovies();
        }
        }, [movieId]);

    const visibleMovies = popularMovies.filter(movie => movie.title.includes(movieId));

    const updateQueryString = evt => {
        const movieIdValue = evt.target.value;
        if (movieIdValue === "") {
            return setSearchParams({});
        }
        setSearchParams({ movieId: movieIdValue });
    };

    const handleSearch = () => {
        setSearchParams({ movieId });
    };

     return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <p>Ooops... Something went wrong...</p>}
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button onClick={handleSearch}>Search</button>
      <hr />
      {popularMovies.length > 0 && <MoviesList movies={visibleMovies} />}
    </div>
  );
};

export default Movies;
