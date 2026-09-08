import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function OrderSuccessPage() {
  const { id } = useParams()
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
      <Helmet><title>Order Success - FreshKart</title></Helmet>
      <CheckCircle className="w-24 h-24 text-accent-500 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-500 mb-8 text-lg">Thank you for your order. Your order ID is <span className="font-bold text-dark">{id}</span>.</p>
      <div className="flex gap-4">
        <Link to={`/orders/${id}`} className="btn-primary">Track Order</Link>
        <Link to="/products" className="btn-outline">Continue Shopping</Link>
      </div>
    </div>
  )
}
