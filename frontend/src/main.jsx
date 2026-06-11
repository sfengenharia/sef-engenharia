import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { CookieBanner } from './components/ui/cookie-banner'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <CookieBanner />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
