import React, { useState, useEffect } from "react";
import getPopularMovies from "components/Api/Api";
import MoviesList from "components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="text-center">
      <h1 className="mb-4">Trending Today</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops..Something went wrong..</p>}
      {popularMovies.length > 0 && <MoviesList movies={popularMovies} />}
    </div>
  );
};

export default HomePage;
