/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion, useViewportScroll } from "framer-motion";


const Navbar = () => {

  return (
    <nav className="flex w-screen fixed bg-[#202020]">
      <div className="justify-start px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
      <div className="flex items-center justify-between pl-24 py-3 md:py-8 md:block">

        {/* LOGO animation -> svg*/}
         <div className="mt-2 h-auto -ml-3">
        <svg id="svg" width={40} height={40} viewBox="157.71 288.18 764.59 503.63" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%" gradientTransform="rotate(-11)">
              <stop offset={0} style={{stopColor: '#2F2A7B'}} />
              <stop offset={1} style={{stopColor: '#39B54A'}} />
            </linearGradient>

            <mask id="svg-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={1080} height={1080}>
              <path id="pathsvg" stroke-width="48" d="M169,786.34Q363.359996,175.978707,899.999998,336.45q-179.120002,587.259106-529.72,350.82q69.719998-251.25,299.72-209.26" fill="none" strokeWidth={35} strokeLinecap="round" strokeLinejoin="miter" />
            </mask>
          </defs>

          <g mask="url(#svg-mask)">
            <rect x={0} y={0} width={1080} height={1080} fill="#D6D6D6" />
            <rect id="svg-gradient" x={0} y={0} width={1080} height={1080} fill="url(#gradient)" />
          </g>
        </svg>
        </div>
        </div>
        <div>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-24 md:space-y-0 pt-auto text-lg font-['Epilogue'] font-medium antialiased hidden md:block">

            <motion.li initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:0.8,duration:1,bounce:1}} className="text-[#D6D6D6] pl-10 font-[100] text-4xl">
              |
            </motion.li>

              <motion.li initial={{opacity:0,x:-200}} animate={{opacity:1,x:0}} transition={{delay:1,duration:1,bounce:1}} className="text-[#D6D6D6] hover:text-[#ffffff] ml-16">
                <a href="#About">About Us</a>
              </motion.li>
              <motion.li initial={{opacity:0,x:-300}} animate={{opacity:1,x:0}} transition={{delay:1.5,duration:1,bounce:1}} className="text-[#D6D6D6] hover:text-[#ffffff]">
                <a href="#Teams">Our Team</a>
              </motion.li>
              <motion.li initial={{opacity:0,x:-400}} animate={{opacity:1,x:0}} transition={{delay:2,duration:1,bounce:1}} className="text-[#D6D6D6] hover:text-[#ffffff]">
                <a href="#contact">Contact</a>
              </motion.li>
            </ul>
          </div>
      </div>

    </nav>
  );
};


export default Navbar;
