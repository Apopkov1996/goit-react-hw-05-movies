import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ListFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
