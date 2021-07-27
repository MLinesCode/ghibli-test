import React from 'react'
import PrimaryButton from '../primarybutton/PrimaryButton'
import './recommendedmovie.css'

const RecommendedMovie = ({ movieCover, movieTitle }) => {
  return (
    <div className="recommended__container">
      <figure className="recommended__figure">
        <img src={ movieCover } loading="lazy" alt={ movieCover } />
      </figure>
      <div className="recommended__title">
        <h3 className="recommended__description">{ movieTitle }</h3>
          <PrimaryButton
              className={ "recommended__play" }
          >
            <p>Ver</p>
          </PrimaryButton>
      </div>
    </div>
  )
}

export default RecommendedMovie
