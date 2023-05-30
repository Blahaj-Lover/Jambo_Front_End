import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-5 md:flex md:items-center md:justify-around">
      <div>
        <Link to="/">
          <span className="text-3xl font-bold cursor-pointer">Jambo</span>
        </Link>
      </div>

      <ul className="md:flex md:items-center md:justify-center font-jakarta gap-10">
        <li className="mx-4 menu_1">
          <a
            href="/"
            className="item_1"
          >
            Home
          </a>
        </li>
        <li className="mx-4 menu_2">
          <a
            href="/Explore"
            className="item_2"
          >
            Explore
          </a>
        </li>
        <li className="mx-4 menu_3">
          <a
            href="/About"
            className="item_3"
          >
            About
          </a>
        </li>
      </ul>

      <div className="md:flex gap-4">
        <Link to="/sign-in">
          <button className="link_1">
            Sign in
          </button>
        </Link>

        <Link to="/sign-up">
          <button className="link_2">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
