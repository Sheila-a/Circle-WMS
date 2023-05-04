import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./userAuthenticate/Login/Login";
import Signup from "./userAuthenticate/Signup/Signup";
import Button from "./userAuthenticate/Button/Button";
import Home from "./Page/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <Routes></Routes>

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={<Signup Clickhandler={handleLogin} />}
          />
          <Route path="/login" element={<Login Clickhandler={handleLogin} />} />
        </Routes>
      </>
    );
  }
}

export default App;
