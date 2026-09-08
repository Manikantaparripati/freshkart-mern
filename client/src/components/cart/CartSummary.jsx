import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { applyCoupon, removeCoupon, clearCart } from '../../store/slices/cartSlice'
import { Tag, Check, X, ArrowRight, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../../services/api'

export default function CartSummary({ onCheckout }) {
  const dispatch = useDispatch()
  const { totalPrice, shippingPrice, taxPrice, grandTotal, coupon } = useSelector(
    (s) => s.cart
  )
  const [couponCode, setCouponCode] = useState('')
  const [loading, setLoading] = useState(false)

  const handleApplyCoupon = async (e) => {
    e.preventDefault()
    if (!couponCode.trim()) return

    setLoading(true)
    try {
      const res = await api.post('/coupons/validate', {
        code: couponCode.trim(),
        orderAmount: totalPrice,
      })

      // Backend returns { coupon: { code, discountType, discountValue }, discount }
      const discountPercentage =
        res.data.coupon.discountType === 'percentage'
          ? res.data.coupon.discountValue
          : Math.round((res.data.discount / totalPrice) * 100)

      dispatch(
        applyCoupon({
          code: res.data.coupon.code,
          discount: discountPercentage,
          discountAmount: res.data.discount,
        })
      )
      toast.success(`Coupon "${res.data.coupon.code}" applied! 🎉`)
      setCouponCode('')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid or expired coupon')
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon())
    toast('Coupon removed', { icon: '🏷️' })
  }

  // Free shipping progress calculation
  const freeShippingThreshold = 499
  const amountLeftForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice)
  const shippingProgress = Math.min(100, (totalPrice / freeShippingThreshold) * 100)

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-gray-100 space-y-6">
      <h3 className="font-extrabold text-lg text-dark">Order Summary</h3>

      {/* Free Delivery Nudge Bar */}
      <div className="bg-orange-50/70 border border-orange-100 rounded-2xl p-3.5">
        <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
          <span className="flex items-center gap-1.5 text-primary-700">
            <Sparkles className="w-3.5 h-3.5 text-primary-500" />
            {amountLeftForFreeShipping === 0
              ? 'You unlocked FREE delivery!'
              : `Add ₹${amountLeftForFreeShipping.toFixed(0)} for FREE delivery`}
          </span>
          <span className="text-gray-500">{shippingProgress.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-orange-200/50 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-primary-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${shippingProgress}%` }}
          />
        </div>
      </div>

      {/* Coupon Form */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
          Apply Promo Code
        </label>
        {coupon ? (
          <div className="flex items-center justify-between p-3 bg-accent-50 border border-accent-200 rounded-2xl">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-accent-600" />
              <div>
                <p className="text-xs font-bold text-accent-800">{coupon.code}</p>
                <p className="text-[11px] text-accent-600">{coupon.discount}% off applied</p>
              </div>
            </div>
            <button
              onClick={handleRemoveCoupon}
              className="text-gray-400 hover:text-red-500 p-1"
              aria-label="Remove coupon"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleApplyCoupon} className="flex gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              placeholder="e.g. WELCOME10"
              className="input-field text-xs uppercase font-semibold flex-1 py-2.5"
            />
            <button
              type="submit"
              disabled={loading || !couponCode.trim()}
              className="btn-primary text-xs px-4 py-2.5 font-bold disabled:opacity-50"
            >
              {loading ? 'Checking…' : 'Apply'}
            </button>
          </form>
        )}

        {/* Quick coupon tags */}
        {!coupon && (
          <div className="flex items-center gap-1.5 flex-wrap mt-2">
            <span className="text-[10px] text-gray-400 font-medium">Try:</span>
            {['WELCOME10', 'SAVE20', 'FRESH50'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCouponCode(c)}
                className="text-[10px] bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-primary-700 px-2 py-0.5 rounded-md font-mono transition"
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 text-xs pt-4 border-t border-gray-100">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-dark">₹{totalPrice.toFixed(2)}</span>
        </div>

        {coupon && (
          <div className="flex justify-between text-accent-600 font-semibold">
            <span>Coupon Discount ({coupon.code})</span>
            <span>-₹{((totalPrice * coupon.discount) / 100).toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-gray-600">
          <span>Estimated Shipping</span>
          <span className={shippingPrice === 0 ? 'text-accent-600 font-bold' : 'font-semibold text-dark'}>
            {shippingPrice === 0 ? 'FREE' : `₹${shippingPrice.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Estimated GST (5%)</span>
          <span className="font-semibold text-dark">₹{taxPrice.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-100 pt-3 flex justify-between items-baseline">
          <span className="text-sm font-bold text-dark">Grand Total</span>
          <span className="text-xl font-extrabold text-primary-600">
            ₹{grandTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-3 pt-2">
        <button
          onClick={onCheckout}
          className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2"
        >
          Proceed to Checkout
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            if (window.confirm('Empty your shopping cart?')) {
              dispatch(clearCart())
              toast.success('Cart cleared')
            }
          }}
          className="w-full text-center text-xs text-gray-400 hover:text-red-500 transition py-1"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}
