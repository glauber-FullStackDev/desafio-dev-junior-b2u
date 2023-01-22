import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalProvider } from './contexts/ModalContext'
import { ApiProvider } from './contexts/ApiContext'
import { ItemProvider } from './contexts/ItemContext'

import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemProvider>
        <ApiProvider>


          <ModalProvider>
            <App />
          </ModalProvider>
        </ApiProvider>

      </ItemProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
