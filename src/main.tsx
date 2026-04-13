import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ProductContext } from './context/ProductContext.js';

declare global {
  interface Document {
    getElementById(elementId: 'root'): HTMLElement
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContext>
      <App />
    </ProductContext>
  </StrictMode>,
)
