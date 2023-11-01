import { fetchActorsOfMovie } from 'helpers/getMoviesData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    getActors(movieId);
  }, [movieId]);

  const getActors = async movieId => {
    setIsLoading(true);
    try {
      const data = await fetchActorsOfMovie(movieId);
      const { cast } = data;
      setActors(prevState => [...prevState, ...cast]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ul>
        {actors.map(({ profile_path, name, character, id }) => (
          <li key={id}>
            {profile_path ? (
              <img
                width="70"
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
            ) : (
              <img
                width="70"
                src={`https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
