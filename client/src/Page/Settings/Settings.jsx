import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sheader from './SettingsComponents/Header/Sheader'
import NavLike from './SettingsComponents/NavLike/NavLike'
import UserCard from './SettingsComponents/UserCard/UserCard'



const mainStyles = {
   "padding": "20px 10vw",
  "background": "#FCFCFD",
  "display": "flex",
  "flexDirection": "row",
  "justifyContent": "flexStart",
  "alignItems": "top",
}

function Settings() {
  return (
    <div>
      <NavLike/>
      <Sheader/>

      <main style={mainStyles}>
        <UserCard name='Chioma Sheila' email='Iamchioma@gmail.com'/>
        <Outlet/>
      </main>      
    </div>
  )
}

export default Settings
