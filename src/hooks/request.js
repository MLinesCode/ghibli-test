import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ghi.lonepixell.com'
})

let filmsRequest

const getFilms = async () => {
  if (!filmsRequest) {
    filmsRequest = api.get('/films')
      .then((response) => response.data)
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
