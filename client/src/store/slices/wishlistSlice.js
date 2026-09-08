import { createSlice } from '@reduxjs/toolkit'

const storedWishlist = localStorage.getItem('freshkart_wishlist')
const initialState = {
  items: storedWishlist ? JSON.parse(storedWishlist) : [],
}

const getId = (item) => item._id || item.id

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const id = getId(action.payload)
      if (!state.items.find((x) => getId(x) === id)) {
        state.items.push(action.payload)
        localStorage.setItem('freshkart_wishlist', JSON.stringify(state.items))
      }
    },
    removeFromWishlist: (state, action) => {
      // action.payload can be either the id string or an object
      const id = typeof action.payload === 'string' ? action.payload : getId(action.payload)
      state.items = state.items.filter((x) => getId(x) !== id)
      localStorage.setItem('freshkart_wishlist', JSON.stringify(state.items))
    },
    clearWishlist: (state) => {
      state.items = []
      localStorage.removeItem('freshkart_wishlist')
    },
  },
})

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
