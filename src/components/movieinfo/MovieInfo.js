import React from 'react';
import './movieinfo.css';

const MovieInfo = () => {
  return (
    <div className="movie__container">
      <figure className="movie__figure">
        <img className="movie__image" src="https://pics.filmaffinity.com/Mi_vecino_Totoro-520161596-large.jpg" alt="Imagen pelicula Totoro" />
      </figure>
      <p className="movie__title">Titulo de la pelicula</p>
    </div>
  )
}

export default MovieInfo
