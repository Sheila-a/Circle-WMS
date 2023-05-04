import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      {/* <h1 className="text-blue-500 text-center mt-10 text-2xl font-semibold ">
        Working
      </h1> */}
      {/* <Route path="/login" element={<Home />} /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
