import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { Provider } from 'react-redux'
import store from './store.js'

declare global {
  interface Document {
    getElementById(elementId: 'root'): HTMLElement
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
