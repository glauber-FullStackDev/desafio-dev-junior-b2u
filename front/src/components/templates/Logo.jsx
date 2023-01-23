import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default (props) => (
  <aside className='logo'>
    <Link to='/' className='logo'></Link>
  </aside>
);
