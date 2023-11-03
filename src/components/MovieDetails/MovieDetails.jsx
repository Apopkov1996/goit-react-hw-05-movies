import { Loader } from 'components/Loader/Loader';
import { fetchFullInformationMovie } from 'helpers/getMoviesData';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const goBackRef = useRef(location.state?.from || '/');

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  const getDetails = async movieId => {
    setIsLoading(true);
    try {
      const data = await fetchFullInformationMovie(movieId);

      setMovieInfo(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <>
      <Link to={goBackRef.current}>
        <Button>Go back</Button>
      </Link>
      {isLoading && !movieInfo ? (
        <Loader />
      ) : (
        <>
          <MainWrapper>
            <LeftWrapper>
              {poster_path ? (
                <img
                  width="200px"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                />
              ) : (
                <img
                  width="200px"
                  src={`https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`}
                  alt={original_title}
                />
              )}
            </LeftWrapper>
            <RightWrapper>
              {title && release_date ? (
                <h2>
                  {title} ({release_date.slice(0, 4)})
                </h2>
              ) : (
                `We do not have Title for this films`
              )}
              {vote_average ? (
                <p>User Score : {Math.ceil(vote_average * 10)}%</p>
              ) : (
                `We do not have User Csore for this films`
              )}
              <h3>Overview</h3>
              {overview ? (
                <p>{overview}</p>
              ) : (
                `We do not have overview for this films`
              )}
              <h3>Genres</h3>
              {genres ? (
                <ListGenres>
                  {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ListGenres>
              ) : (
                `We do not have Genres for this films`
              )}
            </RightWrapper>
          </MainWrapper>
          <hr />
          <div>
            <h2>Additional information</h2>
            <ListAditional>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ListAditional>
            <hr />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;

const MainWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const LeftWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  width: 100%;
  display: inline-block;
`;

const ListGenres = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
`;

const ListAditional = styled.ul`
  display: flex;
  gap: 30px;
`;

const Button = styled.button`
  margin-bottom: 20px;
`;
