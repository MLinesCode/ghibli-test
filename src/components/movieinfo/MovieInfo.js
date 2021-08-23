import React from 'react'
import IconLite from '../iconlite/IconLite'
import Menu from '../menu/Menu'
import PrimaryButton from '../primarybutton/PrimaryButton'
import PlayIcon from '../../assets/icons/play.svg'
import ArrowLeft from '../../assets/icons/left-arrow.svg'
import AvatarIcon from '../../assets/avatar.png'
import LogoGhibli from '../../assets/logo.png'
import './movieinfo.css'
import { Link } from 'react-router-dom'

const MovieInfo = ({ title, description }) => {
  return (
    <div className="movie__main">
      <div className="movie__nav">
        <a href="/home">
          <IconLite iconSource={ ArrowLeft } />
        </a>
        <img src={ LogoGhibli } alt={ LogoGhibli } />
        <Link
          to="/profile"
        >
          <IconLite iconSource={ AvatarIcon } />
        </Link>
      </div>
      <figure className="movie__poster">
        <img src={ "https://pics.filmaffinity.com/La_princesa_Mononoke-720005363-large.jpg" } alt="poster de la pelicula" />
      </figure>
      <div className="movie__details">
        <h3>{ title }</h3>
        <p>{ description }</p>
        <div className="movie__button">
          <PrimaryButton
            className="movie__play"
          >
            <img src={ PlayIcon } alt={ PlayIcon } />
            <p>Reproducir</p>
          </PrimaryButton>
        </div>
      </div>
      <div className="movie__gallery">
        <h4>Galeria</h4>
        <figure className="gallery__poster">
          <img src={ "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/la-princesa-mononoke-20-anos-del-clasico-ecologista-de-hayao-miyazaki/133617017-1-esl-ES/La-princesa-Mononoke-20-anos-del-clasico-ecologista-de-Hayao-Miyazaki.jpg?resize=480:*" } alt="imagen" />
        </figure>
        <div className="gallery__container">
          <figure className="gallery__item">
            <img src={ "https://static.vix.com/es/sites/default/files/styles/1x1/public/btg/gallery-princessmononoke-3.jpg" } alt="de la imagen" />
          </figure>
          <figure className="gallery__item">
            <img src={ "https://i1.wp.com/www.generacionfriki.es/wp-content/uploads/2015/06/La-princesa-Mononoke-texto-3.jpg" } alt="de la imagen" />
          </figure>
          <figure className="gallery__item">
            <img src={ "https://es.web.img3.acsta.net/r_1280_720/pictures/20/03/19/16/44/4030005.jpg" } alt="de la imagen" />
          </figure>
          <figure className="gallery__item">
            <img src={ "https://notarandom.com/wp-content/uploads/2021/01/mononoke-1024x576.jpg" } alt="de la imagen" />
          </figure>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default MovieInfo
