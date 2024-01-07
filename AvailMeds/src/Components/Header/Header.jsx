import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full bg-blue-100">
        <div className="w-full lg:w-9/12 border-2 p-4 m-auto rounded-sm flex justify-around items-center bg-blue-100">
          <img src="./logo.svg" className="h-12" alt="" />

          <ul className=" flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 hidden lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-600" : "text-black"} `
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-600" : "text-black"} `
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-600" : "text-black"} `
                }>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="install">
            <button className="p-2 px-4 border mx-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
              Log In
            </button>
            <button className="p-2 border mx-2 rounded-lg bg-blue-500 text-white hover:bg-white hover:text-black transition-all">
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
