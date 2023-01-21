import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from './auth'


function CustomerGuardedRoute( props: any ) {
  
    if (isAuthenticated() && getRole(window.sessionStorage.getItem('session-token')) === 'CUSTOMER') {
      return props.children;
    }
    return <Navigate to="/login" />;
}

export default CustomerGuardedRoute
