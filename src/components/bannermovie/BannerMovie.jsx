import React from 'react'
import LogoTest from '../../assets/main_movie.jpg'
import './bannermovie.css'

const BannerMovie = ({ bannerImage,  }) => {
  return (
    <div className="banner__main">
      <figure className="banner__container">
        <img className="banner__image" src={ LogoTest } loading="lazy" alt={ bannerImage } />
      </figure>
    </div>
  )
}

export default BannerMovie
