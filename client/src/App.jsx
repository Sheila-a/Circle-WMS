import { useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Login from "./userAuthenticate/Login/Login";
import Signup from "./userAuthenticate/Signup/Signup";
import Home from "./Page/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Page/Dashboard/Dashboard";


import Settings from "./Page/Settings/SettingsPage/Settings";
import EditPersonal from "./Page/Settings/SettingsComponents/EditPersonal/EditPersonal";
import EditPassword from "./Page/Settings/SettingsComponents/EditPassword/EditPassword";

import PrivateRoutes from "./userAuthenticate/PrivateRoutes";
import PublicRoute from "./userAuthenticate/PublicRoute";


function App() {

  const navigate = useNavigate()
  const location = useLocation();
  
  const handleLogin = () => {
    navigate('/dashboard')
  };


    return (
      <>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoutes/>}>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/footer" element={<Footer/>} />
            
            <Route path="settings" element={<Settings/>}>
                <Route path="personal" element={<EditPersonal/>}/>
                <Route path="password" element={<EditPassword/>}/>
            </Route>
          </Route>

          <Route element={<PublicRoute/>}>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup Clickhandler={handleLogin} />} />
                <Route path="/login" element={<Login Clickhandler={handleLogin} />} />
          </Route>
        </Routes>
      </>
    );
}


export default App;
