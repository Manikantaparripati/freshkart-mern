import { Heart, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../../store/slices/wishlistSlice'
import toast from 'react-hot-toast'
import Badge from '../ui/Badge'
import RatingStars from './RatingStars'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const { items: wishlist } = useSelector((s) => s.wishlist)
  // Support both _id (MongoDB) and id (legacy)
  const productId = product._id || product.id
  const isWishlisted = wishlist.some((i) => (i._id || i.id) === productId)
  const image = product.images?.[0] || product.image || `https://placehold.co/300x300/F97316/white?text=${encodeURIComponent(product.name || 'Food')}`
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
      className="card group relative block overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-t-2xl">
        <img
          src={image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/300x300/F97316/white?text=${encodeURIComponent(product.name?.slice(0, 10) || 'Food')}`
          }}
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
          {product.isNewArrival && <Badge variant="green">NEW</Badge>}
          {product.isBestSeller && <Badge variant="yellow">HOT</Badge>}
          {discount > 0 && <Badge variant="orange">{discount}% OFF</Badge>}
          {product.stock === 0 && <Badge variant="red">OUT OF STOCK</Badge>}
        </div>
      </div>

      {/* Info */}
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-dark text-sm md:text-base mb-1 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-2">
          <RatingStars rating={product.rating} size="sm" />
          <span className="text-xs text-gray-400">({product.numReviews || 0})</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="font-bold text-dark">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through ml-1.5">₹{product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleCart}
            disabled={product.stock === 0}
            className="flex-shrink-0 bg-primary-50 text-primary-600 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  )
}
