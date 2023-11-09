import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Suspense } from "react";
import getMovieDetails from "components/Api/ApiMovieDetails.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from || "/");
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
      {isLoading && <div className="text-center">Loading...</div>}
      {error && <p className="text-danger text-center">Oops... Something went wrong...</p>}
      {movieDetails && (
        <div className="container mt-4">
          <Link to={backLinkLocationRef.current} className="btn btn-outline-primary mb-3">
            Back to Movies
          </Link>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-4">MovieDetails: {movieDetails.title}</h1>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : defaultImg
                }
                alt={movieDetails.title}
                className="img-fluid mb-4"
              />
              <p className="card-text">Overview: {movieDetails.overview}</p>
              <p className="card-text">Release Date: {movieDetails.release_date}</p>
            </div>
          </div>
          <hr className="mt-4" />
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to={`cast`} className="nav-link btn btn-outline-info">
                Cast
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`reviews`} className="nav-link btn btn-outline-success">
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading details...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
