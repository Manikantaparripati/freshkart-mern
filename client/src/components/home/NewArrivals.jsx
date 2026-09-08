import { useEffect, useState } from 'react'
import ProductCard from '../product/ProductCard'
import { SkeletonCard } from '../ui/Skeleton'
import api from '../../services/api'

export default function NewArrivals() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/products/newarrivals')
      .then(res => setProducts(res.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (!loading && products.length === 0) return null

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-heading">New Arrivals</h2>
            <p className="text-gray-500 text-sm">Fresh additions to our collection</p>
          </div>
          <a href="/products" className="text-primary-600 font-semibold text-sm hover:underline hidden sm:block">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {loading
            ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            : products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))
          }
        </div>
      </div>
    </section>
  )
}
