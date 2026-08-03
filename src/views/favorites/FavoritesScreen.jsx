import React from 'react'
import BannerMovie from '../../components/bannermovie/BannerMovie'
import Menu from '../../components/menu/Menu'
import IconLite from '../../components/iconlite/IconLite'
import ArrowLeft from '../../assets/icons/left-arrow.svg'
import AvatarIcon from '../../assets/avatar.png'
import './favorites.css'
import { Link } from 'react-router-dom'

const FavoritesScreen = () => {
  return (
    <>
      <div className="favorites__nav">
        <a href="/home">
          <IconLite iconSource={ ArrowLeft } />
        </a>
        <Link
          to="/profile"
        >
          <IconLite iconSource={ AvatarIcon } />
        </Link>
      </div>
      <h3 className="favorites__title">Mis favoritos</h3>
      <div className="favorites__items">
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <BannerMovie />
        <Menu />
      </div>
    </>
  )
}

export default FavoritesScreen
