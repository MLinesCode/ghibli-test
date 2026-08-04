import { Link } from 'react-router-dom';
import './movieposter.css';

const MoviePoster = ({ id, title, image, rt_score }) => {
  const score = Number(rt_score)

  return (
    <div className="movie__container">
      <Link
        to={`/movie/${id}`}
      >
        <figure className="movie__figure">
          <img className="movie__image" src={image} loading="lazy" alt={title} />
          {!Number.isNaN(score) && <span className="movie__score-badge">★ {score}</span>}
        </figure>
      </Link>
      <p className="movie__title">{title}</p>
    </div>
  )
}

export default MoviePoster
