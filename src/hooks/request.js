import axios from "axios";

const url = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

// se utilizo axios para la peticion se necesita cambiar la estrutura de la api

export const getApiSuggestions = (word) => {
  let result = url
    .get(`/films?title=${word}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })

    return result
}