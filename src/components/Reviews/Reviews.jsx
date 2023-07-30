import React, { useState, useEffect } from "react";
import getMovieReviews from "components/Api/ApiReviews.jsx";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId !== "") {
      const fetchMovieReviews = async () => {
        setIsLoading(true);
        try {
          const reviewsData = await getMovieReviews(movieId);
          if (reviewsData) {
            setReviews(reviewsData.results);
          }
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchMovieReviews();
    }
  }, [movieId]);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <p>Oops... Something went wrong while fetching reviews...</p>;
  }

  return (
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
  );
};

export default Reviews;
