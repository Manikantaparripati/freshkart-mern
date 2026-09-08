import { useState, useEffect, useRef } from 'react'
import { Search, X, Loader2, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import api from '../../services/api'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const debouncedQuery = useDebounce(query, 300)
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([])
      setLoading(false)
      return
    }

    let active = true
    setLoading(true)

    api.get('/products/search', { params: { q: debouncedQuery.trim() } })
      .then((res) => {
        if (active) {
          setSuggestions(res.data || [])
          setIsOpen(true)
        }
      })
      .catch(() => {
        if (active) setSuggestions([])
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [debouncedQuery])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      setIsOpen(false)
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleSelectSuggestion = (slug) => {
    setIsOpen(false)
    setQuery('')
    navigate(`/products/${slug}`)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true)
          }}
          placeholder="Search sweets, pickles, spices, snacks..."
          className="w-full bg-gray-100/80 hover:bg-gray-100 rounded-full py-2.5 pl-11 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white transition-all text-dark placeholder:text-gray-400"
          aria-label="Search products"
        />
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        
        {loading ? (
          <Loader2 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 animate-spin" />
        ) : query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setSuggestions([])
              setIsOpen(false)
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        ) : null}
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
          {loading ? (
            <div className="p-4 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-primary-500" />
              Searching fresh products...
            </div>
          ) : suggestions.length > 0 ? (
            <div>
              <div className="px-4 py-2 bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b">
                Suggestions ({suggestions.length})
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                {suggestions.map((item) => (
                  <button
                    key={item._id || item.slug}
                    type="button"
                    onClick={() => handleSelectSuggestion(item.slug)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-orange-50/60 transition group"
                  >
                    <img
                      src={item.images?.[0] || 'https://placehold.co/60x60/F97316/white?text=Food'}
                      alt={item.name}
                      className="w-10 h-10 rounded-lg object-cover bg-gray-100 flex-shrink-0"
                      onError={(e) => { e.target.src = 'https://placehold.co/60x60/F97316/white?text=Food' }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-dark truncate group-hover:text-primary-600 transition">
                        {item.name}
                      </p>
                      <p className="text-xs font-bold text-primary-600 mt-0.5">
                        ₹{item.price}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition" />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full text-center py-2.5 text-xs font-bold text-primary-600 bg-orange-50/50 hover:bg-orange-100/50 transition border-t"
              >
                View all results for "{query}" →
              </button>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-sm font-semibold text-gray-600">No products found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for pickles, kaju, chai, or spices</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
