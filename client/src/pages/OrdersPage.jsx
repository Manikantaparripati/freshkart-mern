import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Package, ArrowRight, Calendar, CreditCard, ChevronRight } from 'lucide-react'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import EmptyState from '../components/ui/EmptyState'
import api from '../services/api'
import { FOOD_FALLBACK_SVG } from '../utils/imageUtils'

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/orders/myorders')
      .then((res) => {
        setOrders(res.data || [])
      })
      .catch(() => {
        setOrders([])
      })
      .finally(() => setLoading(false))
  }, [])

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Order Placed':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'Confirmed':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'Processing':
        return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'Shipped':
        return 'bg-indigo-100 text-indigo-700 border-indigo-200'
      case 'Out for delivery':
        return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'Delivered':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'Cancelled':
        return 'bg-red-100 text-red-700 border-red-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <>
      <Helmet>
        <title>My Orders — FreshKart</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">Order History</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Track and manage your recent FreshKart orders
            </p>
          </div>
          <Link to="/products" className="btn-outline text-sm py-2 px-4 hidden sm:inline-flex">
            Continue Shopping
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <EmptyState
              icon="🛍️"
              title="No orders yet"
              description="Looks like you haven't placed an order yet. Authentic snacks, sweets, and pickles await!"
              actionLabel="Start Shopping"
              onAction={() => {}}
            />
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const orderId = order._id?.slice(-8).toUpperCase() || 'UNKNOWN'
              const formattedDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })

              return (
                <div
                  key={order._id}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  {/* Order Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary-600 flex items-center justify-center font-bold">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-dark text-sm">Order #{orderId}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formattedDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(
                          order.orderStatus
                        )}`}
                      >
                        {order.orderStatus || 'Order Placed'}
                      </span>
                      <p className="text-lg font-extrabold text-dark sm:text-right">
                        ₹{order.totalPrice?.toFixed(0)}
                      </p>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                      {order.items?.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="relative flex-shrink-0 group">
                          <img
                            src={item.image || FOOD_FALLBACK_SVG}
                            alt={item.name}
                            className="w-14 h-14 rounded-xl object-cover border border-gray-100 bg-gray-50"
                            onError={(e) => {
                              e.target.src = FOOD_FALLBACK_SVG
                            }}
                          />
                          <span className="absolute -top-1.5 -right-1.5 bg-dark text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            {item.quantity}
                          </span>
                        </div>
                      ))}
                      {order.items?.length > 4 && (
                        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0">
                          +{order.items.length - 4}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0">
                      <div className="text-xs text-gray-500 flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-gray-400" />
                        <span>{order.paymentMethod}</span>
                        <span>•</span>
                        <span className={order.paymentStatus === 'Completed' ? 'text-accent-600 font-medium' : 'text-amber-600'}>
                          {order.paymentStatus}
                        </span>
                      </div>

                      <Link
                        to={`/orders/${order._id}`}
                        className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5 rounded-xl font-bold"
                      >
                        View & Track
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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
