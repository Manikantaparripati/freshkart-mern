import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as authService from '../../services/authService'

const storedUser = localStorage.getItem('freshkart_user')
const storedToken = localStorage.getItem('freshkart_token')

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  loading: false,
  error: null,
}

export const loginUser = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await authService.login(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed')
  }
})

export const registerUser = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const res = await authService.register(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed')
  }
})

export const fetchProfile = createAsyncThunk('auth/fetchProfile', async (_, thunkAPI) => {
  try {
    return await authService.getProfile()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Fetch profile failed')
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
      localStorage.setItem('freshkart_user', JSON.stringify(action.payload.user))
      localStorage.setItem('freshkart_token', action.payload.token)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem('freshkart_user')
      localStorage.removeItem('freshkart_token')
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
      localStorage.setItem('freshkart_user', JSON.stringify(state.user))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        const { token, ...user } = action.payload
        state.user = user
        state.token = token
        localStorage.setItem('freshkart_user', JSON.stringify(user))
        localStorage.setItem('freshkart_token', token)
      })
      .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload })
      
      .addCase(registerUser.pending, (state) => { state.loading = true; state.error = null })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        const { token, ...user } = action.payload
        state.user = user
        state.token = token
        localStorage.setItem('freshkart_user', JSON.stringify(user))
        localStorage.setItem('freshkart_token', token)
      })
      .addCase(registerUser.rejected, (state, action) => { state.loading = false; state.error = action.payload })
      
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload
        localStorage.setItem('freshkart_user', JSON.stringify(action.payload))
      })
  }
})

export const { setCredentials, logout, updateUser } = authSlice.actions
export default authSlice.reducer
