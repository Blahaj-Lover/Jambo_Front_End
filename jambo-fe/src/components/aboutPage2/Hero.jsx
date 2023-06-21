import React from "react";
import "./Hero.css";
import banner_2 from "./assets/Necken2.png";
import banner_3 from "./assets/Necken3.png";
import banner_1 from "./assets/Necken1.png";
import banner_4 from "./assets/Necken4.png";
import banner_5 from "./assets/Necken5.png";
import developer from "./assets/Joccish.png";

const Hero = () => {
    return (
        <div className="Hero">
            <div className="flex">
                <div className="flex gap-[80px]">
                    <div className="flex flex-col gap-[17px] justify-center w-[530px]">
                        <text className="britanica text-[40px]"> Necken </text>
                        <text className="text-[18px] font-jakarta"> Necken is a tile based roguelike where you must use the resources the forest provides in order to survive. <br></br> The forest is full of animals, carolean soldiers and mystical creatures, and neither of them wants you around. <br></br> Collect resources, craft gear and explore the woods to reach the water spirit Necken and end his growing influence.</text>

                        <text className="font-jakarta"> DEVELOP BY </text>

                        <div className="flex gap-[10px] font-jakarta">
                            <img src={developer} alt="icon"></img>
                            <text> Eriyowww </text>
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