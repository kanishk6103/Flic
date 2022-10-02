/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion } from "framer-motion";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full fixed bg-slate-900 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="lg:border-r-2 lg:h-8 lg:border-white lg:w-24">
          <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:0.5,duration:1,bounce:1}} className="flex ml-8 items-center  justify-between py-3 md:py-5 md:block">
            <a href="/">
              <img src="./logofliccolor.png" className="absolute mt-[-1rem] w-8 h-8" alt="" />
              <div className="absolute mt-[-1rem] w-12 h-12 hover:invisible focus:invisible">
              <img src="./logoflic.png" className=" w-8 h-8" alt="" />
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:mx-8 md:my-8 md:flex md:space-x-6 md:space-y-0">
              <motion.li initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:0.8,duration:1,bounce:1}} className="text-white/80 hover:font-semibold hover:text-white">
                <a href="#About">About Us</a>
              </motion.li>
              <motion.li initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:1.3,duration:1,bounce:1}} className="text-white/80 hover:font-semibold hover:text-white">
                <a href="#Teams">Our Team</a>
              </motion.li>
              <motion.li initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:1.8,duration:1,bounce:1}} className="text-white/80 hover:font-semibold hover:text-white">
                <a href="#contact">Contact Us</a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
