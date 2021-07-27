import React from 'react'
import MovieInfo from '../movieinfo/MovieInfo'
import './carousel.css'

const Carousel = () => {
  return (
    <div className="carousel__container">
      <h3 className="carousel__category">Categorias</h3>
      <div className="carousel__items">
        <MovieInfo />
        <MovieInfo />
        <MovieInfo />
        <MovieInfo />
        <MovieInfo />
        <MovieInfo />
        <MovieInfo />
      </div>
    </div>
  )
}

export default Carousel
