import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <a href="#" className="logo"> logo </a>

            <ul className="menu">
                <li className="menu_1"><a href="" className="item_1"> Home </a></li>
                <li className="menu_2"><a href="" className="item_2"> Explore </a></li>
                <li className="menu_3"><a href="" className="item_3"> About </a></li>
            </ul>

            <div className="button">
                <button className="sign_in"> Sign in </button>
                <button className="sign_up"> Sign up </button>
            </div>
        </nav>
    );
};

export default Navbar;