import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getMoviesByQuery from "components/Api/ApiMoviesByQuery";
import MoviesList from "components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-4">
      <h1 className="mb-4">Search Movies</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by movie title"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={movieId}
          onChange={updateQueryString}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {isLoadingQuery && <p className="text-center">Loading movies...</p>}
      {errorQuery && <p className="text-danger text-center">Oops... Something went wrong...</p>}
      {moviesByQuery.length > 0 && <MoviesList movies={moviesByQuery} />}
    </div>
  );
};

export default Movies;
