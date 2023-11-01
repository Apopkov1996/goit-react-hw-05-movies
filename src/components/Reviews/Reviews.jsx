import { fetchReviewsOfMovie } from 'helpers/getMoviesData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    getReviews(movieId);
  }, [movieId]);

  const getReviews = async reviews => {
    setIsLoading(true);
    try {
      const data = await fetchReviewsOfMovie(reviews);
      const { results } = data;
      setReviews(prevState => [...prevState, ...results]);
    } catch (error) {}
  };

  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Autor: {author}</p>
              <p>{content}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        `We do not have Reviws for this films`
      )}
    </div>
  );
};

export default Reviews;
