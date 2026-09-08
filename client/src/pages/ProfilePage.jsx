import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { logout, updateUser } from '../store/slices/authSlice'
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  Lock, 
  LogOut, 
  LayoutDashboard, 
  Plus, 
  Trash2, 
  Check, 
  Save 
} from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../services/api'

export default function ProfilePage() {
  const { user } = useSelector((s) => s.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState('profile')
  const [loading, setLoading] = useState(false)

  // Profile Form State
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
  })

  // Password Form State
  const [pwdData, setPwdData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  // Address Form State
  const [addresses, setAddresses] = useState(user?.addresses || [])
  const [showAddressModal, setShowAddressModal] = useState(false)
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    isDefault: false,
  })

  // Sync state when user changes
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        phone: user.phone || '',
      })
      setAddresses(user.addresses || [])
    }
  }, [user])

  const handleProfileUpdate = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await api.put('/auth/profile', profileData)
      dispatch(updateUser(res.data))
      toast.success('Profile updated successfully!')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    if (pwdData.newPassword !== pwdData.confirmPassword) {
      return toast.error('New passwords do not match')
    }
    if (pwdData.newPassword.length < 6) {
      return toast.error('New password must be at least 6 characters')
    }
    setLoading(true)
    try {
      await api.put('/auth/password', {
        oldPassword: pwdData.oldPassword,
        newPassword: pwdData.newPassword,
      })
      toast.success('Password changed successfully!')
      setPwdData({ oldPassword: '', newPassword: '', confirmPassword: '' })
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to change password')
    } finally {
      setLoading(false)
    }
  }

  const handleAddAddress = async (e) => {
    e.preventDefault()
    const updated = [...addresses, newAddress]
    try {
      const res = await api.put('/auth/profile', { addresses: updated })
      dispatch(updateUser(res.data))
      setAddresses(res.data.addresses || updated)
      setShowAddressModal(false)
      setNewAddress({
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'India',
        isDefault: false,
      })
      toast.success('Address added successfully!')
    } catch (err) {
      toast.error('Failed to add address')
    }
  }

  const handleDeleteAddress = async (index) => {
    const updated = addresses.filter((_, i) => i !== index)
    try {
      const res = await api.put('/auth/profile', { addresses: updated })
      dispatch(updateUser(res.data))
      setAddresses(res.data.addresses || updated)
      toast.success('Address removed')
    } catch (err) {
      toast.error('Failed to remove address')
    }
  }

  return (
    <>
      <Helmet>
        <title>My Account — FreshKart</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <h1 className="text-3xl font-extrabold text-dark mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <aside className="md:col-span-1 space-y-2">
            <div className="bg-white rounded-2xl p-4 shadow-sm space-y-1">
              {/* User summary card */}
              <div className="p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl mb-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {user?.name?.slice(0, 2).toUpperCase() || 'FK'}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-dark text-sm truncate">{user?.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition ${
                  activeTab === 'profile'
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="w-4 h-4" /> Profile Info
              </button>

              <button
                onClick={() => navigate('/orders')}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-gray-600 hover:bg-gray-50 transition"
              >
                <Package className="w-4 h-4" /> My Orders
              </button>

              <button
                onClick={() => navigate('/wishlist')}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-gray-600 hover:bg-gray-50 transition"
              >
                <Heart className="w-4 h-4" /> Wishlist
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition ${
                  activeTab === 'addresses'
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <MapPin className="w-4 h-4" /> Saved Addresses
              </button>

              <button
                onClick={() => setActiveTab('security')}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition ${
                  activeTab === 'security'
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Lock className="w-4 h-4" /> Account Security
              </button>

              {user?.role === 'admin' && (
                <Link
                  to="/admin"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-primary-600 hover:bg-orange-50 transition"
                >
                  <LayoutDashboard className="w-4 h-4" /> Admin Portal
                </Link>
              )}

              <div className="pt-2 border-t mt-2">
                <button
                  onClick={() => {
                    dispatch(logout())
                    toast.success('Logged out successfully')
                    navigate('/')
                  }}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>
          </aside>

          {/* Tab Content */}
          <main className="md:col-span-3">
            {/* Tab 1: Profile Info */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm animate-fade-in">
                <h2 className="text-xl font-bold text-dark mb-6">Personal Information</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-5 max-w-lg">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      disabled
                      className="input-field bg-gray-50 text-gray-500 cursor-not-allowed"
                    />
                    <p className="text-xs text-gray-400 mt-1">Email cannot be changed.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      placeholder="9876543210"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Account Type
                    </label>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-100 text-primary-700">
                      {user?.role || 'user'}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {loading ? 'Saving…' : 'Save Changes'}
                  </button>
                </form>
              </div>
            )}

            {/* Tab 2: Saved Addresses */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-dark">Saved Delivery Addresses</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Manage your shipping destinations</p>
                  </div>
                  <button
                    onClick={() => setShowAddressModal(true)}
                    className="btn-primary flex items-center gap-1.5 text-sm py-2 px-4"
                  >
                    <Plus className="w-4 h-4" /> Add Address
                  </button>
                </div>

                {addresses.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl">
                    <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-600 font-semibold">No saved addresses yet</p>
                    <p className="text-gray-400 text-xs mt-1 mb-4">Add your shipping address for quicker checkout.</p>
                    <button onClick={() => setShowAddressModal(true)} className="btn-outline text-sm">
                      Add Your First Address
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {addresses.map((addr, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-2xl p-5 relative hover:border-primary-400 transition"
                      >
                        {addr.isDefault && (
                          <span className="absolute top-4 right-4 bg-accent-100 text-accent-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            DEFAULT
                          </span>
                        )}
                        <p className="font-bold text-dark text-sm mb-1">{addr.street}</p>
                        <p className="text-xs text-gray-600">{addr.city}, {addr.state} - {addr.zipCode}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{addr.country}</p>
                        
                        <div className="mt-4 pt-3 border-t flex justify-end">
                          <button
                            onClick={() => handleDeleteAddress(idx)}
                            className="text-red-500 hover:text-red-700 text-xs font-semibold flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Account Security */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm animate-fade-in">
                <h2 className="text-xl font-bold text-dark mb-2">Change Password</h2>
                <p className="text-xs text-gray-500 mb-6">Ensure your account uses a strong password.</p>

                <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Current Password *
                    </label>
                    <input
                      type="password"
                      value={pwdData.oldPassword}
                      onChange={(e) => setPwdData({ ...pwdData, oldPassword: e.target.value })}
                      required
                      className="input-field"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      New Password (min. 6 chars) *
                    </label>
                    <input
                      type="password"
                      value={pwdData.newPassword}
                      onChange={(e) => setPwdData({ ...pwdData, newPassword: e.target.value })}
                      required
                      className="input-field"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Confirm New Password *
                    </label>
                    <input
                      type="password"
                      value={pwdData.confirmPassword}
                      onChange={(e) => setPwdData({ ...pwdData, confirmPassword: e.target.value })}
                      required
                      className="input-field"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    {loading ? 'Updating…' : 'Update Password'}
                  </button>
                </form>
              </div>
            )}
          </main>
        </div>

        {/* Add Address Modal */}
        {showAddressModal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl animate-fade-in">
              <h3 className="text-lg font-bold text-dark mb-4">Add New Address</h3>
              <form onSubmit={handleAddAddress} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Street Address *</label>
                  <textarea
                    required
                    value={newAddress.street}
                    onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    rows={2}
                    className="input-field resize-none text-sm"
                    placeholder="House/Apartment no., Street"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      className="input-field text-sm"
                      placeholder="Mumbai"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      className="input-field text-sm"
                      placeholder="Maharashtra"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">PIN Code *</label>
                    <input
                      type="text"
                      required
                      value={newAddress.zipCode}
                      onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                      className="input-field text-sm"
                      placeholder="400001"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Country</label>
                    <input
                      type="text"
                      value={newAddress.country}
                      disabled
                      className="input-field text-sm bg-gray-50 text-gray-500"
                    />
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={newAddress.isDefault}
                    onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                    className="w-4 h-4 rounded text-primary-500"
                  />
                  <span className="text-xs text-gray-700">Set as default delivery address</span>
                </label>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddressModal(false)}
                    className="btn-outline flex-1 text-sm py-2.5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1 text-sm py-2.5"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
