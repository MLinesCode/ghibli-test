import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFilm } from '../../hooks/useFilm'
import { TRAILERS } from '../../data/trailers'
import IconLite from '../iconlite/IconLite'
import ArrowLeft from '../../assets/icons/left-arrow.svg'
import HeartIcon from '../../assets/icons/heart.png'
import ClockIcon from '../../assets/icons/clock.png'
import './movieinfo.css'

const Cloud = ({ className }) => (
  <svg className={className} viewBox="0 0 200 100" aria-hidden="true">
    <ellipse cx="60" cy="62" rx="42" ry="28" />
    <ellipse cx="108" cy="46" rx="52" ry="36" />
    <ellipse cx="156" cy="64" rx="38" ry="26" />
    <rect x="30" y="58" width="148" height="32" rx="16" />
  </svg>
)

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
}

const STAT_ICONS = {
  people: (
    <svg {...iconProps}>
      <circle cx="12" cy="7.2" r="3.4" pathLength="1" />
      <path d="M5.5 20c0-4 2.9-6.5 6.5-6.5s6.5 2.5 6.5 6.5" pathLength="1" />
    </svg>
  ),
  species: (
    <svg {...iconProps}>
      <path d="M5 19C5 10 11 4 20 4C20 13 14 19 5 19Z" pathLength="1" />
      <path d="M5 19C9 15 13 11 18 6" pathLength="1" />
    </svg>
  ),
  locations: (
    <svg {...iconProps}>
      <path d="M12 21C12 21 5.5 14.6 5.5 9.8C5.5 6 8.4 3 12 3C15.6 3 18.5 6 18.5 9.8C18.5 14.6 12 21 12 21Z" pathLength="1" />
      <circle cx="12" cy="9.6" r="2.4" pathLength="1" />
    </svg>
  ),
  vehicles: (
    <svg {...iconProps}>
      <path d="M4 16V13.5C4 12.4 4.7 11.5 5.7 11.2L7.6 10.6C8 8.7 9.7 7.3 11.7 7.3H12.3C14.3 7.3 16 8.7 16.4 10.6L18.3 11.2C19.3 11.5 20 12.4 20 13.5V16" pathLength="1" />
      <path d="M3 16H21" pathLength="1" />
      <circle cx="7.5" cy="16.5" r="1.6" pathLength="1" />
      <circle cx="16.5" cy="16.5" r="1.6" pathLength="1" />
    </svg>
  )
}

const PlayIcon = () => (
  <svg {...iconProps}>
    <polygon points="8,6 19,12 8,18" pathLength="1" />
  </svg>
)

const MovieInfo = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { film, isLoading } = useFilm(id)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showTrailer, setShowTrailer] = useState(false)

  if (isLoading || !film) {
    return (
      <div className="movie__main">
        <div className="movie__skeleton-hero" />
        <div className="movie__skeleton-poster" />
        <div className="movie__content">
          <div className="movie__skeleton-line movie__skeleton-line--wide" />
          <div className="movie__skeleton-line movie__skeleton-line--title" />
          <div className="movie__skeleton-line" />
          <div className="movie__skeleton-line" />
          <div className="movie__skeleton-line movie__skeleton-line--short" />
        </div>
      </div>
    )
  }

  const {
    title,
    original_title,
    original_title_romanised,
    description,
    director,
    producer,
    release_date,
    running_time,
    rt_score,
    image,
    movie_banner,
    people = [],
    species = [],
    locations = [],
    vehicles = []
  } = film

  const heroImage = movie_banner || image
  const score = Number(rt_score)
  const trailerId = TRAILERS[id]
  const trailerSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${title} trailer Studio Ghibli`
  )}`

  const stats = [
    { icon: 'people', singular: 'personaje', plural: 'personajes', count: people.length },
    { icon: 'species', singular: 'especie', plural: 'especies', count: species.length },
    { icon: 'locations', singular: 'lugar', plural: 'lugares', count: locations.length },
    { icon: 'vehicles', singular: 'vehículo', plural: 'vehículos', count: vehicles.length }
  ].filter((s) => s.count > 0)

  return (
    <div className="movie__main">
      <div className="movie__hero">
        <div
          className="movie__hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="movie__hero-clouds" aria-hidden="true">
          <Cloud className="cloud cloud--1" />
          <Cloud className="cloud cloud--2" />
          <Cloud className="cloud cloud--3" />
        </div>
        <div className="movie__hero-scrim" />

        <div className="movie__hero-inner">
          <div className="movie__hero-nav">
            <button
              className="movie__glass-btn"
              onClick={() => navigate('/home')}
              aria-label="Volver"
            >
              <IconLite iconSource={ArrowLeft} />
            </button>
            <button
              className={`movie__glass-btn movie__favorite ${isFavorite ? 'is-active' : ''}`}
              onClick={() => setIsFavorite((f) => !f)}
              aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              <img src={HeartIcon} alt="" className="movie__favorite-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="movie__poster-frame-wrap">
        <figure className="movie__poster-frame">
          <img className="movie__poster-img" src={image} alt={title} loading="lazy" />
        </figure>

        {!Number.isNaN(score) && (
          <div className="movie__seal-wrap">
            <div
              className="movie__seal"
              title={`${score}% de aprobación de la crítica en Rotten Tomatoes`}
            >
              <span className="movie__seal-value">{score}</span>
              <span className="movie__seal-percent">%</span>
            </div>
            <span className="movie__seal-caption">Aprobación</span>
          </div>
        )}
      </div>

      <div className="movie__content">
        {(original_title || original_title_romanised) && (
          <p className="movie__original-title">
            {original_title}
            {original_title_romanised ? ` · ${original_title_romanised}` : ''}
          </p>
        )}

        <h1 className="movie__title">{title}</h1>

        <div className="movie__meta">
          {release_date && <span className="movie__chip">{release_date}</span>}
          {running_time && (
            <span className="movie__chip movie__chip--icon">
              <img src={ClockIcon} alt="" />
              {running_time} min
            </span>
          )}
        </div>

        {description && <p className="movie__description">{description}</p>}

        <div className="movie__trailer">
          {trailerId ? (
            showTrailer ? (
              <div className="movie__trailer-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1`}
                  title={`Tráiler de ${title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <button className="movie__trailer-btn" onClick={() => setShowTrailer(true)}>
                <span className="movie__trailer-icon">
                  <PlayIcon />
                </span>
                Ver tráiler
              </button>
            )
          ) : (
            <a
              className="movie__trailer-btn movie__trailer-btn--ghost"
              href={trailerSearchUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="movie__trailer-icon">
                <PlayIcon />
              </span>
              Buscar tráiler en YouTube
            </a>
          )}
        </div>

        {(director || producer) && (
          <div className="movie__crew">
            {director && (
              <div className="movie__crew-item">
                <span className="movie__crew-label">Dirección</span>
                <span className="movie__crew-value">{director}</span>
              </div>
            )}
            {producer && (
              <div className="movie__crew-item">
                <span className="movie__crew-label">Producción</span>
                <span className="movie__crew-value">{producer}</span>
              </div>
            )}
          </div>
        )}

        {stats.length > 0 && (
          <div className="movie__stats">
            <span className="movie__stats-label">Aparecen en esta historia</span>
            <div className="movie__stats-row">
              {stats.map((s) => (
                <div className="movie__stat" key={s.plural}>
                  <span className="movie__stat-icon">{STAT_ICONS[s.icon]}</span>
                  <span className="movie__stat-count">{s.count}</span>
                  <span className="movie__stat-label">
                    {s.count === 1 ? s.singular : s.plural}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieInfo
