import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListFilms = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      <ol>
        {films?.map(film => (
          <li key={film.id}>
            <Link state={{ from: location }} to={`/movies/${film.id}`}>
              {film.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListFilms;
