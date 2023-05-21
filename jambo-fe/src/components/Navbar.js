import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/" className="logo">
                Logo
            </Link>

            <ul className="menu">
                <Link to="/">
                    <li className="menu_1">
                        <a className="item_1"> Home </a>
                    </li>
                </Link>

                <li className="menu_2">
                    <Link to="/Explore" className="item_2">
                        Explore
                    </Link>
                </li>

                <li className="menu_3">
                    <Link to="/About" className="item_3">
                        About
                    </Link>
                </li>

            </ul>

            <div className="button">
                <Link to="/Sign-in" className="link_1"> Sign in </Link>
                <Link to="/Sign-up" className="link_2"> Sign up </Link>
            </div>
        </nav>
    );
};

export default Navbar;