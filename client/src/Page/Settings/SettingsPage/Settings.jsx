import { Outlet } from 'react-router-dom';
import styles from './settings.module.css';
import DashNavbar from "../../../Components/DashNavbar/DashNavbar"
import Sheader from '../SettingsComponents/Header/Sheader';
import UserCard from '../SettingsComponents/UserCard/UserCard';
// import SuccessModal from '../SettingsComponents/SuccessModal/SuccessModal';
// import UploadModal from '../SettingsComponents/UploadModal/UploadModal';



function Settings() {
  return (
    <div className={styles['settings-pg']} data-aos="zoom-in" data-aos-duration="1000">
   
      <DashNavbar title="Settings"/>
      <Sheader/>

      <main className={styles.mainStyles}>
        <UserCard name='Chioma Sheila' email='Iamchioma@gmail.com'/>
        <Outlet/>
      </main>

      {/* <SuccessModal/> */}
      {/* <UploadModal/> */}
      
    </div>
  )
}

export default Settings
