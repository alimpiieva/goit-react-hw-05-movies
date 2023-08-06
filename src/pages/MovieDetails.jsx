import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Suspense } from "react";
import getMovieDetails from "components/Api/ApiMovieDetails.jsx";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from || "/");
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <p>Oops... Something went wrong...</p>}
      {movieDetails && (
        <>
          <Link to={backLinkLocationRef.current}>Back to movies</Link>
          <h1>MovieDetails: {movieDetails.title}</h1>
          <img
            src={movieDetails.poster_path ?
              `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : defaultImg
            }
            alt={movieDetails.title}
            width={400}
          />
          
          <p>Overview: {movieDetails.overview}</p>
          <p>Release Date: {movieDetails.release_date}</p>

          
          <hr />
          <ul>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading details...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
