import React from 'react'
import './recommendedmovie.css'

const RecommendedMovie = ({ movieCover, movieTitle }) => {
  return (
    <div className="recommended__container">
      <figure className="recommended__figure">
        <img src={ movieCover } alt={ movieCover } />
      </figure>
      <div className="recommended__title">
        <h3 className="recommended__description">{ movieTitle }</h3>
      </div>
    </div>
  )
}

export default RecommendedMovie
