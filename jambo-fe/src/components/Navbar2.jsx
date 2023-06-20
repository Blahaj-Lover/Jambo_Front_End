import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import Profile from "../components/icon/Profile";
import UploadPage from "../pages/Upload";

function Navbar2() {
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

            <div className="flex gap-[24px]">

                <Link to="UploadPage">
                    <div className="button flex gap-[10px] bg-[#FDD400] w-[194px] h-[44px] rounded outline">
                        <UploadPage />
                        <button className="font-jakarta text-[18px] font-semibold"> Upload Game </button>
                    </div>
                </Link>

                <div className="flex gap-[10px] items-center">
                    <div className="flex items-center justify-center outline rounded-full w-[43px] h-[43px]">
                        <Profile />
                    </div>
                    <text className="font-jakarta text-[18px] font-semibold"> Eriyowww </text>
                </div>

            </div>

        </nav>
    );
};

export default Navbar2;