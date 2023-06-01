import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nav2 = () => {
  return (
    <nav className="p-5 md:flex md:items-center md:justify-between">
      <div>
        <Link to="/">
          <span className="text-3xl font-bold cursor-pointer">Jambo</span>
        </Link>
      </div>

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

export default Nav2;