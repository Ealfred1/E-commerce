import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoaderProvider } from './context/LoaderContext'
import { BrowserRouter as Router } from 'react-router-dom'
import 'primeicons/primeicons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </Router>
  </StrictMode>,
)
