import React from "react";
import "./Details.css";
import picture from "./assets/Discovering Jambo.png";
import Showcase from "./assets/icon/Showcase";
import Crowdfunding from "./assets/icon/Crowdfunding";
import Team from "./assets/icon/Team";

const About = React.forwardRef((props, ref) => {
    return (
        <div className="About">
            <div className="contents">
                <img src={picture} alt="picture" />

                <div className="flex flex-col">
                    <h1> Discovering Jambo </h1>
                    <text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br/> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat.
                    </text>

                    <div className="flex gap-[100px] pt-[20px]">

                            <div className="flex gap-[10px]">
                                <div className="flex items-center justify-center outline rounded w-[50px] h-[50px]">
                                    <Showcase />
                                </div>
                                <text className="text-[50px]"> Showcase <br></br> Your Project </text>
                            </div>

                            <div className="flex gap-[10px]">
                                <div className="flex items-center justify-center outline rounded w-[50px] h-[50px]">
                                    <Crowdfunding />
                                </div>
                                <text className=""> Open <br></br> Crowdfunding </text>
                            </div>

                            <div className="flex gap-[10px]">
                                <div className="flex items-center justify-center outline rounded w-[50px] h-[50px]">
                                    <Team />
                                </div>
                                <text className=""> Join <br></br> Game Jam </text>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );
});

export default About;