import React, { useState, useEffect } from 'react'
import MoviePoster from '../movieposter/MoviePoster'
import './carousel.css'

const Carousel = ({ category }) => {

  const [ film, setFilm ] = useState([]);
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((film) => setFilm(film))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="carousel__container">
      <h3 className="carousel__category">{ category }</h3>
      <div className="carousel__items">
        {film.map(item =>
          <MoviePoster key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default Carousel
