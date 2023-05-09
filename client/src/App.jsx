import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./userAuthenticate/Login/Login";
import Signup from "./userAuthenticate/Signup/Signup";
import Button from "./userAuthenticate/Button/Button";
import Home from "./Page/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Page/Dashboard/Dashboard";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <>
        {/* <h1 className="text-blue-500 text-center mt-10 text-2xl font-semibold ">
          Working
        </h1> */}
        {/* <Route path="/login" element={<Home />} /> */}

        <Button
          style={{ background: "#1877F2", width: "180px", marginTop: "45px" }}
          text="Sign out"
          handleclick={() => setIsLoggedIn(false)}
        />
      </>
    );
  } else {
    return (
      <>
        {location.pathname !== "/dashboard" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={<Signup Clickhandler={handleLogin} />}
          />
          <Route path="/login" element={<Login Clickhandler={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
