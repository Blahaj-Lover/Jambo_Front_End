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
        <div className="Browse flex flex-col gap-10">
            <h1 className="text-[40px]"> Browse Categories </h1>

            <div className="genre flex cursor-pointer">
                <div className="genre_1 flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <Action />
                    <div className="font-jakarta font-bold text-center"> Action </div>
                </div>

                <div className="genre_2 flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <Puzzle />
                    <div className="font-jakarta font-bold text-center"> Puzzle </div>
                </div>
                
                <div className="genre_3 flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <Adventure />
                    <div className="font-jakarta font-bold text-center"> Adventure </div>
                </div>
                
                <div className="genre_4 flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <RPG />
                    <div className="font-jakarta font-bold  text-center"> RPG </div>
                </div>

                <div className="genre_5 flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <Strategy />
                    <div className="font-jakarta font-bold text-center"> Strategy </div>
                </div>

                <div className="genre_6 flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <Sports />
                    <div className="font-jakarta font-bold text-center"> Sports </div>
                </div>

                <div className="genre_7 flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <Horror />
                    <div className="font-jakarta font-bold text-center"> Horror </div>
                </div>

                <div className="more flex flex-col outline w-40 h-28 rounded justify-center items-center gap-[15px] hover:bg-[#FDD400]">
                    <More />
                    <div className="font-jakarta font-bold text-center"> More Genre </div>
                </div>
            </div>
            
        </div>
    );
};

export default Browse;