import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { SkeletonCard } from '../ui/Skeleton'
import api from '../../services/api'

export default function RecommendedProducts({ categoryId, productId }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!categoryId) return
    api.get('/products/recommended', { params: { categoryId, productId } })
      .then(res => setProducts(res.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [categoryId, productId])

  if (!loading && products.length === 0) return null

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
          : products.map(p => <ProductCard key={p._id} product={p} />)
        }
      </div>
    </section>
  )
}
