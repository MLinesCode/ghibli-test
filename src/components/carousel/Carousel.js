import React from 'react'
import MoviePoster from '../movieinfo/MoviePoster'
import './carousel.css'

const Carousel = () => {
  return (
    <div className="carousel__container">
      <h3 className="carousel__category">Categorias</h3>
      <div className="carousel__items">
        <MoviePoster />
        <MoviePoster />
        <MoviePoster />
        <MoviePoster />
        <MoviePoster />
        <MoviePoster />
      </div>
    </div>
  )
}

export default Carousel
