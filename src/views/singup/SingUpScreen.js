import React from 'react'
import LoginGhibli from '../../assets/logo-ghibli.png'
import Input from '../../components/input/Input'
import PrimaryButton from '../../components/primarybutton/PrimaryButton'
import './singup.css'

const SingUpScreen = ({ history }) => {
  const handleSingup = () => {
    history.replace('/')
  }

  return (
    <section className="singup__main">
      <article className="singup__view">
        <div className="singup__container">
          <div className="singup__image">
            <img src={ LoginGhibli }
                loading="lazy"
                alt={ LoginGhibli } />
            <h2>Crea tu cuenta</h2>
          </div>
          <div className="singup__input">
            <Input
                type={ 'text' }
                placeholder={ 'Correo electronico' }
            />
          </div>
          <div className="singup__input">
            <Input
                type={ 'text' }
                placeholder={ 'Contraseña' }
            />
            <div className="singup__validation">
              <p>Contraseña</p>
            </div>
          </div>
          <div className="singup__button">
            <PrimaryButton
                className={"singup__button"}
                onClick={ handleSingup }
            >
              <p>Continuar</p>
            </PrimaryButton>
          </div>
          <div className="singup__redirect">
            <p>Ya tienes una cuenta?</p>
            <a href="/login">Inicia Sesión</a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingUpScreen
