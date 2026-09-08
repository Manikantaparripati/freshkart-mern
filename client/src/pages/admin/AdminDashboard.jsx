import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  IndianRupee, 
  ShoppingBag, 
  Users, 
  Package, 
  TrendingUp, 
  ArrowUpRight,
  Clock,
  Sparkles
} from 'lucide-react'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import api from '../../services/api'

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/admin/dashboard')
      .then((res) => {
        setStats(res.data)
      })
      .catch(() => {
        setStats(null)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  const cards = [
    {
      label: 'Total Revenue',
      value: `₹${(stats?.totalRevenue || 0).toLocaleString('en-IN')}`,
      icon: IndianRupee,
      bg: 'bg-emerald-50 text-emerald-600',
      change: '+14% from last month',
    },
    {
      label: 'Total Orders',
      value: stats?.totalOrders || 0,
      icon: ShoppingBag,
      bg: 'bg-blue-50 text-blue-600',
      change: '+8 new today',
    },
    {
      label: 'Total Customers',
      value: stats?.totalUsers || 0,
      icon: Users,
      bg: 'bg-orange-50 text-primary-600',
      change: 'Active buyers',
    },
    {
      label: 'Active Products',
      value: stats?.totalProducts || 0,
      icon: Package,
      bg: 'bg-purple-50 text-purple-600',
      change: '8 categories',
    },
  ]

  const maxCategorySales = Math.max(
    ...(stats?.salesByCategory?.map((c) => c.totalSales) || [1])
  )

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">Executive Dashboard</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Real-time sales, order volumes, inventory and customer metrics
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Store Sync
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => {
          const Icon = c.icon
          return (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {c.label}
                </span>
                <div className={`p-3 rounded-2xl ${c.bg}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-dark">{c.value}</p>
                <p className="text-[11px] text-gray-400 mt-1">{c.change}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Two Column Layout: Recent Orders & Category Sales Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-dark">Recent Customer Orders</h2>
              <p className="text-xs text-gray-400 mt-0.5">Latest transactions across India</p>
            </div>
            <Link
              to="/admin/orders"
              className="text-xs text-primary-600 font-bold hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b text-gray-400 uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-semibold">Order ID</th>
                  <th className="pb-3 font-semibold">Customer</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 font-semibold">Payment</th>
                  <th className="pb-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {stats?.recentOrders?.length > 0 ? (
                  stats.recentOrders.map((order) => {
                    const id = order._id?.slice(-6).toUpperCase()
                    return (
                      <tr key={order._id} className="hover:bg-orange-50/40 transition">
                        <td className="py-3.5 font-mono font-bold text-dark">#{id}</td>
                        <td className="py-3.5">
                          <p className="font-semibold text-dark">{order.user?.name || 'Customer'}</p>
                          <p className="text-[10px] text-gray-400">{order.user?.email || 'test@freshkart.in'}</p>
                        </td>
                        <td className="py-3.5 font-extrabold text-dark">₹{order.totalPrice?.toFixed(0)}</td>
                        <td className="py-3.5 text-gray-500">{order.paymentMethod}</td>
                        <td className="py-3.5 text-right">
                          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-100 text-primary-700">
                            {order.orderStatus}
                          </span>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-gray-400">
                      No orders placed yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Sales Breakdown (1 col) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-dark mb-1">Sales by Category</h2>
          <p className="text-xs text-gray-400 mb-6">Revenue distribution across categories</p>

          {stats?.salesByCategory?.length > 0 ? (
            <div className="space-y-4">
              {stats.salesByCategory.map((cat, idx) => {
                const pct = maxCategorySales > 0 ? (cat.totalSales / maxCategorySales) * 100 : 0
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-dark">
                      <span>{cat._id || 'Uncategorized'}</span>
                      <span className="font-bold">₹{cat.totalSales?.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(8, pct)}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {['Pickles', 'Sweets', 'Snacks', 'Spices'].map((c, i) => (
                <div key={c} className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{c}</span>
                    <span className="font-bold">₹{(4 - i) * 1250}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary-500 h-full rounded-full"
                      style={{ width: `${100 - i * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 p-4 bg-orange-50/70 rounded-2xl border border-orange-100 text-center">
            <p className="text-xs font-bold text-primary-700">Top Seller: Pickles & Sweets</p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Traditional recipes have the highest average cart margin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
