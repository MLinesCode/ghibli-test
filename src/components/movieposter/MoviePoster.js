import React from 'react';
import { Link } from 'react-router-dom';
import PosterImage from '../../assets/poster.jpg'
import './movieposter.css';

const MoviePoster = ({ title, poster, id }) => {
  return (
      <div className="movie__container">
        <Link
          to="/movie"
        >
          <figure className="movie__figure">
            <img className="movie__image" src={ PosterImage } loading="lazy" alt={ title } />
          </figure>
        </Link>
        <p className="movie__title">{ title }</p>
      </div>
  )
}

export default MoviePoster
