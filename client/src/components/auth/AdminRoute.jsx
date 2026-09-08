import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const AdminRoute = () => {
  const { user, isAuthenticated } = useSelector(s => s.auth)
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (user?.role !== 'admin') return <Navigate to="/" replace />
  return <Outlet />
}
export default AdminRoute
