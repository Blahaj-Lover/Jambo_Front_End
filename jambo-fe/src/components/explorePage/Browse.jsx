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
                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px]">
                    <Action />
                    <div className="font-jakarta font-bold text-center"> Action </div>
                </div>

                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px]">
                    <Puzzle />
                    <div className="font-jakarta font-bold text-center"> Puzzle </div>
                </div>
                
                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center  hover:bg-[#FDD400] gap-[10px]">
                    <Adventure />
                    <div className="font-jakarta font-bold text-center"> Adventure </div>
                </div>
                
                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px]">
                    <RPG />
                    <div className="font-jakarta font-bold  text-center"> RPG </div>
                </div>

                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px]">
                    <Strategy />
                    <div className="font-jakarta font-bold text-center"> Strategy </div>
                </div>

                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px]">
                    <Sports />
                    <div className="font-jakarta font-bold text-center"> Sports </div>
                </div>

                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px]">
                    <Horror />
                    <div className="font-jakarta font-bold text-center"> Horror </div>
                </div>

                <div className="genre flex flex-col outline w-40 h-28 rounded justify-center items-center hover:bg-[#FDD400] gap-[10px]">
                    <More />
                    <div className="font-jakarta font-bold text-center"> More Genre </div>
                </div>
            </div>
            
        </div>
    );
};

export default Browse;