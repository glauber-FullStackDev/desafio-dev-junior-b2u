import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import history from './History';
import { BrowserRouter } from 'react-router-dom';
import CarShopProvider from './Context/CarShopProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter history={ history }>
      <CarShopProvider>
        <App />
      </CarShopProvider>
    </BrowserRouter>
  </React.StrictMode>
);

