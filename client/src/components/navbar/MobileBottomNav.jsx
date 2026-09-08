import { Home, Grid, Search, Heart, ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MobileBottomNav() {
  const { totalItems } = useSelector(s => s.cart)
  const { items: wishlistItems } = useSelector(s => s.wishlist)

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/products', icon: Grid, label: 'Categories' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/wishlist', icon: Heart, label: 'Wishlist', count: wishlistItems.length },
    { to: '/cart', icon: ShoppingCart, label: 'Cart', count: totalItems },
  ]

  return (
    <div className="md:hidden fixed bottom-0 w-full bg-white border-t z-40 px-2 py-2 pb-safe">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {links.map((item) => (
          <NavLink key={item.label} to={item.to} className={({isActive}) => `flex flex-col items-center p-2 ${isActive ? 'text-primary-500' : 'text-gray-500'}`}>
            <div className="relative">
              <item.icon className="w-6 h-6" />
              {item.count > 0 && <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">{item.count}</span>}
            </div>
            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
