import React from 'react'
import { logout } from '../common/auth';

const Logout = () => {

  const handleLogout = () => {
    logout();
    window.location.replace("/");
  };
  
  return (
    <div>
      <a href="" onClick={handleLogout}>
          Sair
      </a>
    </div>
  )
}

export default Logout
