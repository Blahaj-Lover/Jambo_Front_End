import React from "react";
import "./Hero.css";
import people from "./assets/People Illustration.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="tagline">
                <div className="tagline_content">
                    <div className="tagline_text">
                        <h1> Built For Indie Game <br/> Developer </h1>
                        <div className="tagline_desc">
                            <text> A selective platform to create amazing <br/> indie game, create yours now </text>
                        </div>
                    </div>

                    <div className="tagline_button">
                        <button className="tagline_button_1"> Know More About Us <i class="fa-solid fa-magnifying-glass"></i></button>
                        <button className="tagline_button_2"> Get Started  <i class="fa-solid fa-circle-play"></i></button>
                    </div>
                </div>

                <img src={people} alt="people" />
                
            </div>

            <div className="features">
                <div className="feature_1">
                    <h1> Game Jam Events </h1>
                    <text> This platform provide feature to create a <br/> indie game together with friends or <br/> across the community</text>
                </div>

                <div className="feature_2">
                    <h1> Showcase Game </h1>
                    <text> Apart from the game jam feature, Jambo <br/> also provides features for developers to <br/> showcase the games they have made </text>
                </div>
            </div>
        </div>
    );
};

export default Hero;