import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/homePage/Hero";
import Details from "../components/homePage/Details";
import Benefits from "../components/homePage/Benefits";
import FAQ from "../components/homePage/FAQ";
import Community from "../components/homePage/Community";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="w-[1440px] h-[136px]">
        <Nav />
      </div>
      <div className="flex flex-col items-center">
        <Hero />
        <Details />
        <Benefits />
        <FAQ />
        <Community />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
