import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import Community from "../components/Community";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <About />
            <Benefits />
            <FAQ />
            <Community />
            <Footer />
        </div>
    );
};

export default Home;