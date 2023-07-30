import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Suspense } from "react";
import getMovieDetails from "components/Api/ApiMovieDetails.jsx";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
  const [movieDetails, setMovieDetails] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (showReviews) {
      setShowCast(false);
    } else if (showCast) {
      setShowReviews(false);
    }
  }, [showReviews, showCast]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Oops... Something went wrong...</p>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  return (
    <>
      <h1>MovieDetails: {movieDetails.title}</h1>
      <img src={imageUrl} alt={movieDetails.title} />
      <p>Overview: {movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>

      <Link to={backLinkLocationRef.current}>Back to movies</Link>
      <hr />
      <ul>
        <li>
          <Link to={`cast`} onClick={() => setShowCast(true)}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} onClick={() => setShowReviews(true)}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading details...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;