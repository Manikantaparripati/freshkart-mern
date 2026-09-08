import { useRecentlyViewed } from '../../hooks/useRecentlyViewed'
import { Link } from 'react-router-dom'
import { FOOD_FALLBACK_SVG } from '../../utils/imageUtils'

export default function RecentlyViewed() {
  const { recentlyViewed } = useRecentlyViewed()

  if (recentlyViewed.length === 0) return null

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-dark mb-5">Recently Viewed</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
        {recentlyViewed.map((product) => (
          <Link
            key={product._id}
            to={`/products/${product.slug}`}
            className="flex-shrink-0 w-36 card overflow-hidden group"
          >
            <div className="aspect-square overflow-hidden bg-gray-50">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.src = FOOD_FALLBACK_SVG }}
              />
            </div>
            <div className="p-2">
              <p className="text-xs font-semibold text-dark line-clamp-2 leading-tight">{product.name}</p>
              <p className="text-primary-600 font-bold text-sm mt-1">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
