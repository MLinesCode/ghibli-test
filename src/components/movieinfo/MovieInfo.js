import React from 'react';
import './movieinfo.css';

const MovieInfo = () => {
  return (
    <div className="movie__container">
      <figure className="movie__figure">
        <image className="movie__image" src="https://pics.filmaffinity.com/Mi_vecino_Totoro-520161596-large.jpg" alt="movie-post" />
      </figure>
      <p className="movie__title">Titulo de la pelicula</p>
    </div>
  )
}

export default MovieInfo
