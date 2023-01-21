import { Navigate } from "react-router-dom";
import { isAuthenticated } from '../common/auth'


function CustomerGuardedRoute( props: any ) {
  
    if (isAuthenticated()) {
      return props.children;
    }
    return <Navigate to="/login" />;
}

export default CustomerGuardedRoute
