import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../Page/Dashboard/Dashboard';

function PrivateRoutes() {
  let auth = {'token': true}
  return (
    auth.token ?
    <>
    <Dashboard/>
    
    </> 
     : 
    
    
    <Navigate to='/' />

  )
}

export default PrivateRoutes
