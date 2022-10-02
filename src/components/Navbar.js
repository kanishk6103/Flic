import React from "react";

const links = [
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "Our Team",
    link: "#",
    sublinks: "",
  },
  {
    name: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="flex space-x-6  h-auto p-6 bg-slate-900">
        <div className="flex w-16  border-r-2 px-1 ml-8 pr-4 border-white  text-white flex-start logo">
          <img src="./logoflic.png" className="mr-3" alt="logo" />
        </div>
        <div className="space-x-6 flex font-semibold justify-center items-center ">
          {links.map((data, index) => (
            <div className=" text-white" key={index}>
              {data.name}
            </div>
            
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
