import React, { useState, useEffect } from "react";
import getMovieCredits from "components/Api/ApiCast.jsx";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
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
    return <div className="text-center">Loading cast...</div>;
  }

  if (error) {
    return <p className="text-danger text-center">Oops... Something went wrong while fetching cast...</p>;
  }

  return (
    <div>
      <h2 className="text-center">Cast</h2>
      <ul className="list-unstyled d-flex justify-content-center">
        {cast.map((actor) => (
          <li key={actor.id} className="text-center mx-3">
            <p className="mb-1">Name: {actor.name}</p>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
                className="img-fluid rounded-circle"
              />
            ) : (
                <img src={defaultImg} alt={actor.name} className="img-fluid rounded-circle" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
