import React from "react";
import Navbar2 from "../components/Navbar2";
import Popular from "../components/explorePage/Popular";
import Browse from "../components/explorePage/Browse";
import Featured from "../components/explorePage/Featured";
import New from "../components/explorePage/New";
import More from "../components/explorePage/More";
import Top from "../components/explorePage/Top";
import Footer from "../components/Footer";

const Explore = () => {
  return (
    <div className="">
      <div className="w-[1440px] h-[136px]">
        <Navbar2 />
      </div>
      <div className="flex flex-col gap-[50px] items-center">
        <Popular />
        <Browse />
        <Featured />
        <New />
        <More />
        <Top />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
