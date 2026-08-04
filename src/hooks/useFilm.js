import { useState, useEffect } from "react";

export const useFilm = (id) => {
  const [film, setFilm] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setFilm(null);

    async function fetchData() {
      const response = await fetch(`https://ghi.lonepixell.com/films/${id}`)
      const data = await response.json()
      if (!cancelled) {
        setFilm(data)
        setLoading(false)
      }
    }

    fetchData();
    return () => { cancelled = true }
  }, [id]);

  return { film, isLoading }
}
