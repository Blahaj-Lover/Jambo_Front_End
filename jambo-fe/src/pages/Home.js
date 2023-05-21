import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/homePage/Hero";
import Details from "../components/homePage/Details";
import Benefits from "../components/homePage/Benefits";
import FAQ from "../components/homePage/FAQ";
import Community from "../components/homePage/Community";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <Details />
            <Benefits />
            <FAQ />
            <Community />
            <Footer />
        </div>
    );
}

export default Home;