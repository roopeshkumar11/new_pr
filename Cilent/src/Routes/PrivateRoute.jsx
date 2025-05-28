
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../ContextApi/Authcontext';


const PrivateRoute = ({ children }) => {
  const {token}=useAuth()
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
