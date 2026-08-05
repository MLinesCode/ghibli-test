import { NavLink, useLocation } from 'react-router-dom'
import { HeartIcon, HomeIcon, SearchIcon } from '../icons/NavIcons'
import './menu.css'

const ROUTES = ['/favorites', '/home', '/search']

const Menu = () => {
  const { pathname } = useLocation()
  const matchedIndex = ROUTES.indexOf(pathname)
  const activeIndex = matchedIndex === -1 ? 1 : matchedIndex

  return (
    <nav className="menu__container">
      <span
        className="menu__indicator"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      >
        <span className="menu__indicator-bar" />
      </span>
      <NavLink
        end
        className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}
        to="/favorites"
      >
        {({ isActive }) => (
          <>
            <HeartIcon filled={isActive} className="menu__icon" />
            <span>Favoritos</span>
          </>
        )}
      </NavLink>
      <NavLink
        end
        className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}
        to="/home"
      >
        <HomeIcon className="menu__icon" />
        <span>Inicio</span>
      </NavLink>
      <NavLink
        end
        className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}
        to="/search"
      >
        <SearchIcon className="menu__icon" />
        <span>Buscar</span>
      </NavLink>
    </nav>
  )
}

export default Menu
