import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import IconFull from '../iconfull/IconFull'
import IconFavorite from '../../assets/icons/heart.png'
import IconHome from '../../assets/icons/home.png'
import IconSearch from '../../assets/icons/search.png'
import './menu.css'

const Menu = () => {
  return (
    <div className="menu__container">
      <NavLink 
          activeClassName="active"
          className="menu__link"
          exact
          to='/favorites'
      >
        <IconFull icon={ IconFavorite } iconText="Favoritos" />
      </NavLink>
      <Link
        className=""
        to='/'
      >
        <IconFull icon={ IconHome } iconText="Inicio" />
      </Link>
      <NavLink
        activeClassName="active"
        className=""
        exact
        to='/search'
      >
        <IconFull icon={ IconSearch } iconText="Buscar" />
      </NavLink>
    </div>
  )
}

export default Menu
