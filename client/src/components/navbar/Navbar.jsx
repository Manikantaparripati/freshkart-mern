import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Heart, User, Menu, X, LogOut, LayoutDashboard, Package } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'
import SearchBar from './SearchBar'
import CartDrawer from '../cart/CartDrawer'

const categories = [
  { name: 'Snacks', slug: 'snacks' },
  { name: 'Pickles', slug: 'pickles' },
  { name: 'Sweets', slug: 'sweets' },
  { name: 'Spices', slug: 'spices' },
  { name: 'Ready to Eat', slug: 'ready-to-eat' },
  { name: 'Dry Fruits', slug: 'dry-fruits' },
  { name: 'Beverages', slug: 'beverages' },
  { name: 'Gift Packs', slug: 'gift-packs' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { totalItems } = useSelector(s => s.cart)
  const { items: wishlistItems } = useSelector(s => s.wishlist)
  const { isAuthenticated, user } = useSelector(s => s.auth)

  const handleLogout = () => {
    dispatch(logout())
    setUserMenuOpen(false)
    navigate('/')
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          {/* Left: Logo + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-1"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-dark" />
            </button>
            <Link to="/" className="text-2xl font-extrabold text-primary-500 tracking-tight">
              🛒 FreshKart
            </Link>
          </div>

          {/* Center: Search */}
          <div className="hidden md:block flex-1 max-w-2xl">
            <SearchBar />
          </div>

          {/* Right: Nav Icons */}
          <div className="flex items-center gap-5">
            {/* Desktop Categories */}
            <nav className="hidden lg:flex space-x-5 text-sm font-semibold text-gray-700">
              {categories.slice(0, 4).map(cat => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="hover:text-primary-500 transition whitespace-nowrap"
                >
                  {cat.name}
                </Link>
              ))}
              <div className="relative group">
                <button className="hover:text-primary-500 transition">More ▾</button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {categories.slice(4).map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary-600 first:rounded-t-xl last:rounded-b-xl"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative hidden md:block" aria-label="Wishlist">
              <Heart className="w-6 h-6 text-gray-600 hover:text-primary-500 transition" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 text-gray-600 hover:text-primary-500 transition"
                aria-label="User menu"
              >
                <User className="w-6 h-6" />
                {isAuthenticated && (
                  <span className="text-xs font-semibold text-gray-700 max-w-16 truncate">
                    {user?.name?.split(' ')[0]}
                  </span>
                )}
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="font-semibold text-sm text-dark truncate">{user?.email}</p>
                      </div>
                      <Link to="/profile" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50">
                        <User className="w-4 h-4" /> My Profile
                      </Link>
                      <Link to="/orders" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50">
                        <Package className="w-4 h-4" /> My Orders
                      </Link>
                      {user?.role === 'admin' && (
                        <Link to="/admin" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-primary-600 hover:bg-orange-50 font-semibold">
                          <LayoutDashboard className="w-4 h-4" /> Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-b-xl"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-primary-600 hover:bg-orange-50 rounded-t-xl">
                        Login
                      </Link>
                      <Link to="/register" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 rounded-b-xl">
                        Create Account
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative"
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-primary-500 transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-3">
          <SearchBar />
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileMenuOpen(false)} />
          <aside className="fixed left-0 top-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col animate-slide-in">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="text-xl font-extrabold text-primary-500">🛒 FreshKart</span>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            {isAuthenticated && (
              <div className="px-6 py-3 bg-orange-50 border-b">
                <p className="text-xs text-gray-500">Welcome back</p>
                <p className="font-bold text-dark">{user?.name}</p>
              </div>
            )}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">Categories</p>
              {categories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-primary-600 font-medium text-sm"
                >
                  {cat.name}
                </Link>
              ))}
              <div className="border-t my-4" />
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-orange-50 text-sm font-medium">
                    <User className="w-4 h-4" /> Profile
                  </Link>
                  <Link to="/orders" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-orange-50 text-sm font-medium">
                    <Package className="w-4 h-4" /> My Orders
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-primary-600 hover:bg-orange-50 text-sm font-bold">
                      <LayoutDashboard className="w-4 h-4" /> Admin Panel
                    </Link>
                  )}
                  <button onClick={handleLogout} className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 text-sm font-medium mt-2">
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 mt-2">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn-primary text-center">Login</Link>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="btn-outline text-center">Register</Link>
                </div>
              )}
            </nav>
          </aside>
        </>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
