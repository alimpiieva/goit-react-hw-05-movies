import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

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

MoviesList.protoTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequiered,
      title: PropTypes.string.isRequiered,
    })
  ).isRequired,
};


export default MoviesList;
