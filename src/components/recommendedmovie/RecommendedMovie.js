import PrimaryButton from '../primarybutton/PrimaryButton'
import style from './recommendedmovie.module.css'

const RecommendedMovie = ({ movieCover, movieTitle }) => {
  return (
    <div className={style.container}>
      <figure className={style.figure}>
        <img src={ movieCover } loading="lazy" alt={ movieCover } />
      </figure>
      <div className={style.title}>
        <h3 className={style.description}>{ movieTitle }</h3>
          <PrimaryButton
              className={style.play}
          >
            <p>Ver Ahora</p>
          </PrimaryButton>
      </div>
    </div>
  )
}

export default RecommendedMovie
