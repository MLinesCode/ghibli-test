import React from 'react'
import BannerMovie from '../../components/bannermovie/BannerMovie'
import Menu from '../../components/menu/Menu'
import IconLite from '../../components/iconlite/IconLite'
import ArrowLeft from '../../assets/icons/left-arrow.svg'
import AvatarIcon from '../../assets/icons/avatar.svg'
import './favorites.css'

const FavoritesScreen = () => {
  return (
    <>
      <div className="favorites__nav">
        <a href="/home">
          <IconLite iconSource={ ArrowLeft } />
        </a>
        <IconLite iconSource={ AvatarIcon } />
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
