import { Helmet } from 'react-helmet-async'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  ArrowLeft, 
  MapPin, 
  CreditCard, 
  Package, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Phone
} from 'lucide-react'
import OrderTracker from '../components/checkout/OrderTracker'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import api from '../services/api'

export default function OrderDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cancelling, setCancelling] = useState(false)

  const fetchOrder = () => {
    setLoading(true)
    api.get(`/orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => {
        toast.error(err.response?.data?.message || 'Order not found')
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchOrder()
  }, [id])

  const handleCancelOrder = async () => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return
    setCancelling(true)
    try {
      await api.put(`/orders/${id}/cancel`)
      toast.success('Order cancelled successfully')
      fetchOrder()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to cancel order')
    } finally {
      setCancelling(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <p className="text-5xl mb-3">📦</p>
        <h2 className="text-xl font-bold text-dark mb-2">Order Not Found</h2>
        <p className="text-gray-500 text-sm mb-6">Could not load details for order #{id}.</p>
        <Link to="/orders" className="btn-primary">
          Back to Orders
        </Link>
      </div>
    )
  }

  const orderId = order._id?.slice(-8).toUpperCase() || 'UNKNOWN'
  const canCancel = order.orderStatus === 'Order Placed' || order.orderStatus === 'Confirmed' || order.orderStatus === 'Processing'

  return (
    <>
      <Helmet>
        <title>Order #{orderId} — FreshKart</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Back Link */}
        <Link
          to="/orders"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 font-semibold mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to My Orders
        </Link>

        {/* Header Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm mb-8 border border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-extrabold text-dark">Order #{orderId}</h1>
                <span className="text-xs bg-orange-100 text-primary-700 font-bold px-3 py-1 rounded-full">
                  {order.orderStatus}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })} at {new Date(order.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            {canCancel && (
              <button
                onClick={handleCancelOrder}
                disabled={cancelling}
                className="text-xs text-red-600 hover:bg-red-50 border border-red-200 px-4 py-2 rounded-xl font-bold transition disabled:opacity-50"
              >
                {cancelling ? 'Cancelling…' : 'Cancel Order'}
              </button>
            )}
          </div>

          {/* Visual Order Tracker */}
          <div className="py-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              Live Order Status Tracking
            </h2>
            <OrderTracker
              currentStatus={order.orderStatus}
              trackingHistory={order.trackingHistory}
            />
          </div>

          {/* Tracking Log if any comments */}
          {order.trackingHistory && order.trackingHistory.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Status Activity Log
              </h3>
              <div className="space-y-2">
                {order.trackingHistory.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-dark">{item.status}: </span>
                      <span className="text-gray-600">{item.comment}</span>
                      <span className="text-gray-400 ml-2">
                        ({new Date(item.date).toLocaleDateString('en-IN')} {new Date(item.date).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Items List (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary-500" />
                Items in this Order ({order.items?.length})
              </h2>

              <div className="divide-y divide-gray-100">
                {order.items?.map((item, idx) => (
                  <div key={idx} className="py-4 flex items-center gap-4 first:pt-0 last:pb-0">
                    <img
                      src={item.image || 'https://placehold.co/80x80/F97316/white?text=Food'}
                      alt={item.name}
                      className="w-16 h-16 rounded-2xl object-cover bg-gray-50 border border-gray-100 flex-shrink-0"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/80x80/F97316/white?text=Food'
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-dark text-sm leading-snug line-clamp-2">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        ₹{item.price} × {item.quantity} unit{item.quantity > 1 ? 's' : ''}
                      </p>
                    </div>
                    <p className="font-bold text-dark text-base flex-shrink-0">
                      ₹{(item.price * item.quantity).toFixed(0)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-dark mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-500" /> Delivery Address
              </h3>
              <p className="text-sm font-semibold text-dark">{order.shippingAddress?.fullName}</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {order.shippingAddress?.street}, {order.shippingAddress?.city},{' '}
                {order.shippingAddress?.state} - {order.shippingAddress?.zipCode}
              </p>
              {order.shippingAddress?.phone && (
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-gray-400" /> {order.shippingAddress?.phone}
                </p>
              )}
            </div>
          </div>

          {/* Payment & Price Summary (1 col) */}
          <div className="space-y-4">
            {/* Price Summary */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-dark mb-4">Payment Summary</h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{((order.totalPrice || 0) - (order.taxPrice || 0) - (order.shippingPrice || 0)).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Fee</span>
                  <span className={order.shippingPrice === 0 ? 'text-accent-600 font-semibold' : ''}>
                    {order.shippingPrice === 0 ? 'FREE' : `₹${order.shippingPrice?.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (5%)</span>
                  <span>₹{order.taxPrice?.toFixed(2)}</span>
                </div>
                {order.coupon && (
                  <div className="flex justify-between text-accent-600 font-semibold">
                    <span>Coupon Applied</span>
                    <span>{typeof order.coupon === 'string' ? order.coupon : 'Discount'}</span>
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between font-bold text-dark text-base">
                  <span>Grand Total</span>
                  <span className="text-primary-600">₹{order.totalPrice?.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Payment Mode:</span>
                  <span className="font-bold text-dark">{order.paymentMethod}</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1.5">
                  <span className="text-gray-500">Payment Status:</span>
                  <span className={`font-bold ${order.paymentStatus === 'Completed' ? 'text-accent-600' : 'text-amber-600'}`}>
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100 text-center">
              <h4 className="text-xs font-bold text-dark mb-1">Need help with your order?</h4>
              <p className="text-[11px] text-gray-500 mb-3">
                Our support team is available 9 AM – 9 PM
              </p>
              <a
                href="mailto:support@freshkart.in"
                className="text-xs font-bold text-primary-600 hover:underline"
              >
                support@freshkart.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
