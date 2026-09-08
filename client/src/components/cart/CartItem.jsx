import { Minus, Plus, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../../store/slices/cartSlice'

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm mb-4">
      <img src={item.image || 'https://via.placeholder.com/100'} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="font-bold text-primary-600">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-3 border rounded-xl px-2 py-1">
        <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}))} disabled={item.quantity <= 1} className="p-1 disabled:opacity-50"><Minus className="w-4 h-4"/></button>
        <span className="font-semibold w-6 text-center">{item.quantity}</span>
        <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))} className="p-1"><Plus className="w-4 h-4"/></button>
      </div>
      <button onClick={() => dispatch(removeItem(item.id))} className="p-2 text-gray-400 hover:text-red-500 bg-gray-50 rounded-xl"><Trash2 className="w-5 h-5"/></button>
    </div>
  )
}
