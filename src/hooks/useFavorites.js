import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'ghibli:favorites'
const FAVORITES_EVENT = 'ghibli:favorites-change'

const readStoredIds = () => {
  try {
    const storedValue = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    return Array.isArray(storedValue)
      ? [...new Set(storedValue.filter((id) => typeof id === 'string'))]
      : []
  } catch {
    return []
  }
}

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState(readStoredIds)

  useEffect(() => {
    const syncFavorites = () => setFavoriteIds(readStoredIds())
    window.addEventListener('storage', syncFavorites)
    window.addEventListener(FAVORITES_EVENT, syncFavorites)
    return () => {
      window.removeEventListener('storage', syncFavorites)
      window.removeEventListener(FAVORITES_EVENT, syncFavorites)
    }
  }, [])

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((current) => {
      const next = current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]

      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        window.queueMicrotask(() => window.dispatchEvent(new Event(FAVORITES_EVENT)))
      } catch {
        // The in-memory state remains usable when storage is unavailable.
      }

      return next
    })
  }, [])

  const isFavorite = useCallback((id) => favoriteIds.includes(id), [favoriteIds])

  return { favoriteIds, isFavorite, toggleFavorite }
}
