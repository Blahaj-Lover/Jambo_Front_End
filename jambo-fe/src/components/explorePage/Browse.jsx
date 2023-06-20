import React from "react";
import "./Browse.css";
import Action from "./assets/icon/Action";
import Puzzle from "./assets/icon/Puzzle";
import Adventure from "./assets/icon/Adventure";
import RPG from "./assets/icon/RPG";
import Strategy from "./assets/icon/Strategy";
import Sports from "./assets/icon/Sports";
import Horror from "./assets/icon/Horror";
import More from "./assets/icon/More";

const Browse = () => {
    return (
        <div className="Browse flex flex-col gap-[30px]">
            <h1 className="britanica text-[40px]"> Browse Categories </h1>

            <div className="flex cursor-pointer gap-[21px]">
                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <Action />
                    <div className="font-jakarta font-bold text-center"> Puzzle </div>
                </button>

                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <Puzzle />
                    <div className="font-jakarta font-bold text-center"> Puzzle </div>
                </button>
                
                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center  hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <Adventure />
                    <div className="font-jakarta font-bold text-center"> Adventure </div>
                </button>
                
                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <RPG />
                    <div className="font-jakarta font-bold  text-center"> RPG </div>
                </button>

                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <Strategy />
                    <div className="font-jakarta font-bold text-center"> Strategy </div>
                </button>

                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <Sports />
                    <div className="font-jakarta font-bold text-center"> Sports </div>
                </button>

                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <Horror />
                    <div className="font-jakarta font-bold text-center"> Horror </div>
                </button>

                <button className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px] focus:bg-[#FDD400]">
                    <More />
                    <div className="font-jakarta font-bold text-center"> More Genre </div>
                </button>
            </div>
            
        </div>
    );
};

export default Browse;