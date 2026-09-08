import { Heart, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../../store/slices/wishlistSlice'
import toast from 'react-hot-toast'
import Badge from '../ui/Badge'
import RatingStars from './RatingStars'

const FOOD_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="%23FAFAF9"/><circle cx="200" cy="180" r="75" fill="%23FED7AA" fill-opacity="0.45"/><path d="M165 160 C165 130, 235 130, 235 160 C235 205, 165 205, 165 160 Z" fill="%23F97316"/><path d="M150 215 C175 235, 225 235, 250 215" stroke="%23EA580C" stroke-width="6" stroke-linecap="round"/><text x="200" y="295" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="%2378350F" text-anchor="middle">FreshKart Original</text></svg>`

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const { items: wishlist } = useSelector((s) => s.wishlist)
  const productId = product._id || product.id
  const isWishlisted = wishlist.some((i) => (i._id || i.id) === productId)
  const image = product.images?.[0] || product.image || FOOD_FALLBACK_SVG
  const discount = product.discount || (product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0)

  const handleCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.stock === 0) return toast.error('Out of stock')
    dispatch(addItem({
      id: productId,
      name: product.name,
      price: product.price,
      image,
      quantity: 1,
      stock: product.stock,
    }))
    toast.success(`${product.name} added to cart!`)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (isWishlisted) {
      dispatch(removeFromWishlist(productId))
      toast('Removed from wishlist', { icon: '💔' })
    } else {
      dispatch(addToWishlist({ ...product, _id: productId }))
      toast.success('Added to wishlist!')
    }
  }

  return (
    <Link
      to={`/products/${product.slug || productId}`}
      className="card group relative flex flex-col justify-between overflow-hidden border border-stone-200/70 hover:border-primary-300 transition-all duration-300 hover:shadow-lg rounded-2xl bg-white"
    >
      {/* Product Image Section */}
      <div className="relative aspect-square overflow-hidden bg-stone-50">
        <img
          src={image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            if (e.target.src !== FOOD_FALLBACK_SVG) {
              e.target.src = FOOD_FALLBACK_SVG
            }
          }}
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white hover:scale-110 active:scale-95 transition-all z-10"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-400 group-hover:text-stone-600'}`}
          />
        </button>

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10">
          {product.isNewArrival && <Badge variant="green">NEW</Badge>}
          {product.isBestSeller && <Badge variant="yellow">HOT</Badge>}
          {discount > 0 && <Badge variant="orange">{discount}% OFF</Badge>}
          {product.stock === 0 && <Badge variant="red">OUT OF STOCK</Badge>}
        </div>

        {/* Weight Pill */}
        {product.weight && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-stone-900/60 backdrop-blur-sm text-[11px] font-medium text-white">
            {product.weight}
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          {product.category?.name && (
            <span className="text-[11px] font-medium uppercase tracking-wider text-primary-600 mb-0.5 block">
              {product.category.name}
            </span>
          )}
          <h3 className="font-semibold text-stone-800 text-sm sm:text-base mb-1 line-clamp-2 leading-snug group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-1.5 mb-2">
            <RatingStars rating={product.rating || 4.8} size="sm" />
            <span className="text-xs text-stone-400 font-medium">({product.numReviews || 0})</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-stone-100">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-stone-900 text-base sm:text-lg">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-stone-400 line-through">₹{product.originalPrice}</span>
              )}
            </div>
            {discount > 0 && (
              <span className="text-[11px] font-medium text-green-600">Save ₹{product.originalPrice - product.price}</span>
            )}
          </div>

          <button
            onClick={handleCart}
            disabled={product.stock === 0}
            className="flex-shrink-0 bg-primary-50 text-primary-600 p-2.5 rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-200 shadow-sm active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label={`Add ${product.name} to cart`}
            title="Add to Cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  )
}
