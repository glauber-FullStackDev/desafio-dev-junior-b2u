import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';


import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Routes />
  </React.StrictMode>
);

