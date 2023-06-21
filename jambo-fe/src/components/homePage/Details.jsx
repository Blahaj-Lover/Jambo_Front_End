import React from "react";
import "./Details.css";
import Picture from "./assets/Discover.png";
import Showcase from "./assets/icon/Showcase";
import Crowdfunding from "./assets/icon/Crowdfunding";
import Team from "./assets/icon/Team";

const About = React.forwardRef((props, ref) => {
    return (
       <div className="About">
        <div className="flex  gap-[100px] items-center justify-center">
            <img src={Picture} alt="picture"></img>

            <div className="title flex flex-col gap-[20px]">
                <h1 className="text-[50px]"> Discovering Jambo </h1>

                <p className="text-[18px] font-jakarta"> Jambo is a passionate and innovative platform dedicated to empowering <br></br>
                game developers worldwide. Our mission is to provide a vibrant community<br></br>
                where developers can showcase their creations, collaborate on projects, <br></br>
                and receive valuable feedback. </p>
 
                <text className="font-jakarta text-[24px] font-semibold"> Featuring: </text>

                <div className="flex gap-[50px]">
                    <div className="flex gap-[10px] text-[20px] items-center">
                        <div className="flex w-[50px] h-[50px] items-center justify-center outline rounded">
                            <Showcase />
                        </div>
                        <text> Showcase <br></br> Your Project </text>
                    </div>

                    <div className="flex gap-[10px] text-[20px] items-center">
                        <div className="flex w-[50px] h-[50px] items-center justify-center outline rounded">
                            <Crowdfunding />
                        </div>
                        <text> Open <br></br> Crowdfunding </text>
                    </div>

                    <div className="flex gap-[10px] text-[20px] items-center">
                        <div className="flex w-[50px] h-[50px] items-center justify-center outline rounded">
                            <Team />
                        </div>
                        <text> Join <br></br> Game Jam </text>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
});

export default About;