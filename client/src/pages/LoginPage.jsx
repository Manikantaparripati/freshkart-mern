import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/slices/authSlice'
import { Eye, EyeOff, ShoppingBag } from 'lucide-react'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPwd, setShowPwd] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { loading, error } = useSelector((s) => s.auth)

  const from = location.state?.from?.pathname || '/'

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await dispatch(loginUser({ email: form.email, password: form.password }))
    if (loginUser.fulfilled.match(res)) {
      toast.success('Welcome back!')
      navigate(from, { replace: true })
    } else {
      toast.error(res.payload || 'Login failed')
    }
  }

  const fillDemo = (type) => {
    if (type === 'customer') setForm({ email: 'test@freshkart.in', password: 'Test@123' })
    if (type === 'admin') setForm({ email: 'admin@freshkart.in', password: 'Admin@123' })
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Helmet>
          <title>Login — FreshKart</title>
        </Helmet>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
            <ShoppingBag className="w-7 h-7 text-primary-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-dark">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Sign in to your FreshKart account</p>
        </div>

        {/* Demo Credentials Helper */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
          <p className="text-xs font-bold text-amber-700 mb-2">🔑 Demo Credentials</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => fillDemo('customer')}
              className="text-xs bg-white border border-amber-300 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-100 font-medium"
            >
              Customer Login
            </button>
            <button
              type="button"
              onClick={() => fillDemo('admin')}
              className="text-xs bg-white border border-amber-300 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-100 font-medium"
            >
              Admin Login
            </button>
          </div>
        </div>

        <div className="card p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="input-field"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-semibold text-dark">
                  Password
                </label>
                <a href="#" className="text-xs text-primary-600 hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="input-field pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPwd ? 'Hide password' : 'Show password'}
                >
                  {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-base disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-600 font-bold hover:underline">
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
