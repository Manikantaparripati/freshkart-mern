import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import EmptyState from '../components/ui/EmptyState'
import { ShoppingCart } from 'lucide-react'

export default function CartPage() {
  const { items } = useSelector(s => s.cart)
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-3xl animate-fade-in shadow-sm">
        <Helmet><title>Cart - FreshKart</title></Helmet>
        <EmptyState icon={<ShoppingCart />} title="Your Cart is Empty" description="Looks like you haven't added anything to your cart yet." actionLabel="Start Shopping" onAction={() => navigate('/products')} />
      </div>
    )
  }

  return (
    <>
      <Helmet><title>Cart - FreshKart</title></Helmet>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {items.map(item => <CartItem key={item.id} item={item} />)}
          </div>
          <div className="w-full lg:w-96">
            <CartSummary onCheckout={() => navigate('/checkout')} />
          </div>
        </div>
      </div>
    </>
  )
}
