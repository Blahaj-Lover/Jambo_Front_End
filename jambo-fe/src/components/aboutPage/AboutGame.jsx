import React from "react";
import "./AboutGame.css";
import banner_1 from "./assets/Banner_1.png";
import banner_2 from "./assets/Banner_2.png";


const AboutGame = () => {
    return (
        <div className="AboutGame">
            <div className="flex flex-col gap-[34px]">
                <h1 className="britanica text-[35px]"> About This Game </h1>

                <text className="text-[18px] font-jakarta"> Play as a runaway lost child who stumbles across a strange well and falls in...</text>

                <img src={banner_1} alt="Banner 1"></img>

                <text className="text-[18px] font-jakarta"> Features a story rich and character driven experience with a focus on humour and small details. </text>

                <img src={banner_2} alt="Banner 2"></img>
            </div>
        </div>
    );
}

export default AboutGame