import { useState, useEffect } from "react";

export const useFilms = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const response = await fetch('https://ghibliapi.herokuapp.com/films')
      const data = await response.json()
      setFilms(data)
      setLoading(false)
    }

    fetchData()
  }, []);

  return {
    films,
    isLoading
  }
}