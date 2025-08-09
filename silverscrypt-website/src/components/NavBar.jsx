import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
const NavBar = () => {
  return (
    <nav className="bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <img src={logoSvg} alt="Logo" className="h-8 w-auto" />
          <span className="font-semibold text-2xl">Silverscrypt</span>
        </span>
      </Link>

      <div className="flex items-center gap-5 text-black">
        <Link
          to="/"
          className="py-1 px-3 text-lg font-light
         text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 transform hover:scale-110"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="py-1 px-3 text-lg font-light
         text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 transform hover:scale-110"
        >
          About
        </Link>

        <Link
          to="/work"
          className="py-1 px-3 text-lg font-light
         text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 transform hover:scale-110"
        >
          Work
        </Link>

        <Link
          to="/contact"
          className="py-1 px-3 text-lg font-light
         text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 transform hover:scale-110"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
