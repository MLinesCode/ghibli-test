import { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import { HeartIcon } from '../../components/icons/NavIcons'
import Cat from '../../assets/cat.png'
import CompactHeader from '../../layout/CompactHeader'
import { useFavorites } from '../../hooks/useFavorites'
import { useFilms } from '../../hooks/useFilms'
import './favorites.css'

const FavoritesScreen = () => {
  const { favoriteIds, toggleFavorite } = useFavorites()
  const { films, isLoading, error, refetch } = useFilms()
  const [announcement, setAnnouncement] = useState('')
  const favoriteFilms = films.filter((film) => favoriteIds.includes(film.id))

  const removeFavorite = (film) => {
    toggleFavorite(film.id)
    setAnnouncement(`${film.title} se quitó de favoritos.`)
  }

  return (
    <main className="favorites-page">
      <CompactHeader />

      <section className="favorites-intro" aria-labelledby="favorites-title">
        <div>
          <span className="favorites-intro__eyebrow">Tu rincón del bosque</span>
          <h1 id="favorites-title">Historias que quieres volver a visitar</h1>
          <p>Tu colección se guarda en este dispositivo para acompañarte cuando regreses.</p>
        </div>
        {!isLoading && !error && favoriteFilms.length > 0 && (
          <div className="favorites-intro__seal" aria-label={`${favoriteFilms.length} películas guardadas`}>
            <strong>{favoriteFilms.length}</strong>
            <span>{favoriteFilms.length === 1 ? 'historia' : 'historias'}</span>
          </div>
        )}
      </section>

      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>

      {isLoading && (
        <section className="favorites-content" aria-label="Cargando favoritos" aria-busy="true">
          <div className="favorites-loading__title" />
          <div className="favorites-grid favorites-grid--loading" aria-hidden="true">
            {[0, 1, 2].map((item) => <div className="favorite-skeleton" key={item} />)}
          </div>
        </section>
      )}

      {!isLoading && error && (
        <section className="favorites-state" aria-labelledby="favorites-error-title">
          <div className="favorites-state__copy">
            <span className="favorites-intro__eyebrow">Una pausa en el camino</span>
            <h2 id="favorites-error-title">No pudimos abrir tu colección</h2>
            <p>Tus favoritos siguen guardados. Solo necesitamos recuperar la información de las películas.</p>
            <button type="button" onClick={refetch}>Intentar de nuevo</button>
          </div>
          <img src={Cat} alt="" aria-hidden="true" />
        </section>
      )}

      {!isLoading && !error && favoriteFilms.length === 0 && (
        <section className="favorites-state" aria-labelledby="favorites-empty-title">
          <div className="favorites-state__copy">
            <span className="favorites-intro__eyebrow">Tu colección empieza aquí</span>
            <h2 id="favorites-empty-title">Aún no guardaste ninguna historia</h2>
            <p>Busca una película y toca el corazón. Aparecerá aquí incluso después de cerrar la aplicación.</p>
            <Link className="favorites-state__button" to="/search">Explorar películas <span aria-hidden="true">→</span></Link>
          </div>
          <div className="favorites-state__art" aria-hidden="true">
            <span className="favorites-state__moon" />
            <img src={Cat} alt="" />
          </div>
        </section>
      )}

      {!isLoading && !error && favoriteFilms.length > 0 && (
        <section className="favorites-content" aria-labelledby="collection-title">
          <div className="favorites-content__heading">
            <div>
              <span className="favorites-intro__eyebrow">Colección guardada</span>
              <h2 id="collection-title">Mi lista</h2>
            </div>
            <Link to="/search">Encontrar más</Link>
          </div>

          <div className="favorites-grid">
            {favoriteFilms.map((film, index) => (
              <article className={`favorite-card ${index === 0 ? 'favorite-card--featured' : ''}`} key={film.id}>
                <img className="favorite-card__image" src={film.movie_banner || film.image} alt="" loading="lazy" />
                <div className="favorite-card__scrim" />
                <div className="favorite-card__content">
                  <div className="favorite-card__meta">
                    {index === 0 && <span className="favorite-card__featured-label">Próxima aventura</span>}
                    {film.release_date && <span>{film.release_date}</span>}
                    {film.rt_score && <span>★ {film.rt_score}</span>}
                  </div>
                  <h3>{film.title}</h3>
                  {film.original_title && <p className="favorite-card__original">{film.original_title}</p>}
                  <p className="favorite-card__description">{film.description}</p>
                  <div className="favorite-card__actions">
                    <Link to={`/movie/${film.id}`} aria-label={`Ver detalles de ${film.title}`}>Ver historia <span aria-hidden="true">→</span></Link>
                    <button type="button" onClick={() => removeFavorite(film)} aria-label={`Quitar ${film.title} de favoritos`}>
                      <HeartIcon filled />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <Menu />
    </main>
  )
}

export default FavoritesScreen
