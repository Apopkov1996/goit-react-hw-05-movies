import React from 'react';
import { Link } from 'react-router-dom';

const ListFilms = ({ films }) => {
  return (
    <div>
      <ol>
        {films?.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListFilms;
