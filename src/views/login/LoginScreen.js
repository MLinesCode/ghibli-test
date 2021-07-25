import React from 'react'
import LoginGhibli from '../../assets/logo-ghibli.png'
import Input from '../../components/input/Input'
import PrimaryButton from '../../components/primarybutton/PrimaryButton'
import SocialLogin from '../../components/sociallogin/SocialLogin'
import LoginFacebook from '../../assets/icons/facebook.svg'
import LoginGoogle from '../../assets/icons/google.svg'
import LoginImage from '../../assets/cat.png'
import './login.css'

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace('/')
  }
  
  return (
    <section className="login__main">
      <article className="login__view">
        <div className="login__container">
          <div className="login__image">
            <img src={ LoginGhibli }
                loading="lazy"
                alt={ LoginGhibli }
            />
            <img src={ LoginImage }
                 loading="lazy"
                 alt={ LoginImage } />
          </div>
          <div className="login__input">
            <Input 
                type={ 'text' }
                placeholder={ 'Correo electronico' }
            />
          </div>
          <PrimaryButton 
              className={"login__button"}
              onClick={ handleLogin }
              buttonText={ "Iniciar Sesion" }
          />
          <div className="login__redirect">
            <p>Aun sin cuenta?</p>
            <a href="/singup">Registrate</a>
          </div>
        </div>
        <p className="login__section">O</p>
        <hr />
        <div className="login__social">
          <SocialLogin 
              socialName="Facebook"
              socialIcon={ LoginFacebook }
          />
          <SocialLogin 
              socialName="Google"
              socialIcon={ LoginGoogle }    
          />
        </div>
      </article>
    </section>
  )
}

export default LoginScreen
