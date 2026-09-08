import { useState, useEffect } from 'react'

const KEY = 'freshkart_recent'
const MAX = 6

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]')
    } catch {
      return []
    }
  })

  const addToViewed = (product) => {
    if (!product?._id) return
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p._id !== product._id)
      const updated = [product, ...filtered].slice(0, MAX)
      localStorage.setItem(KEY, JSON.stringify(updated))
      return updated
    })
  }

  const clearViewed = () => {
    localStorage.removeItem(KEY)
    setRecentlyViewed([])
  }

  return { recentlyViewed, addToViewed, clearViewed }
}
