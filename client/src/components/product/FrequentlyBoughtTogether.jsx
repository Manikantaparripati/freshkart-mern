import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/slices/cartSlice'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../../services/api'

export default function FrequentlyBoughtTogether({ categoryId, currentProductId }) {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    if (!categoryId) return
    api.get('/products/recommended', { params: { categoryId, productId: currentProductId } })
      .then(res => setProducts(res.data.slice(0, 2)))
      .catch(() => {})
  }, [categoryId, currentProductId])

  if (products.length === 0) return null

  const handleAddAll = () => {
    products.forEach(p => {
      dispatch(addItem({ id: p._id, name: p.name, price: p.price, image: p.images?.[0], quantity: 1 }))
    })
    toast.success('Products added to cart!')
  }

  return (
    <div className="card p-6 my-8">
      <h3 className="font-bold text-dark text-lg mb-5">Frequently Bought Together</h3>
      <div className="flex flex-wrap items-center gap-4">
        {products.map((product, idx) => (
          <div key={product._id} className="flex items-center gap-3">
            {idx > 0 && <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />}
            <Link to={`/products/${product.slug}`} className="flex items-center gap-3 group">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onError={(e) => { e.target.src = 'https://placehold.co/80x80/F97316/white?text=Food' }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-dark group-hover:text-primary-600 line-clamp-2">{product.name}</p>
                <p className="text-primary-600 font-bold text-sm">₹{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handleAddAll} className="btn-primary mt-5 text-sm">
        Add All to Cart — ₹{products.reduce((s, p) => s + p.price, 0)}
      </button>
    </div>
  )
}
