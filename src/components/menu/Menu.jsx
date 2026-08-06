import { NavLink } from 'react-router-dom'
import { HeartIcon, HomeIcon, SearchIcon } from '../icons/NavIcons'
import './menu.css'

const MENU_ITEMS = [
  { to: '/favorites', label: 'Favoritos', Icon: HeartIcon },
  { to: '/home', label: 'Inicio', Icon: HomeIcon },
  { to: '/search', label: 'Buscar', Icon: SearchIcon },
]

const Menu = () => {
  return (
    <nav className="menu__container" aria-label="Navegación principal">
      {MENU_ITEMS.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          end
          className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}
          to={to}
        >
          {({ isActive }) => (
            <>
              <span className="menu__icon-wrap" aria-hidden="true">
                <Icon
                  {...(label === 'Favoritos' ? { filled: isActive } : {})}
                  className="menu__icon"
                />
              </span>
              <span className="menu__label">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default Menu
