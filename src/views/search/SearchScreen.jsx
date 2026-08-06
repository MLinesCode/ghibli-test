import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeartIcon } from '../../components/icons/NavIcons'
import Totoro from '../../assets/totoro.png'
import Menu from '../../components/menu/Menu'
import CompactHeader from '../../layout/CompactHeader'
import { getApiSuggestions } from '../../hooks/request'
import { useFavorites } from '../../hooks/useFavorites'
import './searchscreen.css'

const DEBOUNCE_MS = 450

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="10.8" cy="10.8" r="6.8" />
    <path d="m16 16 4.2 4.2" />
  </svg>
)

const ClearIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m7 7 10 10M17 7 7 17" />
  </svg>
)

const SearchScreen = () => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const [query, setQuery] = useState('')
  const [searchedQuery, setSearchedQuery] = useState('')
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('idle')
  const requestId = useRef(0)
  const resultLinks = useRef([])
  const searchInput = useRef(null)

  const search = useCallback(async (rawQuery) => {
    const nextQuery = rawQuery.trim()
    const currentRequest = requestId.current + 1
    requestId.current = currentRequest

    if (!nextQuery) {
      setResults([])
      setSearchedQuery('')
      setStatus('idle')
      return
    }

    setSearchedQuery(nextQuery)
    setStatus('loading')

    try {
      const films = await getApiSuggestions(nextQuery)
      if (requestId.current !== currentRequest) return
      setResults(films)
      setStatus(films.length ? 'success' : 'empty')
    } catch {
      if (requestId.current !== currentRequest) return
      setResults([])
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      requestId.current += 1
      setResults([])
      setSearchedQuery('')
      setStatus('idle')
      return undefined
    }

    const timeoutId = window.setTimeout(() => search(query), DEBOUNCE_MS)
    return () => window.clearTimeout(timeoutId)
  }, [query, search])

  const handleSubmit = (event) => {
    event.preventDefault()
    search(query)
  }

  const handleGridKeyDown = (event, index) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return

    const columns = window.matchMedia('(min-width: 760px)').matches ? 3 : 2
    const movement = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -columns,
      ArrowDown: columns
    }[event.key]
    const nextIndex = index + movement

    if (nextIndex >= 0 && nextIndex < results.length) {
      event.preventDefault()
      resultLinks.current[nextIndex]?.focus()
    }
  }

  const announcement = {
    idle: 'Escribe el nombre de una película para comenzar.',
    loading: `Buscando ${searchedQuery}.`,
    success: `${results.length} ${results.length === 1 ? 'película encontrada' : 'películas encontradas'} para ${searchedQuery}.`,
    empty: `No encontramos películas para ${searchedQuery}.`,
    error: 'No pudimos completar la búsqueda.'
  }[status]

  return (
    <main className="search-page">
      <CompactHeader />

      <section className="search-hero" aria-labelledby="search-title">
        <p className="search-hero__eyebrow">Explora mundos inolvidables</p>
        <h1 id="search-title">¿Qué historia quieres descubrir?</h1>
        <p className="search-hero__intro">Busca por título, dirección o nombre original.</p>

        <form className="search-form" role="search" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="film-search">Buscar películas de Studio Ghibli</label>
          <div className={`search-form__field ${status === 'loading' ? 'is-loading' : ''}`}>
            <span className="search-form__icon"><SearchIcon /></span>
            <input
              ref={searchInput}
              id="film-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej. Totoro, Miyazaki…"
              autoComplete="off"
              enterKeyHint="search"
              aria-describedby="search-hint search-status"
            />
            <button
              className="search-form__clear"
              type="button"
              onClick={() => {
                setQuery('')
                searchInput.current?.focus()
              }}
              disabled={!query}
              aria-label="Limpiar búsqueda"
            >
              <ClearIcon />
            </button>
            <button className="search-form__submit" type="submit" disabled={!query.trim()}>
              <span>Buscar</span>
              <SearchIcon />
            </button>
          </div>
          <p id="search-hint" className="search-form__hint">Los resultados aparecen mientras escribes.</p>
        </form>
      </section>

      <p id="search-status" className="sr-only" role="status" aria-live="polite">{announcement}</p>

      {status === 'loading' && (
        <section className="search-results" aria-label="Cargando resultados" aria-busy="true">
          <div className="search-results__heading">
            <span className="search-results__kicker">Buscando en el archivo</span>
            <span className="search-results__loader" aria-hidden="true" />
          </div>
          <div className="search-grid search-grid--loading" aria-hidden="true">
            {[0, 1, 2, 3].map((item) => <div className="search-card-skeleton" key={item} />)}
          </div>
        </section>
      )}

      {status === 'success' && (
        <section className="search-results" aria-labelledby="results-title">
          <div className="search-results__heading">
            <div>
              <span className="search-results__kicker">Resultados para “{searchedQuery}”</span>
              <h2 id="results-title">Historias encontradas</h2>
            </div>
            <span className="search-results__count">{results.length}</span>
          </div>

          <div className="search-grid">
            {results.map((film, index) => (
              <article className="search-card" key={film.id}>
                <img className="search-card__backdrop" src={film.movie_banner || film.image} alt="" loading="lazy" />
                <div className="search-card__scrim" />
                <div className="search-card__content">
                  <div className="search-card__meta">
                    {film.release_date && <span>{film.release_date}</span>}
                    {film.running_time && <span>{film.running_time} min</span>}
                    {film.rt_score && <span className="search-card__score">★ {film.rt_score}</span>}
                  </div>
                  <h3>{film.title}</h3>
                  {film.original_title && <p className="search-card__original">{film.original_title}</p>}
                  <p className="search-card__description">{film.description}</p>
                  <div className="search-card__actions">
                    <Link
                      className="search-card__primary"
                      to={`/movie/${film.id}`}
                      ref={(node) => { resultLinks.current[index] = node }}
                      onKeyDown={(event) => handleGridKeyDown(event, index)}
                      aria-label={`Ver detalles de ${film.title}`}
                    >
                      Ver historia <span aria-hidden="true">→</span>
                    </Link>
                    <button
                      className={`search-card__favorite ${isFavorite(film.id) ? 'is-active' : ''}`}
                      type="button"
                      onClick={() => toggleFavorite(film.id)}
                      aria-label={isFavorite(film.id) ? `Quitar ${film.title} de favoritos` : `Agregar ${film.title} a favoritos`}
                    >
                      <HeartIcon filled={isFavorite(film.id)} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {(status === 'idle' || status === 'empty' || status === 'error') && (
        <section className={`search-empty search-empty--${status}`} aria-labelledby="empty-title">
          <div className="search-empty__copy">
            <span className="search-empty__eyebrow">{status === 'idle' ? 'Una sugerencia del bosque' : 'El bosque sigue esperando'}</span>
            <h2 id="empty-title">
              {status === 'idle' && '¿Despistado?'}
              {status === 'empty' && 'No vimos esa historia'}
              {status === 'error' && 'El viento interrumpió la búsqueda'}
            </h2>
            <p>
              {status === 'idle' && 'Escribe una palabra. Totoro te ayudará a encontrar algo mágico.'}
              {status === 'empty' && 'Prueba con otro título, su dirección o una palabra más corta.'}
              {status === 'error' && 'Comprueba tu conexión y vuelve a intentarlo.'}
            </p>
            {status === 'error' && (
              <button className="search-empty__retry" type="button" onClick={() => search(query)}>Intentar de nuevo</button>
            )}
          </div>
          <div className="search-empty__art" aria-hidden="true">
            <span className="search-empty__sun" />
            <span className="search-empty__cloud search-empty__cloud--one" />
            <span className="search-empty__cloud search-empty__cloud--two" />
            <img src={Totoro} loading="eager" alt="" />
          </div>
        </section>
      )}

      <Menu />
    </main>
  )
}

export default SearchScreen
