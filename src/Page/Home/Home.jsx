import About from "./HomeComponents/About/About";
import Hero from "./HomeComponents/Hero/Hero";
import HowItWorks from "./HomeComponents/HowItWorks/HowItWorks";
import WhatWeDo from "./HomeComponents/WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhatWeDo />
      <HowItWorks />
    </div>
  );
};

export default Home;
