import api from './api'

export const getProducts = async (params) => {
  const res = await api.get('/products', { params })
  return res.data
}
export const getProductBySlug = async (slug) => {
  const res = await api.get(`/products/${slug}`)
  return res.data
}
export const getFeatured = async () => {
  const res = await api.get('/products/featured')
  return res.data
}
export const getBestSellers = async () => {
  const res = await api.get('/products/bestsellers')
  return res.data
}
export const getNewArrivals = async () => {
  const res = await api.get('/products/new')
  return res.data
}
export const getRecommended = async (productId) => {
  const res = await api.get(`/products/${productId}/recommended`)
  return res.data
}
export const searchProducts = async (query) => {
  const res = await api.get(`/products/search`, { params: { q: query } })
  return res.data
}
