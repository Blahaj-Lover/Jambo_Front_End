import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-5 shadow md:flex md:items-center md:justify-between">
      <div>
        <Link to="/">
          <span className="text-3xl font-bold cursor-pointer">Jambo</span>
        </Link>
      </div>

      <ul className="md:flex md:items-center md:justify-center font-jakarta">
        <li className="mx-4">
          <a
            href="/"
            className="text-xl hover:text-[#FDD400] duration-500 hover:underline hover:underline-offset-8"
          >
            Home
          </a>
        </li>
        <li className="mx-4">
          <a
            href="/Explore"
            className="text-xl hover:text-[#32CBFC] duration-500 hover:underline hover:underline-offset-8"
          >
            Explore
          </a>
        </li>
        <li className="mx-4">
          <a
            href="/About"
            className="text-xl hover:text-[#FFF402] duration-500 hover:underline hover:underline-offset-8"
          >
            About
          </a>
        </li>
      </ul>

      <div className="md:flex gap-4">
        <Link to="/sign-in">
          <button className="text-xl black outline-[black] bg-black text-[white] font-jakarta px-8 py-2.5 hover:bg-[#D0EA57] hover:text-black hover:font-semibold hover:outline outline outline  outline- rounded-md">
            Sign in
          </button>
        </Link>

        <Link to="/sign-up">
          <button className="text-xl outline text-black font-jakarta px-8 py-2.5 hover:bg-[#D0EA57] duration-500 rounded-md">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
