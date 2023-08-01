import React, { useState, useEffect } from "react";
import getMovieCredits from "components/Api/ApiCast.jsx";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      setIsLoading(true);
      try {
        const credits = await getMovieCredits(movieId);
        if (credits) {
          setCast(credits.cast);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading cast...</div>;
  }

  if (error) {
    return <p>Oops... Something went wrong while fetching cast...</p>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <p>Name: {actor.name}</p>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
