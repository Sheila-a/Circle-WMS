import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './settings.module.css'

import Sheader from '../SettingsComponents/Header/Sheader'
import NavLike from '../SettingsComponents/NavLike/NavLike'
import UserCard from '../SettingsComponents/UserCard/UserCard'
import SuccessModal from '../SettingsComponents/SuccessModal/SuccessModal'
import UploadModal from '../SettingsComponents/UploadModal/UploadModal'



function Settings() {
  return (
    <div className={styles['settings-pg']}>
      <NavLike/>
      <Sheader/>

      <main className={styles.mainStyles}>
        <UserCard name='Chioma Sheila' email='Iamchioma@gmail.com'/>
        <Outlet/>
      </main>

      <SuccessModal/>
      {/*<UploadModal/>*/}
    </div>
  )
}

export default Settings
