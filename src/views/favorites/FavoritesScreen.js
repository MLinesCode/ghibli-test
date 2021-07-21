import React from 'react'
import MovieInfo from '../../components/movieinfo/MovieInfo'
import './favorites.css'

const FavoritesScreen = () => {
  return (
    <div className="favorites__items">
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
    </div>
  )
}

export default FavoritesScreen
