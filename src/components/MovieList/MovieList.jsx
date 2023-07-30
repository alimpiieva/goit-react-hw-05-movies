import React from "react";
import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default MoviesList;
