import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../primarybutton/PrimaryButton'
import style from './recommendedmovie.module.css'

const StarIcon = ({ empty }) => (
  <svg
    className={`${style.ratingStar} ${empty ? style.isEmpty : ''}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
)

const RecommendedMovie = ({ film }) => {
  const navigate = useNavigate()

  if (!film) return null

  const { id, title, description, movie_banner, image, release_date, rt_score } = film
  const cover = movie_banner || image
  const score = Number(rt_score)
  const filledStars = Math.round(score / 20)

  return (
    <div className={style.container}>
      <span className={style.eyebrow}>Recomendada para ti</span>
      <figure className={style.figure}>
        <img
          className={style.image}
          src={cover}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          alt={title}
        />
      </figure>
      <div className={style.scrim} />
      <div className={style.title}>
        <h3 className={style.description}>{title}</h3>
        <p className={style.meta}>{release_date}</p>
        {!Number.isNaN(score) && (
          <div className={style.rating} aria-label={`Valoración de la crítica: ${score} de 100`}>
            <span className={style.ratingStars}>
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} empty={i >= filledStars} />
              ))}
            </span>
            <span className={style.ratingLabel}>{score}% de la crítica</span>
          </div>
        )}
        <PrimaryButton className={style.play} onClick={() => navigate(`/movie/${id}`)}>
          <p>Ver Ahora</p>
        </PrimaryButton>
      </div>
    </div>
  )
}

export default RecommendedMovie
