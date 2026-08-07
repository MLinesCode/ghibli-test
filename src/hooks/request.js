let filmsRequest

const getFilms = async () => {
  if (!filmsRequest) {
    filmsRequest = fetch('https://ghi.lonepixell.com/films')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .catch((error) => {
        filmsRequest = undefined
        throw error
      })
  }

  return filmsRequest
}

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase()

export const getApiSuggestions = async (word) => {
  const films = await getFilms()
  const query = normalize(word.trim())

  if (!Array.isArray(films)) return []

  return films.filter((film) => [
    film.title,
    film.original_title,
    film.original_title_romanised,
    film.director,
    film.producer
  ].some((field) => normalize(field).includes(query)))
}
