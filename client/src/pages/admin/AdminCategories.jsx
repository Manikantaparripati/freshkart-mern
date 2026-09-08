import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, X, FolderTree, ArrowRight } from 'lucide-react'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import api from '../../services/api'

export default function AdminCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })

  const fetchCategories = async () => {
    setLoading(true)
    try {
      const res = await api.get('/categories')
      setCategories(res.data || [])
    } catch {
      toast.error('Failed to load categories')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const openAddModal = () => {
    setEditingCategory(null)
    setFormData({ name: '', description: '' })
    setModalOpen(true)
  }

  const openEditModal = (cat) => {
    setEditingCategory(cat)
    setFormData({ name: cat.name || '', description: cat.description || '' })
    setModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingCategory) {
        await api.put(`/categories/${editingCategory._id}`, formData)
        toast.success(`Category "${formData.name}" updated!`)
      } else {
        await api.post('/categories', formData)
        toast.success(`Category "${formData.name}" created!`)
      }
      setModalOpen(false)
      fetchCategories()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to save category')
    }
  }

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete category "${name}"?`)) return
    try {
      await api.delete(`/categories/${id}`)
      toast.success('Category deleted')
      setCategories(categories.filter((c) => c._id !== id))
    } catch {
      toast.error('Failed to delete category')
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">Category Management</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Organize products into intuitive Indian food categories ({categories.length} active)
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="btn-primary flex items-center gap-2 py-2.5 px-5 text-sm font-bold"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      {/* Grid of Categories */}
      {loading ? (
        <div className="flex justify-center py-20">
          <LoadingSpinner size="lg" />
        </div>
      ) : categories.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
          <FolderTree className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="font-bold text-dark">No categories found</h3>
          <p className="text-xs text-gray-400 mt-1 mb-4">
            Add categories like Snacks, Pickles, Sweets, and Spices.
          </p>
          <button onClick={openAddModal} className="btn-primary text-xs">
            Add First Category
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat._id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100/70 text-primary-600 flex items-center justify-center font-bold text-base">
                    {cat.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openEditModal(cat)}
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Edit Category"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat._id, cat.name)}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                      title="Delete Category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="font-extrabold text-dark text-base">{cat.name}</h3>
                <p className="font-mono text-[10px] text-gray-400 mt-0.5">slug: {cat.slug}</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                  {cat.description || 'Authentic category items'}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span className="font-medium text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                </span>
                <a
                  href={`/category/${cat.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  View <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Category Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between pb-4 border-b">
              <h3 className="text-lg font-bold text-dark">
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Category Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Traditional Pickles"
                  className="input-field text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  placeholder="Brief description of products in this category..."
                  className="input-field text-sm resize-none"
                />
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
                  {editingCategory ? 'Save Changes' : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
