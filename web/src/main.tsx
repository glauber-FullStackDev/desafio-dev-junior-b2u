// style
import './index.css'
// react
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// context
import { AuthContextProvider } from './context/auth/AuthContext'
import { CarsContextProvider } from './context/cars/CarsContext'

// App
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CarsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CarsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
