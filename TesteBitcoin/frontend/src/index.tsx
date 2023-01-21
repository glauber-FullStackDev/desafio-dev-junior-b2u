import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './Context/cart';
import { GlobalStyle } from './global/style';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <GlobalStyle/>
    </CartProvider>
  </React.StrictMode>
);


