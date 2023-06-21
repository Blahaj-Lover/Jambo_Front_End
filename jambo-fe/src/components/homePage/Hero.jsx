import React, { useRef } from "react";
import "./Hero.css";
import people from "./assets/People Illustration.png";
import { Link } from "react-router-dom";
import SearchIcon from "./assets/icon/Search";

const Hero = () => {

    const detailsRef = useRef(null);

    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

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
                        <button className="tag_button flex bg-[#F0F0F0] outline w-[262px] h-[48px] rounded-[10px] text-[20px] items-center justify-center gap-[5px]" onClick={scrollToDetails}>
                            Know More About Us
                            <SearchIcon />
                        </button>
                        <Link to="/Explore">
                            <button className="tag_button flex bg-[#CDEE25] outline w-[176px] h-[48px] rounded-[10px] text-[20px] items-center justify-center gap-[5px]"> Get Started  <i class="fa-solid fa-circle-play"></i></button>
                        </Link>
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

            <details ref={detailsRef} className="opacity-0"/>
        </div>
    );
};

export default Hero;