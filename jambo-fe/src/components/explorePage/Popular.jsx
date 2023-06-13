import React from "react";
import "./Popular.css";
import popular_1 from "./assets/Popular Banner (1).png";
import popular_2 from "./assets/Popular Banner (2).png";
import popular_3 from "./assets/Popular Banner (3).png";
import popular_4 from "./assets/Popular Banner (4).png";

const Popular = () => {
  return (
    <div className="Popular">
      <div class="flex flex-col gap-10">
        <div class="header flex justify-between">
          <h1 class="text-[40px]"> Popular Games This Week </h1>
          <div className=""> Search Games / Showcase </div>
        </div>

        <div class=" image flex gap-10">
          <div class="relative w-[900px]">
            <img src={popular_1} alt="Popular 1" className="cursor-pointer"></img>
          </div>

          <div className="flex flex-col gap-10 cursor-pointer">
            <img src={popular_2} alt="Popular 2"></img>
            <img src={popular_3} alt="Popular 3"></img>
            <img src={popular_4} alt="Popular 4"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
