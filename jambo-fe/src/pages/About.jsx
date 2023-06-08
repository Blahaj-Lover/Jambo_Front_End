import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/aboutPage/Hero";
import Statistic from "../components/aboutPage/Statistic";
import Game from "../components/aboutPage/AboutGame";
import System from "../components/aboutPage/System";
import Download from "../components/aboutPage/Download";
import Upload from "../components/uploadPage/UploadTitle";
import UploadDesc from "../components/uploadPage/UploadDesc";
import GameGenre from "../components/uploadPage/GameGenre";
import Crowdfund from "../components/uploadPage/OpenCrowdfund";

function About()  {
    return (
        <div className="About">
            <div className="w-[1440px] h-[136px]">
                <Nav />
            </div>
            <div className="flex flex-col items-center gap-[50px]">
                <Hero />
                <Statistic />
                <Game />
                <System />
                <Download />
                <Upload />
                <GameGenre />
                <UploadDesc />
                <Crowdfund />
            </div>
            <Footer />
        </div>
    );
};

export default About;