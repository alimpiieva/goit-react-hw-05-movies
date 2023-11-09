import React, { useState, useEffect } from "react";
import getMovieReviews from "components/Api/ApiReviews.jsx";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        const reviewsData = await getMovieReviews(movieId);
        if (reviewsData) {
          setReviews(reviewsData.results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  if (isLoading) {
    return <div className="text-center">Loading reviews...</div>;
  }

  if (error) {
    return <p className="text-danger text-center">Oops... Something went wrong while fetching reviews...</p>;
  }

  return (
    <div className="p-3 mb-3 bg-light rounded shadow">
      <h2 className="text-center mb-4">Reviews</h2>
      <ul className="list-unstyled">
        {reviews.map((review) => (
          <li key={review.id} className="mb-3 p-3 bg-white rounded shadow-sm">
            <p className="mb-1">Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {reviews.length === 0 && <p className="text-center">Nothing to show</p>}
    </div>
  );
};

export default Reviews;
