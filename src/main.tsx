import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ProductProvider } from './context/ProductContext.tsx'

declare global {
  interface Document {
    getElementById(elementId: 'root'): HTMLElement
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>,
)
