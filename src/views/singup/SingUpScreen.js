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
            <img src={LoginGhibli}
              loading="lazy"
              alt={LoginGhibli} />
            <h2>Crea tu cuenta</h2>
          </div>
          <section className='singup__content'>
            <div className="singup__input">
              <h3>Correo electronico</h3>
              <label for="email"></label>
              <Input
                type='email'
                size='30'
                pattern=".+@globex\.com"
                placeholder={'Correo electronico'}
                required
              />
            </div>
            <div className="singup__input">
              <h3>Crea tu contraseña</h3>
              <div className='singup__text'>
                <Input
                  type={'password'}
                  placeholder={'Contraseña'}
                />
              </div>
              <div className='singup__text'>
                <Input
                  type={'password'}
                  placeholder={'Confirma tu contraseña'}
                />
              </div>
            </div>
          </section>
          <div>
            <PrimaryButton
              className={"singup__button"}
              onClick={handleSingup}
            >
              <p>Continuar</p>
            </PrimaryButton>
          </div>
          <div className="singup__redirect">
            <p>Ya tienes una cuenta?</p>
            <a href="/login">Inicia sesión</a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingUpScreen
