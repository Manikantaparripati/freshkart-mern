import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { SkeletonCard } from '../ui/Skeleton'
import { FALLBACK_PRODUCTS } from '../../data/fallbackData'
import api from '../../services/api'

export default function RecommendedProducts({ categoryId, productId }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    api.get('/products/recommended', { params: { categoryId, productId } })
      .then((res) => {
        if (isMounted) {
          if (Array.isArray(res.data) && res.data.length > 0) {
            setProducts(res.data)
          } else {
            setProducts(FALLBACK_PRODUCTS.filter((p) => p._id !== productId).slice(0, 4))
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setProducts(FALLBACK_PRODUCTS.filter((p) => p._id !== productId).slice(0, 4))
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [categoryId, productId])

  const displayList = Array.isArray(products) && products.length > 0
    ? products
    : FALLBACK_PRODUCTS.filter((p) => p._id !== productId).slice(0, 4)

  if (!loading && displayList.length === 0) return null

  return (
    <section className="py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-dark">Recommended For You</h2>
          <p className="text-gray-500 text-sm">Based on what you're viewing</p>
        </div>
        <Link to="/products" className="text-primary-600 font-semibold text-sm hover:underline hidden sm:block">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
          : displayList.map((p) => <ProductCard key={p._id || p.id} product={p} />)}
      </div>
    </section>
  )
}
