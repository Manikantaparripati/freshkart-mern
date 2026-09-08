import { Helmet } from 'react-helmet-async'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Heart, ShoppingCart, Truck, Shield, RefreshCcw, Minus, Plus } from 'lucide-react'
import toast from 'react-hot-toast'
import ProductImageGallery from '../components/product/ProductImageGallery'
import RatingStars from '../components/product/RatingStars'
import ReviewCard from '../components/product/ReviewCard'
import ReviewForm from '../components/product/ReviewForm'
import RecommendedProducts from '../components/product/RecommendedProducts'
import FrequentlyBoughtTogether from '../components/product/FrequentlyBoughtTogether'
import RecentlyViewed from '../components/product/RecentlyViewed'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { addItem } from '../store/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed'
import api from '../services/api'

import { FALLBACK_PRODUCTS } from '../data/fallbackData'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items: wishlistItems } = useSelector((s) => s.wishlist)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [qty, setQty] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const { addToViewed } = useRecentlyViewed()

  useEffect(() => {
    setLoading(true)
    setError(null)

    const findFallback = () => {
      const match =
        FALLBACK_PRODUCTS.find((p) => p.slug === slug || p._id === slug) ||
        FALLBACK_PRODUCTS[0]
      if (match) {
        setProduct(match)
        addToViewed(match)
      } else {
        setError('Product not found')
      }
    }

    api.get(`/products/${slug}`)
      .then((res) => {
        if (res.data && typeof res.data === 'object' && res.data.name) {
          setProduct(res.data)
          addToViewed(res.data)
        } else {
          findFallback()
        }
      })
      .catch(() => {
        findFallback()
      })
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <div className="flex justify-center py-24">
      <LoadingSpinner size="lg" />
    </div>
  )

  if (error) return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <p className="text-5xl mb-4">😕</p>
      <h2 className="text-2xl font-bold text-dark mb-2">Product Not Found</h2>
      <p className="text-gray-500 mb-6">{error}</p>
      <button onClick={() => navigate(-1)} className="btn-primary">Go Back</button>
    </div>
  )

  const isWishlisted = wishlistItems.some((i) => i._id === product._id)
  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount || 0

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images?.[0],
      quantity: qty,
      stock: product.stock,
    }))
    toast.success(`${product.name} added to cart!`)
  }

  const handleBuyNow = () => {
    handleAddToCart()
    navigate('/checkout')
  }

  const toggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product._id))
      toast('Removed from wishlist', { icon: '💔' })
    } else {
      dispatch(addToWishlist(product))
      toast.success('Added to wishlist!')
    }
  }

  const tabs = ['description', 'ingredients', 'nutrition', 'delivery']

  return (
    <>
      <Helmet>
        <title>{product.name} — FreshKart</title>
        <meta name="description" content={product.description?.slice(0, 155)} />
        <meta property="og:title" content={`${product.name} — FreshKart`} />
        <meta property="og:image" content={product.images?.[0]} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex flex-wrap gap-1">
          <a href="/" className="hover:text-primary-600">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-primary-600">Products</a>
          {product.category && (
            <>
              <span>/</span>
              <a href={`/category/${product.category.slug}`} className="hover:text-primary-600 capitalize">
                {product.category.name}
              </a>
            </>
          )}
          <span>/</span>
          <span className="text-dark font-medium truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Grid */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Image Gallery */}
            <ProductImageGallery images={product.images} productName={product.name} />

            {/* Right: Info */}
            <div className="flex flex-col">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {product.isBestSeller && (
                  <span className="badge bg-secondary-100 text-secondary-700">🏆 Bestseller</span>
                )}
                {product.isNewArrival && (
                  <span className="badge bg-accent-100 text-accent-600">✨ New</span>
                )}
                {discount > 0 && (
                  <span className="badge bg-red-100 text-red-600">{discount}% OFF</span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-dark leading-snug mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <RatingStars rating={product.rating} size="md" />
                <span className="text-sm font-semibold text-gray-700">{product.rating?.toFixed(1)}</span>
                <span className="text-sm text-gray-400">({product.numReviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-3xl font-extrabold text-primary-600">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                )}
                {discount > 0 && (
                  <span className="text-sm font-bold text-green-600">Save ₹{product.originalPrice - product.price}</span>
                )}
              </div>

              {/* Weight / Tags */}
              {product.weight && (
                <p className="text-sm text-gray-500 mb-4">
                  Weight: <span className="font-semibold text-dark">{product.weight}</span>
                </p>
              )}

              {/* Stock */}
              <div className="mb-5">
                {product.stock > 0 ? (
                  <span className="text-accent-500 font-semibold text-sm">
                    ✓ In Stock ({product.stock} units)
                  </span>
                ) : (
                  <span className="text-red-500 font-semibold text-sm">✗ Out of Stock</span>
                )}
              </div>

              {/* Qty Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-600">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-2.5 hover:bg-gray-50 transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 font-bold text-dark">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                    disabled={qty >= product.stock}
                    className="px-4 py-2.5 hover:bg-gray-50 transition disabled:opacity-40"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="btn-primary flex-1 flex items-center justify-center gap-2 py-3.5 disabled:opacity-50"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="bg-dark text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-dark/90 transition disabled:opacity-50"
                >
                  Buy Now
                </button>
                <button
                  onClick={toggleWishlist}
                  className={`p-3.5 rounded-xl border-2 transition ${
                    isWishlisted
                      ? 'border-primary-500 bg-primary-50 text-primary-600'
                      : 'border-gray-200 hover:border-primary-300 text-gray-500'
                  }`}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-primary-500' : ''}`} />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 border-t pt-5">
                {[
                  { icon: <Truck className="w-5 h-5 text-primary-500" />, label: 'Free Delivery', sub: 'On orders ₹499+' },
                  { icon: <Shield className="w-5 h-5 text-accent-500" />, label: '100% Secure', sub: 'Safe payments' },
                  { icon: <RefreshCcw className="w-5 h-5 text-secondary-500" />, label: 'Easy Returns', sub: '7 day policy' },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1">
                    {icon}
                    <span className="text-xs font-semibold text-dark">{label}</span>
                    <span className="text-[10px] text-gray-400">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-10 border-t pt-8">
            <div className="flex gap-1 overflow-x-auto scrollbar-none bg-gray-100 rounded-xl p-1 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-max px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-500 hover:text-dark'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="text-gray-600 leading-relaxed min-h-[80px]">
              {activeTab === 'description' && <p>{product.description}</p>}
              {activeTab === 'ingredients' && (
                <p>{product.ingredients || 'Ingredient information not available.'}</p>
              )}
              {activeTab === 'nutrition' && product.nutrition ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(product.nutrition).map(([k, v]) => (
                    <div key={k} className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 capitalize">{k}</p>
                      <p className="font-bold text-dark mt-1">{v}</p>
                    </div>
                  ))}
                </div>
              ) : activeTab === 'nutrition' ? (
                <p>Nutritional information not available.</p>
              ) : null}
              {activeTab === 'delivery' && (
                <div className="space-y-2">
                  <p>🚚 <strong>Standard Delivery:</strong> 3–5 business days</p>
                  <p>⚡ <strong>Express Delivery:</strong> 1–2 business days (available at checkout)</p>
                  <p>🎁 <strong>Free delivery</strong> on orders above ₹499</p>
                  <p>↩️ <strong>Returns:</strong> 7-day easy return policy on all products</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        <FrequentlyBoughtTogether
          categoryId={product.category?._id}
          currentProductId={product._id}
        />

        {/* Reviews Section */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-xl font-bold text-dark mb-6">
            Customer Reviews
            <span className="ml-2 text-sm font-normal text-gray-400">({product.numReviews})</span>
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center gap-6 mb-8 p-5 bg-gray-50 rounded-2xl">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-dark">{product.rating?.toFixed(1)}</div>
              <RatingStars rating={product.rating} size="md" />
              <p className="text-xs text-gray-400 mt-1">{product.numReviews} reviews</p>
            </div>
            <div className="flex-1 space-y-1.5">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = product.reviews?.filter((r) => Math.floor(r.rating) === star).length || 0
                const pct = product.numReviews > 0 ? (count / product.numReviews) * 100 : 0
                return (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="w-3 text-gray-500">{star}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-secondary-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-6 text-gray-400 text-right">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Review Form */}
          <div className="mb-8">
            <ReviewForm
              productId={product._id}
              onReviewAdded={(newReview) => {
                setProduct((prev) => ({
                  ...prev,
                  reviews: [newReview, ...(prev.reviews || [])],
                  numReviews: (prev.numReviews || 0) + 1,
                }))
              }}
            />
          </div>

          {/* Review List */}
          <div className="space-y-4">
            {product.reviews?.length > 0 ? (
              product.reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))
            ) : (
              <p className="text-gray-400 text-center py-6">No reviews yet. Be the first to review!</p>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <RecommendedProducts
          categoryId={product.category?._id}
          productId={product._id}
        />

        {/* Recently Viewed */}
        <RecentlyViewed />
      </div>
    </>
  )
}
