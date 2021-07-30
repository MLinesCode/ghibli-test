import React from 'react';
import { Link } from 'react-router-dom';
import './movieposter.css';

const filmsImages = require.context('../../assets/poster', true);

const MoviePoster = ({ title, url, id }) => {
  return (
      <div className="movie__container">
        <Link
          to="/movie"
        >
          <figure className="movie__figure">
            <img className="movie__image" src={ filmsImages(`./${ id }.jpg`) } loading="lazy" alt={ title } />
          </figure>
        </Link>
        <p className="movie__title">{ title }</p>
      </div>
  )
}

export default MoviePoster
