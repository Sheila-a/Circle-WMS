import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Login from "./userAuthenticate/Login/Login";
import Signup from "./userAuthenticate/Signup/Signup";
import Button from "./userAuthenticate/Button/Button";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  if(isLoggedIn){
    
    return (
      <>
        <h1 className="text-blue-500 text-center mt-10 text-2xl font-semibold ">
          Working
        </h1>

        <Button
            style={{ background: "#1877F2", width: '180px', marginTop: '45px'}} 
            text='Sign out'
            handleclick = {() => setIsLoggedIn(false)}
            />
      </>
    );
    }else{
      return (
        <>
          <Routes>
            <Route path="/signup" element={<Signup Clickhandler={handleLogin}/>}/>
            <Route path="/" element={<Login  Clickhandler={handleLogin}/>} />
          </Routes>
        </>
      )
    }
}

export default App;
