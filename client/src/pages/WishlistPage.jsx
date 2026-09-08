import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react'
import { removeFromWishlist, clearWishlist } from '../store/slices/wishlistSlice'
import { addItem } from '../store/slices/cartSlice'
import EmptyState from '../components/ui/EmptyState'
import RatingStars from '../components/product/RatingStars'
import toast from 'react-hot-toast'

export default function WishlistPage() {
  const { items } = useSelector((s) => s.wishlist)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleMoveToCart = (product) => {
    const productId = product._id || product.id
    dispatch(
      addItem({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || product.image,
        quantity: 1,
        stock: product.stock,
      })
    )
    dispatch(removeFromWishlist(productId))
    toast.success(`Moved ${product.name} to cart! 🛒`)
  }

  const handleRemove = (product) => {
    const productId = product._id || product.id
    dispatch(removeFromWishlist(productId))
    toast('Removed from wishlist', { icon: '💔' })
  }

  const handleClearAll = () => {
    if (window.confirm('Clear all items from your wishlist?')) {
      dispatch(clearWishlist())
      toast.success('Wishlist cleared')
    }
  }

  return (
    <>
      <Helmet>
        <title>My Wishlist ({items.length}) — FreshKart</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-dark flex items-center gap-2.5">
              <Heart className="w-7 h-7 text-primary-500 fill-primary-500" />
              My Wishlist
              <span className="text-sm font-semibold text-gray-400">({items.length})</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Items you have saved to purchase later
            </p>
          </div>

          {items.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs text-red-600 hover:text-red-700 font-bold hover:underline"
            >
              Clear All Items
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <EmptyState
              icon="❤️"
              title="Your Wishlist is Empty"
              description="Save items you love by tapping the heart icon on any product card."
              actionLabel="Explore Delicious Products"
              onAction={() => navigate('/products')}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => {
              const productId = product._id || product.id
              const image =
                product.images?.[0] ||
                product.image ||
                `https://placehold.co/300x300/F97316/white?text=${encodeURIComponent(
                  product.name || 'Food'
                )}`

              return (
                <div
                  key={productId}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col group"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Link to={`/products/${product.slug || productId}`}>
                      <img
                        src={image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/300x300/F97316/white?text=Food'
                        }}
                      />
                    </Link>

                    {/* Delete button */}
                    <button
                      onClick={() => handleRemove(product)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 flex items-center justify-center shadow-sm transition"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/products/${product.slug || productId}`}
                        className="font-bold text-dark text-sm line-clamp-2 hover:text-primary-600 transition"
                      >
                        {product.name}
                      </Link>

                      <div className="flex items-center gap-1.5 my-2">
                        <RatingStars rating={product.rating || 4.5} size="sm" />
                        <span className="text-xs text-gray-400">({product.numReviews || 0})</span>
                      </div>

                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-lg font-extrabold text-dark">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Move to Cart CTA */}
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="btn-primary w-full py-2.5 text-xs font-bold flex items-center justify-center gap-2 rounded-xl"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Move to Cart
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
