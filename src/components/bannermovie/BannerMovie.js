import React from 'react'
import LogoTest from '../../assets/main_movie.jpg'
import PrimaryButton from '../primarybutton/PrimaryButton'
import './bannermovie.css'

const BannerMovie = ({ bannerImage,  }) => {
  return (
    <div className="banner__main">
      <figure className="banner__container">
        <PrimaryButton className={"banner__button"}>
          <div className="banner__text">
            <p>Ver Ahora</p>
          </div>
        </PrimaryButton>
        <img className="banner__image" src={ LogoTest } loading="lazy" alt={ bannerImage } />
      </figure>
    </div>
  )
}

export default BannerMovie
