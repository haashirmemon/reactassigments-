import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/about.jsx'
import Services from './pages/services.jsx'
import ContactUs from './pages/contactus.jsx'
import Products from './pages/productlist.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App />
  </StrictMode>,
)
