import { Link, useNavigate } from 'react-router-dom'
import ArrowLeft from '../assets/icons/left-arrow.svg'
import LogoGhibli from '../assets/logo.png'
import AvatarUser from '../assets/avatar.png'
import './compact-header.css'

const CompactHeader = ({ showProfile = true }) => {
  const navigate = useNavigate()

  return (
    <header className="compact-header">
      <button
        className="compact-header__control"
        type="button"
        onClick={() => navigate('/home')}
        aria-label="Volver al inicio"
      >
        <img className="compact-header__back" src={ArrowLeft} alt="" />
      </button>

      <Link className="compact-header__logo" to="/home" aria-label="Ir al inicio">
        <img src={LogoGhibli} alt="Studio Ghibli" />
      </Link>

      {showProfile && (
        <Link className="compact-header__control" to="/profile" aria-label="Ir al perfil">
          <img className="compact-header__avatar" src={AvatarUser} alt="" />
        </Link>
      )}
    </header>
  )
}

export default CompactHeader
