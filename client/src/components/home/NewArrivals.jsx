import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
import { SkeletonCard } from '../ui/Skeleton'
import { Sparkles, ArrowRight } from 'lucide-react'
import { FALLBACK_PRODUCTS } from '../../data/fallbackData'
import api from '../../services/api'

export default function NewArrivals() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    api.get('/products/newarrivals')
      .then((res) => {
        if (isMounted) {
          if (Array.isArray(res.data) && res.data.length > 0) {
            setProducts(res.data)
          } else {
            setProducts(FALLBACK_PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4))
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setProducts(FALLBACK_PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4))
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
    : FALLBACK_PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-heading flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary-500" /> New Arrivals
            </h2>
            <p className="text-gray-500 text-sm">Fresh additions and seasonal creations</p>
          </div>
          <Link to="/products" className="text-primary-600 font-semibold text-sm hover:underline hidden sm:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {loading
            ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            : displayList.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
          }
        </div>
      </div>
    </section>
  )
}
