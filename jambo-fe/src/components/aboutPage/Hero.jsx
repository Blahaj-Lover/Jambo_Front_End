import React from "react";
import "./Hero.css";
import banner_1 from "./assets/Hero_image_1.png";
import banner_2 from "./assets/Hero_image_2.png";
import banner_3 from "./assets/Hero_image_3.png";
import banner_4 from "./assets/Hero_image_4.png";
import banner_5 from "./assets/Hero_image_5.png";
import developer from "./assets/Developer.png";

const Hero = () => {
    return (
        <div className="Hero">
            <div className="flex">
                <div className="flex gap-[80px]">
                    <div className="flex flex-col gap-[17px] justify-center">
                        <text className="britanica text-[40px]"> SPIRIT WELL</text>
                        <text className="text-[18px] font-jakarta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolore magna <br></br> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br></br> ullamco laboris nisi ut aliquip ex ea commodo consequat.</text>

                        <text className="font-jakarta"> DEVELOP BY </text>

                        <div className="flex gap-[10px] font-jakarta">
                            <img src={developer} alt="icon"></img>
                            <text> Davidchen </text>
                        </div>

                        <button className="Button_1 rounded bg-[#FDD400] outline w-[150px] h-[40px] text-[20px]"> Play Now </button>

                    </div>

                    <div className="flex flex-col items-center gap-[15px]">
                        <img src={banner_1} alt="banner" className="w-[530px] h-[380px]"></img>
                        <div className="flex gap-[15px]">
                            <img src={banner_2}></img>
                            <img src={banner_3}></img>
                            <img src={banner_4}></img>
                            <img src={banner_5}></img>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Hero