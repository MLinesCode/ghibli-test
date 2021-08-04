import { useState, useEffect } from "react";

export const useInitialState = () => {
  const [ film, setFilm ] = useState([]);
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((film) => setFilm(film))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return film
}