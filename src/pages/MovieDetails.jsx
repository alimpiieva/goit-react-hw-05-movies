import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Suspense } from "react";
import getMovieDetails from "components/Api/ApiMovieDetails.jsx";
import getMovieReviews from "components/Api/ApiReviews.jsx";
import getMovieCredits from "components/Api/ApiCast.jsx";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
  const [movieDetails, setMovieDetails] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovieDetails(details);
    };
    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (showReviews) {
      const fetchMovieReviews = async () => {
        const reviewsData = await getMovieReviews(movieId);
        if (reviewsData) {
          setReviews(reviewsData.results);
        }
      };
      fetchMovieReviews();
    }
  }, [movieId, showReviews]);

  useEffect(() => {
    if (showCast) {
      const fetchMovieCredits = async () => {
        const credits = await getMovieCredits(movieId);
        if (credits) {
          setCast(credits.cast);
        }
      };
      fetchMovieCredits();
    }
  }, [movieId, showCast]);

  useEffect(() => {
    if (showCast) {
      setShowReviews(false);
    }
  }, [showCast]);

  useEffect(() => {
    if (showReviews) {
      setShowCast(false);
    }
  }, [showReviews]);

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

      {showCast && (
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
      )}

      {showReviews && (
        <>
          <h2>Reviews</h2>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <p>Author: {review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nothing to show</p>
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
