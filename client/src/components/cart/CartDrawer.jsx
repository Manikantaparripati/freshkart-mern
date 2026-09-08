import { useDispatch, useSelector } from 'react-redux'
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { removeItem, updateQuantity } from '../../store/slices/cartSlice'
import { FOOD_FALLBACK_SVG } from '../../utils/imageUtils'

export default function CartDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const { items, totalItems, totalPrice, shippingPrice, taxPrice, grandTotal } = useSelector(s => s.cart)

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col animate-slide-in"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-dark flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary-500" />
            My Cart
            {totalItems > 0 && (
              <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 py-12">
              <ShoppingBag className="w-16 h-16 mb-4 text-gray-200" />
              <p className="font-semibold text-lg">Your cart is empty</p>
              <p className="text-sm mt-1 mb-6">Add some delicious products!</p>
              <button onClick={onClose} className="btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  onError={(e) => { e.target.src = FOOD_FALLBACK_SVG }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-dark line-clamp-2">{item.name}</p>
                  <p className="text-primary-600 font-bold text-sm mt-1">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      disabled={item.quantity <= 1}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-semibold text-sm w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="p-1 text-gray-400 hover:text-red-500 self-start"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer with price summary */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-4 space-y-3">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shippingPrice === 0 ? <span className="text-accent-500 font-semibold">FREE</span> : `₹${shippingPrice}`}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (5%)</span>
                <span>₹{taxPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-dark text-base border-t border-gray-100 pt-2 mt-2">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
            {totalPrice < 499 && (
              <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                Add ₹{(499 - totalPrice).toFixed(0)} more for free delivery!
              </p>
            )}
            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full btn-primary text-center py-3"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/cart"
              onClick={onClose}
              className="block w-full text-center text-primary-600 text-sm font-semibold py-1 hover:underline"
            >
              View Full Cart
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
