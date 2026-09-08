import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/slices/authSlice'
import { Eye, EyeOff, ShoppingBag, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((s) => s.auth)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      return toast.error('Passwords do not match')
    }

    if (formData.password.length < 6) {
      return toast.error('Password must be at least 6 characters long')
    }

    const res = await dispatch(
      registerUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        password: formData.password,
      })
    )

    if (registerUser.fulfilled.match(res)) {
      toast.success('Account created successfully! Welcome to FreshKart 🎉')
      navigate('/')
    } else {
      toast.error(res.payload || 'Registration failed')
    }
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Helmet>
          <title>Create Account — FreshKart</title>
        </Helmet>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
            <ShoppingBag className="w-7 h-7 text-primary-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-dark">Create Account</h1>
          <p className="text-gray-500 mt-1">Join FreshKart for authentic Indian flavours</p>
        </div>

        <div className="card p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. Manikanta Parripati"
                className="input-field"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="input-field"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="9876543210"
                className="input-field"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">
                Password (min. 6 characters) *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="input-field pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">
                Confirm Password *
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="input-field"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 p-2.5 rounded-xl">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 mt-2 disabled:opacity-60"
            >
              {loading ? 'Creating Account…' : 'Create Free Account'}
            </button>
          </form>

          {/* Perks list */}
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
            {[
              'Exclusive discounts & coupons (WELCOME10)',
              'Save multiple delivery addresses',
              'Real-time order tracking updates',
            ].map((perk, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                <div className="w-4 h-4 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                {perk}
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
