import React from "react";
import "./About.css";
import picture from "../assets/Discovering Jambo.png";

const About = () => {
    return (
        <div className="About">
            <div className="contents">
                <img src={picture} alt="picture" />

                <div className="details">
                    <h1> Discovering Jambo </h1>
                    <text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br/> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat.
                    </text>

                    <button> Learn More </button>

                    <div className="others">

                        <div className="others_1">
                            <div className="box_1"></div>
                            <div className="text_1">
                                <h1> 100+ </h1>
                                <text> Lorem ipsum</text>
                            </div>

                        </div>

                        <div className="others_2">
                            <div className="box_2"></div>
                                <div className="text_2">
                                    <h1> 100+ </h1>
                                    <text> Lorem ipsum</text>
                                </div>
                        </div>

                        <div className="others_3">
                            <div className="box_3"></div>
                                <div className="text_3">
                                    <h1> 100+ </h1>
                                    <text> Lorem ipsum</text>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;