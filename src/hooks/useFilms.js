import { useCallback, useEffect, useState } from 'react'

export const useFilms = () => {
  const [films, setFilms] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [requestKey, setRequestKey] = useState(0)

  const refetch = useCallback(() => setRequestKey((key) => key + 1), [])

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        const response = await fetch('https://ghi.lonepixell.com/films', { signal: controller.signal })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        if (!Array.isArray(data)) throw new Error('Formato de respuesta inválido')
        setFilms(data)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setFilms([])
          setError(requestError)
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchData()
    return () => controller.abort()
  }, [requestKey])

  return { films, isLoading, error, refetch }
}
