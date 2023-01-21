import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from './auth'


function CustomerGuardedRoute( props: any ) {
  
    if (isAuthenticated()) {
      return props.children;
    }
    return <Navigate to="/login" />;
}

export default CustomerGuardedRoute
