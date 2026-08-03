import React from 'react'
import LoginGhibli from '../../assets/logo-ghibli.png'
import Input from '../../components/input/Input'
import PrimaryButton from '../../components/primarybutton/PrimaryButton'
import styles from './singup.module.css'

const SingUpScreen = ({ history }) => {
  const handleSingup = () => {
    history.replace('/')
  }

  return (
    <section className={styles.main}>
      <article className={styles.view}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={LoginGhibli}
              loading="lazy"
              alt={LoginGhibli} />
            <h2>Crea tu cuenta</h2>
          </div>
          <section className={styles.content}>
            <div className={styles.text}>
              <label for="name"></label>
              <Input
                size='30'
                placeholder={'Nombre Apellido'}
              />
            </div>
            <div className={styles.text}>
              <label for="email"></label>
              <Input
                type='email'
                size='30'
                pattern=".+@globex\.com"
                placeholder={'Correo electronico'}
                required
              />
            </div>
            <div className={styles.input}>
              <div className={styles.text}>
                <Input
                  type={'password'}
                  placeholder={'Contraseña'}
                />
              </div>
              <div className={styles.text}>
                <Input
                  type={'password'}
                  placeholder={'Confirma tu contraseña'}
                />
              </div>
            </div>
          </section>
          <section>
            <label className={styles.checkbox}>
              <input type={"checkbox"} name="checkbox" />
              Deseo recibir notificaciones semanales
            </label>
            <label className={styles.checkbox}>
              <input type={"checkbox"} name="checkbox" />
              Acepto terminos y condiciones
            </label>
          </section>
          <div>
            <PrimaryButton
              className={styles.button}
              onClick={handleSingup}
            >
              <p>Continuar</p>
            </PrimaryButton>
          </div>
          <div className={styles.redirect}>
            <p>Ya tienes una cuenta?</p>
            <a href="/login">Inicia sesión</a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingUpScreen
