import { NavLink } from 'react-router-dom'
import { HeartIcon, HomeIcon, SearchIcon } from '../icons/NavIcons'
import './menu.css'

const Menu = () => {
  return (
    <nav className="menu__container">
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
