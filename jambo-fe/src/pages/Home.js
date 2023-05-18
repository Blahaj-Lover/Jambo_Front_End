import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";

const Home = () => {
    return (
        <div className="Home">
            <Hero />
            <About />
            <Benefits />
        </div>
    );
};

export default Home;