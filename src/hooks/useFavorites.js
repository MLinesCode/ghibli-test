import { useCallback, useState } from 'react'

const STORAGE_KEY = 'ghibli:favorites'

const readStoredIds = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState(readStoredIds)

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((current) => {
      const next = current.includes(id)
        ? current.filter((favId) => favId !== id)
        : [...current, id]
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const isFavorite = useCallback((id) => favoriteIds.includes(id), [favoriteIds])

  return { favoriteIds, isFavorite, toggleFavorite }
}
