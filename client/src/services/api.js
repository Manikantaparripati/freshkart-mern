import axios from 'axios'

// If VITE_API_URL is defined, use it, else default to /api
const baseURL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('freshkart_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res) => {
    // If the server returned HTML instead of JSON (common when SPA redirects 404 to index.html),
    // treat it as an error so components can safely fall back to static/cached data.
    if (typeof res.data === 'string' && (res.data.includes('<!DOCTYPE html>') || res.data.includes('<html'))) {
      return Promise.reject(new Error('HTML response returned instead of JSON API data'))
    }
    return res
  },
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('freshkart_token')
      localStorage.removeItem('freshkart_user')
      if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(err)
  }
)

export default api
