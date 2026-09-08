import { Helmet } from 'react-helmet-async'
import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import ProductSort from '../components/product/ProductSort'
import { SkeletonCard } from '../components/ui/Skeleton'
import EmptyState from '../components/ui/EmptyState'
import Pagination from '../components/ui/Pagination'
import api from '../services/api'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const page = Number(searchParams.get('page') || 1)
  const sort = searchParams.get('sort') || ''

  const [inputVal, setInputVal] = useState(q)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)

  useEffect(() => {
    setInputVal(q)
  }, [q])

  useEffect(() => {
    if (!q.trim()) {
      setProducts([])
      setTotal(0)
      setLoading(false)
      return
    }

    setLoading(true)
    const params = {
      keyword: q.trim(),
      pageNumber: page,
    }
    if (sort) params.sort = sort

    api.get('/products', { params })
      .then((res) => {
        setProducts(res.data.products || [])
        setTotal(res.data.total || 0)
        setPages(res.data.pages || 1)
      })
      .catch(() => {
        setProducts([])
        setTotal(0)
      })
      .finally(() => setLoading(false))
  }, [q, page, sort])

  const handleSearch = (e) => {
    e.preventDefault()
    if (inputVal.trim()) {
      setSearchParams({ q: inputVal.trim(), page: '1' })
    }
  }

  const handleSortChange = (newSort) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (newSort) next.set('sort', newSort)
      else next.delete('sort')
      next.set('page', '1')
      return next
    })
  }

  const popularKeywords = ['Mango Pickle', 'Kaju Katli', 'Chai', 'Masala', 'Bhujia', 'Gulab Jamun']

  return (
    <>
      <Helmet>
        <title>{q ? `Search: "${q}" — FreshKart` : 'Search Products — FreshKart'}</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Search Header Banner */}
        <div className="bg-gradient-to-r from-orange-100/60 via-warm-100/40 to-amber-100/50 rounded-3xl p-6 sm:p-8 mb-8 border border-orange-200/50">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-3">
              Search Fresh Products
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Find your favorite Indian pickles, snacks, spices, sweets & dry fruits
            </p>

            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a product name, flavor, or spice..."
                className="w-full bg-white shadow-md rounded-2xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition text-dark border border-gray-100"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 w-5 h-5" />
              {inputVal && (
                <button
                  type="button"
                  onClick={() => setInputVal('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </form>

            {/* Quick Keyword Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
              <span className="text-xs text-gray-500 font-medium">Popular searches:</span>
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setSearchParams({ q: kw, page: '1' })}
                  className="text-xs bg-white/80 hover:bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Bar */}
        {q && (
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div>
              <h2 className="text-lg font-bold text-dark">
                Search Results for <span className="text-primary-600">"{q}"</span>
              </h2>
              {!loading && (
                <p className="text-xs text-gray-500 mt-0.5">
                  Showing {products.length} of {total} products
                </p>
              )}
            </div>
            {products.length > 0 && (
              <ProductSort value={sort} onChange={handleSortChange} />
            )}
          </div>
        )}

        {/* Product Grid / Empty State */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {pages > 1 && (
              <div className="mt-10">
                <Pagination
                  currentPage={page}
                  totalPages={pages}
                  onPageChange={(p) => {
                    setSearchParams((prev) => {
                      const next = new URLSearchParams(prev)
                      next.set('page', String(p))
                      return next
                    })
                  }}
                />
              </div>
            )}
          </>
        ) : q ? (
          <EmptyState
            icon="🔍"
            title={`No results found for "${q}"`}
            description="Try checking for spelling errors, using more general search terms, or explore popular categories below."
            actionLabel="Browse All Products"
            onAction={() => setSearchParams({ q: '', page: '1' })}
          />
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Start typing to search</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
              Enter any product name, category, or ingredient to find what you're craving.
            </p>
            <Link to="/products" className="btn-primary inline-flex">
              Explore All Products
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
