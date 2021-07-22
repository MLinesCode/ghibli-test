import React from 'react'
import Menu from '../../components/menu/Menu'
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
      <Menu />
    </div>
  )
}

export default FavoritesScreen
