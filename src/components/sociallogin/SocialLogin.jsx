import styles from './sociallogin.module.css'

const SocialLogin = ({ socialName, socialIcon }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <img
          className={styles.icon}
          src={socialIcon}
          alt={socialIcon}
        />
        Continuar con {socialName}
      </button>
    </div>
  )
}

export default SocialLogin
