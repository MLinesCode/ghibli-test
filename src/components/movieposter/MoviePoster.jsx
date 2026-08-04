import { Link } from 'react-router-dom';
import './movieposter.css';

const MoviePoster = ({ id, title, image, rt_score }) => {
  const score = Number(rt_score)

  return (
    <div className="movieposter__container">
      <Link
        to={`/movie/${id}`}
      >
        <figure className="movieposter__figure">
          <img className="movieposter__image" src={image} loading="lazy" alt={title} />
          {!Number.isNaN(score) && <span className="movieposter__score-badge">★ {score}</span>}
        </figure>
      </Link>
      <p className="movieposter__title">{title}</p>
    </div>
  )
}

export default MoviePoster
