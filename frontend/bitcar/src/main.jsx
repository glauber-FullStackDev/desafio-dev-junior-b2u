import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalProvider } from './contexts/ModalContext'

import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <ModalProvider>
      <App />
      </ModalProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
