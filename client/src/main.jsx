import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { store } from './store'
import ErrorBoundary from './components/ui/ErrorBoundary'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
            <Toaster position="top-right" toastOptions={{ duration: 3000, style: { background: '#1c1917', color: '#fff' } }} />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
