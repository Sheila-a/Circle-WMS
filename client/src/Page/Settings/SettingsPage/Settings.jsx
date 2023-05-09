import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './settings.module.css'
import Sheader from '../SettingsComponents/Header/Sheader'
import NavLike from '../SettingsComponents/NavLike/NavLike'
import UserCard from '../SettingsComponents/UserCard/UserCard'



function Settings() {
  return (
    <div>
      <NavLike/>
      <Sheader/>

      <main className={styles.mainStyles}>
        <UserCard name='Chioma Sheila' email='Iamchioma@gmail.com'/>
        <Outlet/>
      </main>      
    </div>
  )
}

export default Settings
