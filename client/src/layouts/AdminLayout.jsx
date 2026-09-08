import { Outlet, NavLink } from 'react-router-dom'
import { LayoutDashboard, Package, ShoppingCart, Users, Tag, Grid, Menu, X } from 'lucide-react'
import { useState } from 'react'

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { name: 'Dashboard', to: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Products', to: '/admin/products', icon: <Package className="w-5 h-5" /> },
    { name: 'Orders', to: '/admin/orders', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'Users', to: '/admin/users', icon: <Users className="w-5 h-5" /> },
    { name: 'Coupons', to: '/admin/coupons', icon: <Tag className="w-5 h-5" /> },
    { name: 'Categories', to: '/admin/categories', icon: <Grid className="w-5 h-5" /> },
  ]
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 z-50 w-64 bg-white shadow-lg transition-transform duration-200 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-primary-500">FreshKart Admin</h1>
          <button className="md:hidden" onClick={() => setIsOpen(false)}><X /></button>
        </div>
        <nav className="p-4 space-y-2">
          {links.map(link => (
            <NavLink key={link.name} to={link.to} end={link.to === '/admin'} onClick={() => setIsOpen(false)}
              className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              {link.icon} <span className="font-medium">{link.name}</span>
            </NavLink>
          ))}
          <div className="pt-4 border-t mt-4">
            <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 transition text-sm font-semibold">
              ← Return to Store
            </a>
          </div>
        </nav>
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white shadow-sm h-16 flex items-center px-4 md:px-8">
          <button className="md:hidden mr-4" onClick={() => setIsOpen(true)}><Menu /></button>
          <div className="ml-auto text-sm font-medium">Admin Panel</div>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default AdminLayout
