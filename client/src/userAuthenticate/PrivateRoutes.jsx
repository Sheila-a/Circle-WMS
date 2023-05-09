import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {
  let auth = {'token': true}
  return (
    auth.token ? <Outlet/> : <Navigate to='/' />

  )
}

export default PrivateRoutes
