import ListFilms from 'components/ListFilms/ListFilms';
import { Loader } from 'components/Loader/Loader';
import { fetchSearchMovies } from 'helpers/getMoviesData';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [q, setQ] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  useEffect(() => {
    getSearchMovies(query);
  }, [query]);

  const handleChange = e => {
    setQ(e.target.value);
  };

  const handleSetQuery = () => {
    setSearchParams(q ? { query: q } : {});
  };

  const getSearchMovies = async q => {
    setIsLoading(true);
    try {
      const data = await fetchSearchMovies(q);
      const { results } = data;

      setFilms(results);
      setQ('');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input type="text" name="query" value={q} onChange={handleChange} />
      <button type="submit" onClick={handleSetQuery}>
        Submit
      </button>
      {isLoading && !films.length ? <Loader /> : <ListFilms films={films} />}
    </div>
  );
};

export default Movies;
