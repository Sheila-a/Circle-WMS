import React from 'react'
import {Route, Routes, Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'


function PublicRoute() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default PublicRoute
