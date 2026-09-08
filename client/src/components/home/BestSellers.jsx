import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
import { SkeletonCard } from '../ui/Skeleton'
import { Flame, ArrowRight } from 'lucide-react'
import { FALLBACK_PRODUCTS } from '../../data/fallbackData'
import api from '../../services/api'

export default function BestSellers() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    let isMounted = true
    api.get('/products/bestsellers')
      .then((res) => {
        if (isMounted) {
          if (Array.isArray(res.data) && res.data.length > 0) {
            setProducts(res.data)
          } else {
            setProducts(FALLBACK_PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4))
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          // Graceful fallback to rich mock data if backend not connected
          setProducts(FALLBACK_PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4))
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const displayList = Array.isArray(products) && products.length > 0
    ? products
    : FALLBACK_PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4)

  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="section-heading flex items-center gap-2">
            <Flame className="w-6 h-6 text-primary-500 fill-primary-500" /> Best Sellers
          </h2>
          <p className="section-sub mb-0">Our most ordered and highly-rated products</p>
        </div>
        <Link
          to="/products"
          className="text-primary-600 font-bold text-sm hover:underline hidden sm:flex items-center gap-1"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {loading
          ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
          : displayList.map((p) => (
              <ProductCard key={p._id || p.id} product={p} />
            ))}
      </div>
    </section>
  )
}
