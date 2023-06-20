import React from "react";
import "./LoginNav.css";
import { Link } from "react-router-dom";
import UploadIcon from "./icon/Upload";
import ProfileIcon from "./icon/Profile";

const LoginNav = () => {
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
            href=""
            className="item_3"
          >
            About
          </a>
        </li>
      </ul>

      <div className="flex gap-[30px]">

        <Link to="/UploadPage">
            <button className="uploadBtn flex gap-[5px] bg-[#FDD400] w-[140px] h-[42px] items-center justify-center outline rounded">
            <UploadIcon />
            <text className="font-jakarta text-[14px] font-semibold"> Upload Game </text>
        </button>
        </Link>

        <div className="flex gap-[10px] items-center">
            <div className="flex outline rounded-full w-[43px] h-[43px] items-center justify-center">
                <ProfileIcon />
            </div>
            <text className="font-jakarta text-[18px] font-semibold"> Eriyowww </text>
        </div>

      </div>


    </nav>
  );
};

export default LoginNav;
