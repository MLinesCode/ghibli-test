import LoginGhibli from '../../assets/logo-ghibli.png'
import Input from '../../components/input/Input'
import PrimaryButton from '../../components/primarybutton/PrimaryButton'
import SocialLogin from '../../components/sociallogin/SocialLogin'
import LoginFacebook from '../../assets/icons/facebook.svg'
import LoginGoogle from '../../assets/icons/google.svg'
import LoginImage from '../../assets/icon-login.png'
import styles from './login.module.css'

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace('/')
  }

  return (
    <section className={styles.main}>
      <article className={styles.view}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={LoginGhibli}
              loading="lazy"
              alt={LoginGhibli}
            />
            <img src={LoginImage}
              className={styles.imglogin}
              loading="lazy"
              alt={LoginImage} />
          </div>
          <div className={styles.input}>
            <Input
              type={'text'}
              placeholder={'Correo electronico'}
            />
            <Input
              type={'password'}
              placeholder={'Contraseña'}
            />
            <p>¿Olvidaste tu contraseña?</p>
          </div>
          <PrimaryButton
            className={styles.button}
            onClick={handleLogin}
          >
            <p>Iniciar sesión</p>
          </PrimaryButton>
          <div className={styles.redirect}>
            <p>Aun sin cuenta?</p>
            <a href="/singup">Registrate</a>
          </div>
        </div>
        <p className={styles.section}>OR</p>
        <div className={styles.line}></div>
        <div className={styles.social}>
          <SocialLogin
            socialName="Facebook"
            socialIcon={LoginFacebook}
          />
          <SocialLogin
            socialName="Google"
            socialIcon={LoginGoogle}
          />
        </div>
      </article>
    </section>
  )
}

export default LoginScreen
