import React from "react";
import LoginNav from "../components/LoginNav";
import Footer from "../components/Footer";
import Hero from "../components/aboutPage/Hero";
import Statistic from "../components/aboutPage/Statistic";
import Game from "../components/aboutPage/AboutGame";
import System from "../components/aboutPage/System";
import Download from "../components/aboutPage/Download";

function About()  {
    return (
        <div className="About">
            <div className="w-[1440px] h-[136px]">
                <LoginNav />
            </div>
            <div className="flex flex-col items-center gap-[50px] pb-[50px]">
                <Hero />
                <Statistic />
                <Game />
                <System />
                <Download />
            </div>
            <Footer />
        </div>
    );
};

export default About;