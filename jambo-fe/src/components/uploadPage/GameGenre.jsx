import React from "react";
import "./GameGenre.css";
import Action from "./assets/icon/Action";
import Puzzle from "./assets/icon/Puzzle";
import Adventure from "./assets/icon/Adventure";
import RPG from "./assets/icon/RPG";
import Strategy from "./assets/icon/Strategy";
import Sports from "./assets/icon/Sports";
import Horror from "./assets/icon/Horror";

const GameGenre = () => {
    return(
        <div className="GameGenre flex flex-col">
            <h1 className="text-xl pb-[15px]">Game Genre</h1>
            
            <div className="gameGenreOption flex justify-between cursor-pointer">
                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <Action />
                    <div className="font-jakarta font-bold text-center"> Action </div>
                </div>

                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <Puzzle />
                    <div className="font-jakarta font-bold text-center"> Puzzle </div>
                </div>

                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <Adventure />
                    <div className="font-jakarta font-bold text-center"> Adventure </div>
                </div>

                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <RPG />
                    <div className="font-jakarta font-bold text-center"> RPG </div>
                </div>

                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <Strategy />
                    <div className="font-jakarta font-bold text-center"> Strategy </div>
                </div>

                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <Sports />
                    <div className="font-jakarta font-bold text-center"> Sports </div>
                </div>

                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <Horror />
                    <div className="font-jakarta font-bold text-center"> Horror </div>
                </div>

                <div className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[10px] hover:bg-[#FDD400]">
                    <div className="font-jakarta font-bold text-center"> Other </div>
                </div>
            </div>
        </div>
    );
};

export default GameGenre;