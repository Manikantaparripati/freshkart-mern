import { useState, useEffect } from 'react'
import { Users, Search, Shield, User, Calendar, Check, ArrowUpDown } from 'lucide-react'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import api from '../../services/api'

export default function AdminUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await api.get('/admin/users')
      setUsers(res.data || [])
    } catch {
      toast.error('Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleRoleToggle = async (userId, currentRole, userName) => {
    const nextRole = currentRole === 'admin' ? 'user' : 'admin'
    if (!window.confirm(`Change ${userName}'s role from ${currentRole} to ${nextRole}?`)) {
      return
    }

    try {
      await api.put(`/admin/users/${userId}/role`, { role: nextRole })
      toast.success(`${userName} is now an ${nextRole}!`)
      setUsers(
        users.map((u) => (u._id === userId ? { ...u, role: nextRole } : u))
      )
    } catch (err) {
      toast.error('Failed to update user role')
    }
  }

  const filteredUsers = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">User Management</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Registered customers, permissions, and administrative privileges ({users.length} accounts)
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by customer name or email address..."
          className="w-full text-sm outline-none bg-transparent text-dark placeholder:text-gray-400"
        />
        {search && (
          <button onClick={() => setSearch('')} className="text-xs text-gray-400 hover:text-gray-600">
            Clear
          </button>
        )}
      </div>

      {/* Users Table */}
      {loading ? (
        <div className="flex justify-center py-20">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/80 border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-4 font-semibold">User</th>
                  <th className="p-4 font-semibold">Email</th>
                  <th className="p-4 font-semibold">Phone</th>
                  <th className="p-4 font-semibold">Role</th>
                  <th className="p-4 font-semibold">Registered</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredUsers.map((u) => {
                  const isAdmin = u.role === 'admin'
                  const initials = u.name
                    ? u.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
                    : 'U'
                  const date = new Date(u.createdAt).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })

                  return (
                    <tr key={u._id} className="hover:bg-orange-50/30 transition">
                      <td className="p-4 flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                            isAdmin
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-orange-100 text-primary-700'
                          }`}
                        >
                          {initials}
                        </div>
                        <div>
                          <p className="font-bold text-dark text-sm">{u.name}</p>
                          <p className="text-[10px] text-gray-400">ID: {u._id?.slice(-6)}</p>
                        </div>
                      </td>

                      <td className="p-4 font-medium text-gray-600">{u.email}</td>

                      <td className="p-4 text-gray-500">{u.phone || '—'}</td>

                      <td className="p-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            isAdmin
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {isAdmin ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
                          {u.role.toUpperCase()}
                        </span>
                      </td>

                      <td className="p-4 text-gray-400 text-[11px]">{date}</td>

                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleRoleToggle(u._id, u.role, u.name)}
                          className={`text-[11px] font-bold px-3 py-1.5 rounded-xl border transition ${
                            isAdmin
                              ? 'border-gray-200 text-gray-600 hover:bg-gray-100'
                              : 'border-purple-200 text-purple-700 hover:bg-purple-50'
                          }`}
                        >
                          {isAdmin ? 'Demote to User' : 'Promote to Admin'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
