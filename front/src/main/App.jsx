import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Footer from '../components/templates/Footer';
import Nav from '../components/templates/Nav';
import Routes from './Routes';

export default (props) => (
  <BrowserRouter>
    <div className='app'>
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
