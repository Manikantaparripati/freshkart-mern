import api from './api'
// Placeholder for cart sync if backend is used for cart
export const getCart = async () => (await api.get('/cart')).data
export const addToCart = async (data) => (await api.post('/cart', data)).data
export const updateItem = async (productId, quantity) => (await api.put(`/cart/${productId}`, { quantity })).data
export const removeItem = async (productId) => (await api.delete(`/cart/${productId}`)).data
export const clearCart = async () => (await api.delete('/cart')).data
