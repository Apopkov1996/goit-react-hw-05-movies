import { Loader } from 'components/Loader/Loader';
import { fetchReviewsOfMovie } from 'helpers/getMoviesData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getReviews(movieId);
  }, [movieId]);

  const getReviews = async reviews => {
    setIsLoading(true);
    try {
      const data = await fetchReviewsOfMovie(reviews);
      const { results } = data;
      setReviews(prevState => [...prevState, ...results]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && !reviews.length && <Loader />}
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
      ) : null}

      {!reviews.length && !isLoading && `We do not have Reviws for this films`}
    </div>
  );
};

export default Reviews;
