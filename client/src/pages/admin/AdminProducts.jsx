import { useState, useEffect } from 'react'
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  X, 
  Package, 
  Check, 
  AlertCircle,
  ExternalLink
} from 'lucide-react'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import api from '../../services/api'
import { FOOD_FALLBACK_SVG } from '../../utils/imageUtils'

export default function AdminProducts() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Modal State
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    originalPrice: '',
    stock: '',
    weight: '500g',
    ingredients: '',
    image: '',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
  })

  const fetchData = async () => {
    setLoading(true)
    try {
      const [prodRes, catRes] = await Promise.all([
        api.get('/products', { params: { pageSize: 100 } }),
        api.get('/categories'),
      ])
      setProducts(prodRes.data.products || [])
      setCategories(catRes.data || [])
    } catch (err) {
      toast.error('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const openAddModal = () => {
    setEditingProduct(null)
    setFormData({
      name: '',
      description: '',
      category: categories[0]?._id || '',
      price: '',
      originalPrice: '',
      stock: 50,
      weight: '500g',
      ingredients: '',
      image: '',
      isFeatured: false,
      isBestSeller: false,
      isNewArrival: true,
    })
    setModalOpen(true)
  }

  const openEditModal = (p) => {
    setEditingProduct(p)
    setFormData({
      name: p.name || '',
      description: p.description || '',
      category: p.category?._id || p.category || '',
      price: p.price || '',
      originalPrice: p.originalPrice || '',
      stock: p.stock ?? 0,
      weight: p.weight || '500g',
      ingredients: p.ingredients || '',
      image: p.images?.[0] || '',
      isFeatured: p.isFeatured || false,
      isBestSeller: p.isBestSeller || false,
      isNewArrival: p.isNewArrival || false,
    })
    setModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...formData,
      price: Number(formData.price),
      originalPrice: Number(formData.originalPrice || formData.price),
      stock: Number(formData.stock),
      images: [formData.image || FOOD_FALLBACK_SVG],
    }

    try {
      if (editingProduct) {
        await api.put(`/products/${editingProduct._id}`, payload)
        toast.success('Product updated successfully!')
      } else {
        await api.post('/products', payload)
        toast.success('Product created successfully!')
      }
      setModalOpen(false)
      fetchData()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to save product')
    }
  }

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return
    try {
      await api.delete(`/products/${id}`)
      toast.success('Product deleted')
      setProducts(products.filter((p) => p._id !== id))
    } catch (err) {
      toast.error('Failed to delete product')
    }
  }

  const handleQuickStockUpdate = async (id, newStock) => {
    try {
      await api.put(`/products/${id}`, { stock: Math.max(0, Number(newStock)) })
      setProducts(
        products.map((p) => (p._id === id ? { ...p, stock: Math.max(0, Number(newStock)) } : p))
      )
      toast.success('Stock updated')
    } catch {
      toast.error('Failed to update stock')
    }
  }

  const filteredProducts = products.filter((p) =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">Products Catalog</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Create, edit, manage stock and categorize items ({products.length} total)
          </p>
        </div>
        <button onClick={openAddModal} className="btn-primary flex items-center gap-2 py-2.5 px-5 text-sm font-bold">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter products by name..."
          className="w-full text-sm outline-none bg-transparent text-dark placeholder:text-gray-400"
        />
        {search && (
          <button onClick={() => setSearch('')} className="text-xs text-gray-400 hover:text-gray-600">
            Clear
          </button>
        )}
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex justify-center py-20">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/80 border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Category</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Stock</th>
                  <th className="p-4 font-semibold">Badges</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredProducts.map((p) => {
                  const image = p.images?.[0] || FOOD_FALLBACK_SVG
                  return (
                    <tr key={p._id} className="hover:bg-orange-50/30 transition">
                      <td className="p-4 flex items-center gap-3 min-w-[220px]">
                        <img
                          src={image}
                          alt={p.name}
                          className="w-12 h-12 rounded-xl object-cover bg-gray-50 border border-gray-100 flex-shrink-0"
                          onError={(e) => {
                            e.target.src = FOOD_FALLBACK_SVG
                          }}
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-dark text-sm truncate max-w-[180px]">
                            {p.name}
                          </p>
                          <p className="text-[11px] text-gray-400">{p.weight || '500g'}</p>
                        </div>
                      </td>

                      <td className="p-4 font-medium text-gray-600">
                        {p.category?.name || 'Snacks'}
                      </td>

                      <td className="p-4 font-extrabold text-dark">
                        ₹{p.price}
                        {p.originalPrice > p.price && (
                          <span className="text-[10px] text-gray-400 line-through ml-1.5">
                            ₹{p.originalPrice}
                          </span>
                        )}
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-1.5">
                          <input
                            type="number"
                            defaultValue={p.stock}
                            onBlur={(e) => handleQuickStockUpdate(p._id, e.target.value)}
                            min="0"
                            className="w-16 px-2 py-1 text-center font-bold border rounded-lg focus:outline-none focus:border-primary-500 bg-white"
                          />
                          <span className={`text-[10px] font-bold ${p.stock > 10 ? 'text-accent-600' : 'text-red-500'}`}>
                            {p.stock === 0 ? 'Out' : p.stock < 10 ? 'Low' : 'OK'}
                          </span>
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="flex gap-1 flex-wrap">
                          {p.isBestSeller && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
                              HOT
                            </span>
                          )}
                          {p.isNewArrival && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-green-100 text-green-800">
                              NEW
                            </span>
                          )}
                          {p.isFeatured && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-100 text-purple-800">
                              FEAT
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => openEditModal(p)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            title="Edit Product"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(p._id, p.name)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add / Edit Product Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b">
              <h3 className="text-lg font-bold text-dark">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Product Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Gongura Pickle"
                  className="input-field text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Description *</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  placeholder="Detailed description of the food item..."
                  className="input-field text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="input-field text-sm"
                  >
                    <option value="">Select Category</option>
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Weight *</label>
                  <input
                    type="text"
                    required
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="e.g. 500g, 1kg"
                    className="input-field text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Selling Price (₹) *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="250"
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Original Price (₹)</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    placeholder="300"
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Stock Count *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    placeholder="50"
                    className="input-field text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  className="input-field text-sm font-mono text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Ingredients</label>
                <input
                  type="text"
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  placeholder="e.g. Gongura leaves, mustard oil, garlic, red chilli"
                  className="input-field text-sm"
                />
              </div>

              {/* Promotional Flags */}
              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-700">
                  <input
                    type="checkbox"
                    checked={formData.isBestSeller}
                    onChange={(e) => setFormData({ ...formData, isBestSeller: e.target.checked })}
                    className="w-4 h-4 rounded text-primary-500"
                  />
                  Best Seller
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-700">
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    className="w-4 h-4 rounded text-primary-500"
                  />
                  Featured
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-700">
                  <input
                    type="checkbox"
                    checked={formData.isNewArrival}
                    onChange={(e) => setFormData({ ...formData, isNewArrival: e.target.checked })}
                    className="w-4 h-4 rounded text-primary-500"
                  />
                  New Arrival
                </label>
              </div>

              <div className="flex gap-3 pt-4 border-t">
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
                  {editingProduct ? 'Save Changes' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
