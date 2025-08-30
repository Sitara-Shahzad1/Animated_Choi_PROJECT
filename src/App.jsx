import React from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";
import VideoReveal from "./components/VideoReveal";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import FeatureProject from "./components/FeatureProject";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
const App = () => {
  
const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900  text-white">
             <VideoReveal />
              <div className="p-10">
       
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <FeatureProject />
        <Cards />
        <Footer />
      </div>
      </div>
    </>
  );
};

export default App;
