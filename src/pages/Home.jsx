import ListFilms from 'components/ListFilms/ListFilms';
import { Loader } from 'components/Loader/Loader';
import { fetchTrendingMovies } from 'helpers/getMoviesData';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTrendingMovies();
      const { results } = data;

      setFilms(prevState => [...prevState, ...results]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Trending oday</h1>
      {isLoading && !films.length ? <Loader /> : <ListFilms films={films} />}
    </div>
  );
};

export default Home;
