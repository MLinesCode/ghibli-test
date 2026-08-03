import styles from './skelleton.module.css'

const Skelleton = () => {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.filmsContainer}>
          <div className={styles.category}></div>
          <div className={styles.filmContainer}>
            <div>
              <div className={styles.film}></div>
              <p className={styles.title}></p>
            </div>
            <div>
              <div className={styles.film}></div>
              <p className={styles.title}></p>
            </div>
            <div>
              <div className={styles.film}></div>
              <p className={styles.title}></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skelleton