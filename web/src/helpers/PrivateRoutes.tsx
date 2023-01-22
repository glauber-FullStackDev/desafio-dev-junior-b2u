import { Outlet, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';
import { getItemFromLocalStorage } from '../services/localStorage';

interface Auth {
  token: string
}
export default function PrivateRoutes() {
  const { auth } = useContext(AuthContext);
  const authOnLocalStorage = getItemFromLocalStorage('BitMotors_user_token') as Auth;
  let token;
  if (Object.keys(auth).length > 0) {
    token = auth.token;
  } else if (authOnLocalStorage) {
    token = authOnLocalStorage.token;
  } else {
    token = false;
  }
  console.log(auth)

  return token ? <Outlet /> : <Navigate to="/login" />;
}
