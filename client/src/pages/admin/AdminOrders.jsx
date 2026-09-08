import { useState, useEffect } from 'react'
import { 
  Package, 
  Search, 
  Filter, 
  Eye, 
  MapPin, 
  CreditCard, 
  Calendar, 
  X,
  Clock,
  CheckCircle2
} from 'lucide-react'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import api from '../../services/api'

const ORDER_STATUSES = [
  'Order Placed',
  'Confirmed',
  'Processing',
  'Shipped',
  'Out for delivery',
  'Delivered',
  'Cancelled',
]

export default function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedOrder, setSelectedOrder] = useState(null)

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const res = await api.get('/orders')
      setOrders(res.data || [])
    } catch {
      toast.error('Failed to load orders')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await api.put(`/orders/${orderId}/status`, {
        status: newStatus,
        comment: `Admin updated status to ${newStatus}`,
      })
      toast.success(`Order status updated to "${newStatus}"`)
      setOrders(
        orders.map((o) => (o._id === orderId ? { ...o, orderStatus: newStatus } : o))
      )
      if (selectedOrder && selectedOrder._id === orderId) {
        setSelectedOrder((prev) => ({ ...prev, orderStatus: newStatus }))
      }
    } catch (err) {
      toast.error('Failed to update order status')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Order Placed':
        return 'bg-blue-100 text-blue-800'
      case 'Confirmed':
        return 'bg-purple-100 text-purple-800'
      case 'Processing':
        return 'bg-amber-100 text-amber-800'
      case 'Shipped':
        return 'bg-indigo-100 text-indigo-800'
      case 'Out for delivery':
        return 'bg-orange-100 text-orange-800'
      case 'Delivered':
        return 'bg-green-100 text-green-800'
      case 'Cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredOrders = orders.filter((o) => {
    const matchesStatus = statusFilter === 'All' || o.orderStatus === statusFilter
    const id = o._id?.slice(-8).toUpperCase() || ''
    const customer = o.user?.name?.toLowerCase() || ''
    const matchesSearch =
      id.includes(search.toUpperCase()) || customer.includes(search.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">Order Management</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track customer orders, process fulfillment and update live tracking stages
          </p>
        </div>
        <button onClick={fetchOrders} className="btn-outline text-xs py-2 px-4">
          Refresh Orders
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by order # or customer name..."
            className="w-full text-sm outline-none bg-transparent text-dark placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-dark focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <option value="All">All Statuses ({orders.length})</option>
            {ORDER_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s} ({orders.filter((o) => o.orderStatus === s).length})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      {loading ? (
        <div className="flex justify-center py-20">
          <LoadingSpinner size="lg" />
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
          <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="font-bold text-dark">No orders found</h3>
          <p className="text-xs text-gray-400 mt-1">
            {search || statusFilter !== 'All'
              ? 'Try changing your search query or status filter.'
              : 'No orders have been submitted yet.'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/80 border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-4 font-semibold">Order ID & Date</th>
                  <th className="p-4 font-semibold">Customer</th>
                  <th className="p-4 font-semibold">Items</th>
                  <th className="p-4 font-semibold">Total Amount</th>
                  <th className="p-4 font-semibold">Payment</th>
                  <th className="p-4 font-semibold">Update Status</th>
                  <th className="p-4 font-semibold text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredOrders.map((order) => {
                  const id = order._id?.slice(-8).toUpperCase()
                  const formattedDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })

                  return (
                    <tr key={order._id} className="hover:bg-orange-50/30 transition">
                      <td className="p-4">
                        <p className="font-mono font-bold text-dark text-sm">#{id}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{formattedDate}</p>
                      </td>

                      <td className="p-4">
                        <p className="font-semibold text-dark">{order.user?.name || 'Customer'}</p>
                        <p className="text-[10px] text-gray-400">{order.shippingAddress?.city || 'India'}</p>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-dark">{order.items?.length} items</span>
                          <span className="text-gray-400 text-[10px]">
                            ({order.items?.reduce((s, i) => s + i.quantity, 0)} pcs)
                          </span>
                        </div>
                      </td>

                      <td className="p-4 font-extrabold text-dark text-sm">
                        ₹{order.totalPrice?.toFixed(0)}
                      </td>

                      <td className="p-4">
                        <p className="font-medium text-dark">{order.paymentMethod}</p>
                        <span className={`text-[10px] font-bold ${order.paymentStatus === 'Completed' ? 'text-accent-600' : 'text-amber-600'}`}>
                          {order.paymentStatus}
                        </span>
                      </td>

                      <td className="p-4">
                        <select
                          value={order.orderStatus}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className={`font-bold text-[11px] px-2.5 py-1.5 rounded-xl border-0 focus:ring-2 focus:ring-primary-400 cursor-pointer ${getStatusColor(
                            order.orderStatus
                          )}`}
                        >
                          {ORDER_STATUSES.map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="p-4 text-right">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-1.5 text-primary-600 hover:bg-orange-50 rounded-lg transition inline-flex items-center gap-1 font-bold text-xs"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b">
              <div>
                <h3 className="text-lg font-bold text-dark">
                  Order Details #{selectedOrder._id?.slice(-8).toUpperCase()}
                </h3>
                <p className="text-xs text-gray-400">
                  Customer: {selectedOrder.user?.name} ({selectedOrder.user?.email || 'N/A'})
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 pt-4">
              {/* Status Banner */}
              <div className="p-4 bg-orange-50 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Current Status</p>
                  <p className="text-base font-extrabold text-primary-700 mt-0.5">
                    {selectedOrder.orderStatus}
                  </p>
                </div>
                <select
                  value={selectedOrder.orderStatus}
                  onChange={(e) => handleStatusChange(selectedOrder._id, e.target.value)}
                  className="bg-white border font-bold text-xs px-3 py-2 rounded-xl text-dark"
                >
                  {ORDER_STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Items List */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Purchased Items ({selectedOrder.items?.length})
                </h4>
                <div className="divide-y divide-gray-100 max-h-56 overflow-y-auto">
                  {selectedOrder.items?.map((item, i) => (
                    <div key={i} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.image || 'https://placehold.co/50x50/F97316/white?text=Food'}
                          alt={item.name}
                          className="w-10 h-10 rounded-lg object-cover bg-gray-50"
                        />
                        <div>
                          <p className="font-bold text-dark">{item.name}</p>
                          <p className="text-gray-400 text-[10px]">
                            Qty: {item.quantity} × ₹{item.price}
                          </p>
                        </div>
                      </div>
                      <span className="font-bold text-dark">
                        ₹{(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-4 bg-gray-50 rounded-2xl text-xs space-y-1">
                <p className="font-bold text-dark">Shipping Destination:</p>
                <p className="text-gray-600 font-semibold">{selectedOrder.shippingAddress?.fullName}</p>
                <p className="text-gray-500">
                  {selectedOrder.shippingAddress?.street}, {selectedOrder.shippingAddress?.city},{' '}
                  {selectedOrder.shippingAddress?.state} - {selectedOrder.shippingAddress?.zipCode}
                </p>
                <p className="text-gray-500">Phone: {selectedOrder.shippingAddress?.phone}</p>
              </div>

              {/* Total Summary */}
              <div className="flex justify-between items-center pt-3 border-t">
                <span className="text-sm font-bold text-dark">Total Paid Amount:</span>
                <span className="text-xl font-extrabold text-primary-600">
                  ₹{selectedOrder.totalPrice?.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
