import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getMoviesByQuery from "components/Api/ApiMoviesByQuery";
import MoviesList from "components/MovieList/MovieList";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get("movieId") ?? "";

  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [isLoadingQuery, setIsLoadingQuery] = useState(false);
  const [errorQuery, setErrorQuery] = useState(null);

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      if (movieId.trim() === "") {
        setMoviesByQuery([]);
        return;
      }

      setIsLoadingQuery(true);
      try {
        const movies = await getMoviesByQuery(movieId);
        setMoviesByQuery(movies);
      } catch (error) {
        setErrorQuery(error);
      } finally {
        setIsLoadingQuery(false);
      }
    };

    fetchMoviesByQuery();
  }, [movieId]);

  const updateQueryString = (evt) => {
    const movieIdValue = evt.target.value;
    setSearchParams({ movieId: movieIdValue });
  };

  const handleSearch = () => {
    setSearchParams({ movieId });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button onClick={handleSearch}>Search</button>
      {isLoadingQuery && <p>Loading movies...</p>}
      {errorQuery && <p>Oops... Something went wrong...</p>}
      {moviesByQuery.length > 0 && <MoviesList movies={moviesByQuery} />}
    </div>
  );
};

export default Movies;
