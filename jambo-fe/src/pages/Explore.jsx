import React from "react";
import Nav from "../components/Nav";
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
        <Nav />
      </div>
      <div className="flex flex-col gap-20 items-center">
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
