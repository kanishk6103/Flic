/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

// const links = [
//   {
//     name: "About Us",
//     link: "#",
//   },
//   {
//     name: "Our Team",
//     link: "#",
//     sublinks: "",
//   },
//   {
//     name: "Contact",
//     link: "#",
//   },
// ];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="flex w-screen fixed bg-[#202020] shadow">
      <div className="justify-start px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between pl-24 py-3 md:py-8 md:block">
            <a href="/">
              <svg class="w-16 fill-[#D6D6D6] hover:fill-gradient-to-r from-[#2F2A7B] to-[#39B54A]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 764.56 503.63"><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M264.72,76.65l-1.78,1.14-1.78,1.15-1.78,1.15-1.77,1.17c-52.86,34.91-95.28,77.74-129.2,122.52S69.09,295.22,50.21,337.9a768.83,768.83,0,0,0-38.92,110C3.56,476.6.44,495.33,0,498.15l44.07,5.48c.11-.64,2.89-17.07,10-43.34A744.15,744.15,0,0,1,90.25,357.85c17.54-40.05,41.13-84,72.45-126s70.45-81.94,119-113.92l1.52-1,1.52-1,1.53-1,1.53-1a427.47,427.47,0,0,1,89.32-43.08,469.73,469.73,0,0,1,99.77-22.54,581.16,581.16,0,0,1,109.94-1.92,775,775,0,0,1,119.8,18.77c-15.49,45.17-30.7,86.84-46.07,124.72s-30.87,71.95-47,102-32.75,56-50.43,77.63-36.34,38.93-56.46,51.62c-2.31,1.46-4.65,2.86-7,4.2s-4.74,2.62-7.13,3.83-4.82,2.37-7.25,3.46-4.9,2.12-7.38,3.09a164,164,0,0,1-48.81,10.7,217.65,217.65,0,0,1-54.95-3.68,341.93,341.93,0,0,1-61.43-18.13A567.57,567.57,0,0,1,244.47,392c5.72-16.45,11.89-32.52,18.74-47.88A367,367,0,0,1,286,300.51a240.18,240.18,0,0,1,28.17-37.4,177.28,177.28,0,0,1,34.88-29.24,161.44,161.44,0,0,1,34-16.31A179.29,179.29,0,0,1,423,208.89a236.17,236.17,0,0,1,46.61,0A319.87,319.87,0,0,1,503.41,214a22.54,22.54,0,0,0,26.18-15.58h0a22.54,22.54,0,0,0-17.36-28.5,359.15,359.15,0,0,0-36.09-5.31,284.53,284.53,0,0,0-55.21-.08,226.83,226.83,0,0,0-50,10.63,206.22,206.22,0,0,0-44.71,21.31q-3.51,2.22-6.95,4.61c-2.3,1.58-4.57,3.22-6.81,4.9s-4.46,3.42-6.65,5.21-4.36,3.62-6.5,5.5a257.45,257.45,0,0,0-36.77,40.49,349.51,349.51,0,0,0-28.39,45.91,502.22,502.22,0,0,0-21.59,47.67C206.3,366.52,201,382,196.21,396.5l-5.45,16.73L205.61,422q43.21,25.32,82.52,41.38t75.1,23q35.77,6.88,68.15,4.6a210,210,0,0,0,61.7-13.68q4.95-1.92,9.76-4.08c3.22-1.43,6.4-2.95,9.54-4.53s6.24-3.25,9.31-5,6.1-3.56,9.1-5.45c23.74-15,45.39-34.7,65.61-59.1s39-53.51,57-87.18,35.21-71.95,52.27-114.7,34-90,51.41-141.71l7.48-22.21-22.34-5.78Q671.42,9.09,606,3t-125.23.11A517.08,517.08,0,0,0,366.87,27.7a475.1,475.1,0,0,0-102.15,49"/></g></g></svg>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 pr-1 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-24 md:space-y-0 pt-auto text-lg font-['Epilogue'] font-bold antialiased">
              <li className="text-[#D6D6D6] hover:text-[#ffffff] pl-28">
                <a href="#About">About Us</a>
              </li>
              <li className="text-[#D6D6D6] hover:text-[#ffffff]">
                <a href="#Teams">Our Team</a>
              </li>
              <li className="text-[#D6D6D6] hover:text-[#ffffff]">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
{
  /* <nav className=" w-full hidden sm:flex space-x-6 fixed h-auto p-6 bg-slate-900">
        <div className="flex w-16  border-r-2 px-1 ml-8 pr-4 border-white  text-white flex-start logo"></div>
        <div className="space-x-6 flex font-semibold justify-center items-center ">
          {links.map((data, index) => (
            <div className=" text-white" key={index}>
              {data.name}
            </div>
          ))}
        </div>
      </nav> */
}
{
  /* <nav className="flex sm:hidden">
       <div className="h-auto bg-slate-900">
        <div>
          {links.map((data, index) => (
            <div className=" text-white" key={index}>
              {data.name}
            </div>
          ))}
        </div>
       </div>
      </nav> */
}

{
  /* <nav class="px-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" class="flex items-center">
            <img src="/" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Dropdown{" "}
                  <svg
                    class="ml-1 w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute inset-0 m-0 translate-x-0 translate-y-[1244px] dark:divide-gray-600"
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="bottom"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="/"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}; */
}

export default Navbar;
