import React from 'react'
import IconLite from '../../components/iconlite/IconLite'
import ArrowLeft from '../../assets/icons/left-arrow.svg'
import LogoGhibli from '../../assets/logo.png'
import AvatarUser from '../../assets/avatar.png'
import SocialTiktok from '../../assets/icons/tik-tok.svg'
import SocialTwitter from '../../assets/icons/twitter.svg'
import SocialInstagram from '../../assets/icons/instagram.svg'
import './profile.css'

const Profile = () => {
  return (
    <>
      <article className="profile">
        <div className="movie__nav">
          <a href="/home">
            <IconLite iconSource={ ArrowLeft } />
          </a>
          <img src={ LogoGhibli } alt={ LogoGhibli } />
        </div>
        <section className="profile__info">
          <h2>Mi cuenta</h2>
          <img src={ AvatarUser } alt="avatar del usuario" />
          <h4>Akira Chinami</h4>
        </section>
        <section className="profile__settings">
          <div className="profile__arrow">
            <p className="profile__security">Cambiar email</p>
            <label />
          </div>
           <p className="profile__security">Cambiar contraseña</p>
           <hr/>
           <h3>GENERAL</h3>
           <div className="profile__arrow">
            <p>Idioma de subtitulos</p>
            <label />
           </div>
           <hr/>
           <h3>EXPERIENCIA DE LA APP</h3>
           <p>Utilizar conexión de datos</p>
           <div className="profile__arrow">
            <p>Notificaciones</p>
            <label />
           </div>
           <hr/>
           <h3>SOBRE...</h3>
           <div className="profile__arrow">
            <p>¿Necesitas ayuda?</p>
            <label />
           </div>
           <hr/>
           <p>Salir</p>
        </section>
        <section>
          <div className="profile__social">
            <IconLite iconSource={ SocialInstagram } alt="icono de instagram"/>
            <IconLite iconSource={ SocialTwitter } alt="icono de twitter"/>
            <IconLite iconSource={ SocialTiktok } alt="icono de tiktok"/>
          </div>
          <div className="profile__legal">
            <p>Terminos de servicio</p>
            <p>Politica de privacidad</p>
          </div>
        </section>
      </article>
    </>
  )
}

export default Profile
