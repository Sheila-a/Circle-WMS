import About from "./HomeComponents/About/About";
import Hero from "./HomeComponents/Hero/Hero";
import HowItWorks from "./HomeComponents/HowItWorks/HowItWorks";
import TrackBIRC from "./HomeComponents/TrackBIRC/TrackBIRC";
import WhatWeDo from "./HomeComponents/WhatWeDo/WhatWeDo";
import Footer from "../../Components/Footer/Footer";
import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect } from "react";

const Home = () => {

  const auth = useContext(AuthContext)
  
  useEffect(() => {
    console.log(auth)
  }, [auth])
  
  return (
    <div>
      <Hero />
      <About />
      <WhatWeDo />
      <HowItWorks />
      <TrackBIRC />
      <Footer/>
    </div>
  );
};

export default Home;
