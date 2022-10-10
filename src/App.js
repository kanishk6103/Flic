import React from "react";
import { motion, useScroll, useSpring } from "framer-motion"
import Contact from "./components/Contact";
import HomeHero from "./components/HomeHero";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Timeline from "./components/Timeline";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10">
        <HomeHero />
        <Timeline />
        <Teams />
        <Contact />
      </div>
    </div>
  );
};

export default App;
