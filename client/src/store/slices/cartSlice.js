import { createSlice } from '@reduxjs/toolkit'

const storedCart = localStorage.getItem('freshkart_cart')
const initialData = storedCart ? JSON.parse(storedCart) : { items: [] }

const calculateTotals = (state) => {
  state.totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0)
  state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  state.shippingPrice = state.totalPrice > 499 || state.totalPrice === 0 ? 0 : 49
  state.taxPrice = Number((0.05 * state.totalPrice).toFixed(2))
  let discount = state.coupon ? (state.totalPrice * state.coupon.discount / 100) : 0
  state.grandTotal = state.totalPrice + state.shippingPrice + state.taxPrice - discount
  localStorage.setItem('freshkart_cart', JSON.stringify(state))
}

const initialState = {
  items: initialData.items || [],
  totalItems: 0,
  totalPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  grandTotal: 0,
  coupon: null,
}
calculateTotals(initialState) // init calculation

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existItem = state.items.find(x => x.id === item.id)
      if (existItem) {
        existItem.quantity += item.quantity || 1
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 })
      }
      calculateTotals(state)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(x => x.id !== action.payload)
      calculateTotals(state)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find(x => x.id === id)
      if (item && quantity > 0) {
        item.quantity = quantity
        calculateTotals(state)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.coupon = null
      calculateTotals(state)
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload
      calculateTotals(state)
    },
    removeCoupon: (state) => {
      state.coupon = null
      calculateTotals(state)
    }
  }
})

export const { addItem, removeItem, updateQuantity, clearCart, applyCoupon, removeCoupon } = cartSlice.actions
export default cartSlice.reducer
