import React from 'react'
import IconLite from '../components/iconlite/IconLite'
import IconClock from '../assets/icons/clock.png'
import IconAvatar from '../assets/icons/avatar.png'
import LogoGhibli from '../assets/logo-ghibli.png'
import './header.css'

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__icons">
        <IconLite iconSource={ IconAvatar } />
        <IconLite iconSource={ IconClock } />
      </div>
      <figure className="header__logo">
        <img src={ LogoGhibli } alt={ LogoGhibli } />
      </figure>
    </div>
  )
}

export default Header
