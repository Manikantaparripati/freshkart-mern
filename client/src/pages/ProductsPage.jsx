import { Helmet } from 'react-helmet-async'
import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductFilters from '../components/product/ProductFilters'
import ProductSort from '../components/product/ProductSort'
import ProductCard from '../components/product/ProductCard'
import Pagination from '../components/ui/Pagination'
import { SkeletonCard } from '../components/ui/Skeleton'
import EmptyState from '../components/ui/EmptyState'
import api from '../services/api'

import { FALLBACK_PRODUCTS, FALLBACK_CATEGORIES } from '../data/fallbackData'

export default function ProductsPage() {
  const { slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState(FALLBACK_CATEGORIES)
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Read query state from URL
  const page = Number(searchParams.get('page') || 1)
  const sort = searchParams.get('sort') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''

  const updateParam = (key, value) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (value) next.set(key, value)
      else next.delete(key)
      next.set('page', '1')
      return next
    })
  }

  // Fetch categories for filter sidebar
  useEffect(() => {
    api.get('/categories')
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setCategories(res.data)
        }
      })
      .catch(() => {
        setCategories(FALLBACK_CATEGORIES)
      })
  }, [])

  // Fetch products whenever filters/page/slug change
  useEffect(() => {
    setLoading(true)

    const params = { pageNumber: page }
    if (sort) params.sort = sort
    if (minPrice) params.minPrice = minPrice
    if (maxPrice) params.maxPrice = maxPrice

    const applyFallback = () => {
      let filtered = [...FALLBACK_PRODUCTS]
      if (slug) {
        filtered = filtered.filter((p) => p.category?.slug === slug)
      }
      if (minPrice) filtered = filtered.filter((p) => p.price >= Number(minPrice))
      if (maxPrice) filtered = filtered.filter((p) => p.price <= Number(maxPrice))
      if (sort === 'price') filtered.sort((a, b) => a.price - b.price)
      if (sort === '-price') filtered.sort((a, b) => b.price - a.price)
      if (sort === '-rating') filtered.sort((a, b) => b.rating - a.rating)
      setProducts(filtered)
      setTotal(filtered.length)
      setPages(1)
    }

    // If we have a category slug, resolve it first
    const fetchProducts = async () => {
      try {
        if (slug) {
          const catRes = await api.get(`/categories/${slug}`)
          if (catRes.data?._id) {
            params.category = catRes.data._id
          }
        }
        const res = await api.get('/products', { params })
        if (Array.isArray(res.data?.products) && res.data.products.length > 0) {
          setProducts(res.data.products)
          setTotal(res.data.total || res.data.products.length)
          setPages(res.data.pages || 1)
        } else {
          applyFallback()
        }
      } catch {
        applyFallback()
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [slug, page, sort, minPrice, maxPrice])

  const categoryTitle = slug
    ? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
    : 'All Products'

  return (
    <>
      <Helmet>
        <title>{categoryTitle} — FreshKart</title>
        <meta name="description" content={`Shop ${categoryTitle} online at FreshKart. Authentic Indian food delivered fresh.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a>
          <span className="mx-1">/</span>
          <span className="text-dark font-medium">{categoryTitle}</span>
        </nav>

        <div className="flex gap-8">
          {/* Filter Sidebar — Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <ProductFilters
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinPrice={(v) => updateParam('minPrice', v)}
              onMaxPrice={(v) => updateParam('maxPrice', v)}
              onClear={() => {
                setSearchParams({ page: '1' })
              }}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header Bar */}
            <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
              <div>
                <h1 className="text-2xl font-extrabold text-dark">{categoryTitle}</h1>
                {!loading && (
                  <p className="text-sm text-gray-400 mt-0.5">{total} products found</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <ProductSort value={sort} onChange={(v) => updateParam('sort', v)} />
              </div>
            </div>

            {/* Active filters display */}
            {(minPrice || maxPrice) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {minPrice && (
                  <span className="flex items-center gap-1 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    Min ₹{minPrice}
                    <button onClick={() => updateParam('minPrice', '')} aria-label="Remove filter">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {maxPrice && (
                  <span className="flex items-center gap-1 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    Max ₹{maxPrice}
                    <button onClick={() => updateParam('maxPrice', '')} aria-label="Remove filter">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product Grid */}
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : products.length === 0 ? (
              <EmptyState
                icon="📦"
                title="No products found"
                description="Try adjusting your filters or browse a different category."
                actionLabel="Clear Filters"
                onAction={() => setSearchParams({ page: '1' })}
              />
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
                <div className="mt-10">
                  <Pagination
                    currentPage={page}
                    totalPages={pages}
                    onPageChange={(p) => updateParam('page', p)}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {showFilters && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setShowFilters(false)}
            />
            <aside className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-3xl p-6 md:hidden max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg text-dark">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ProductFilters
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPrice={(v) => { updateParam('minPrice', v); setShowFilters(false) }}
                onMaxPrice={(v) => { updateParam('maxPrice', v); setShowFilters(false) }}
                onClear={() => { setSearchParams({ page: '1' }); setShowFilters(false) }}
              />
            </aside>
          </>
        )}
      </div>
    </>
  )
}
