import React from 'react'
import './sociallogin.css'

const SocialLogin = ({ socialName, socialIcon }) => {
  return (
    <div className="social__container">
      <button className="social__button">
        <img 
            className="social__icon" 
            src={ socialIcon }
            alt={ socialIcon }
        />
        Continuar con { socialName }
      </button>
    </div>
  )
}

export default SocialLogin
