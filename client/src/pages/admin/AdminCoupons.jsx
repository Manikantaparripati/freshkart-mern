import { useState, useEffect } from 'react'
import { Tag, Plus, Trash2, Calendar, Copy, Check, X } from 'lucide-react'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import api from '../../services/api'

export default function AdminCoupons() {
  const [coupons, setCoupons] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    code: '',
    discountType: 'percentage',
    discountValue: '',
    minOrderAmount: '499',
    expiresAt: '',
  })

  const fetchCoupons = async () => {
    setLoading(true)
    try {
      const res = await api.get('/coupons')
      setCoupons(res.data || [])
    } catch {
      toast.error('Failed to load coupons')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCoupons()
  }, [])

  const handleCreateCoupon = async (e) => {
    e.preventDefault()
    try {
      const expiry = formData.expiresAt
        ? new Date(formData.expiresAt)
        : new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)

      await api.post('/coupons', {
        code: formData.code.toUpperCase().trim(),
        discountType: formData.discountType,
        discountValue: Number(formData.discountValue),
        minOrderAmount: Number(formData.minOrderAmount),
        expiresAt: expiry,
      })
      toast.success(`Coupon "${formData.code.toUpperCase()}" created! 🎉`)
      setModalOpen(false)
      setFormData({
        code: '',
        discountType: 'percentage',
        discountValue: '',
        minOrderAmount: '499',
        expiresAt: '',
      })
      fetchCoupons()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create coupon')
    }
  }

  const handleDelete = async (id, code) => {
    if (!window.confirm(`Delete coupon "${code}"?`)) return
    try {
      await api.delete(`/coupons/${id}`)
      toast.success('Coupon removed')
      setCoupons(coupons.filter((c) => c._id !== id))
    } catch {
      toast.error('Failed to delete coupon')
    }
  }

  const copyCode = (code) => {
    navigator.clipboard.writeText(code)
    toast.success(`Copied "${code}" to clipboard!`)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">Promotional Coupons</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Create discount vouchers, festive promotions and percentage codes
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-primary flex items-center gap-2 py-2.5 px-5 text-sm font-bold"
        >
          <Plus className="w-4 h-4" /> Create Coupon
        </button>
      </div>

      {/* Grid of Coupons */}
      {loading ? (
        <div className="flex justify-center py-20">
          <LoadingSpinner size="lg" />
        </div>
      ) : coupons.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
          <Tag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="font-bold text-dark">No coupons created yet</h3>
          <p className="text-xs text-gray-400 mt-1 mb-4">
            Offer discounts like WELCOME10 or SAVE20 to increase conversions.
          </p>
          <button onClick={() => setModalOpen(true)} className="btn-primary text-xs">
            Create First Coupon
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coupons.map((coupon) => {
            const isExpired = new Date(coupon.expiresAt) < new Date()
            const expiryStr = new Date(coupon.expiresAt).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })

            return (
              <div
                key={coupon._id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden hover:shadow-md transition"
              >
                {/* Decorative border cutouts */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-warm-50" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-warm-50" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono font-extrabold text-lg text-primary-600 tracking-wider">
                      {coupon.code}
                    </span>
                    <button
                      onClick={() => copyCode(coupon.code)}
                      className="p-1 text-gray-400 hover:text-dark transition"
                      title="Copy Code"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-2xl font-black text-dark mb-1">
                    {coupon.discountType === 'percentage'
                      ? `${coupon.discountValue}% OFF`
                      : `₹${coupon.discountValue} OFF`}
                  </p>

                  <p className="text-xs text-gray-500">
                    Min. Order: <strong className="text-dark">₹{coupon.minOrderAmount}</strong>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                    <Calendar className="w-3 h-3" />
                    <span>Exp: {expiryStr}</span>
                  </div>

                  <button
                    onClick={() => handleDelete(coupon._id, coupon.code)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded-lg transition"
                    title="Delete Coupon"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Create Coupon Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between pb-4 border-b">
              <h3 className="text-lg font-bold text-dark">Create Promo Code</h3>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCoupon} className="space-y-4 pt-4">
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Coupon Code *</label>
                <input
                  type="text"
                  required
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  placeholder="e.g. FESTIVE25"
                  className="input-field text-sm uppercase font-mono font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Discount Type</label>
                  <select
                    value={formData.discountType}
                    onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                    className="input-field text-sm"
                  >
                    <option value="percentage">Percentage (%)</option>
                    <option value="flat">Flat Cash (₹)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Discount Value *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.discountValue}
                    onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                    placeholder={formData.discountType === 'percentage' ? '20' : '100'}
                    className="input-field text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Min. Order Amount (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.minOrderAmount}
                    onChange={(e) => setFormData({ ...formData, minOrderAmount: e.target.value })}
                    placeholder="499"
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Expiry Date</label>
                  <input
                    type="date"
                    value={formData.expiresAt}
                    onChange={(e) => setFormData({ ...formData, expiresAt: e.target.value })}
                    className="input-field text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn-outline flex-1 py-2.5 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 py-2.5 text-sm font-bold"
                >
                  Create Code
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
