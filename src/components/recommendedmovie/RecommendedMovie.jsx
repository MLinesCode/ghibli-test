import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../primarybutton/PrimaryButton'
import style from './recommendedmovie.module.css'

const RecommendedMovie = ({ film }) => {
  const navigate = useNavigate()

  if (!film) return null

  const { id, title, description, movie_banner, image, release_date, rt_score } = film
  const cover = movie_banner || image

  return (
    <div className={style.container}>
      <span className={style.eyebrow}>Recomendada para ti</span>
      <figure className={style.figure}>
        <img className={style.image} src={cover} loading="lazy" alt={title} />
      </figure>
      <div className={style.scrim} />
      <div className={style.title}>
        <h3 className={style.description}>{title}</h3>
        <p className={style.meta}>
          {release_date}
          {rt_score ? ` · ★ ${rt_score}` : ''}
        </p>
        <PrimaryButton className={style.play} onClick={() => navigate(`/movie/${id}`)}>
          <p>Ver Ahora</p>
        </PrimaryButton>
      </div>
    </div>
  )
}

export default RecommendedMovie
