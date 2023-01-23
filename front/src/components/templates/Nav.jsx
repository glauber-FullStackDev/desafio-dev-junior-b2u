import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default (props) => (
  <aside className='menu-area'>
    <nav className='menu'>
      <Link to='/'>
        <i className='fa fa-home'></i> Início
      </Link>
      <Link to='/cars'>
        <i className='fa fa-car'></i> Veiculos
      </Link>
    </nav>
  </aside>
);
