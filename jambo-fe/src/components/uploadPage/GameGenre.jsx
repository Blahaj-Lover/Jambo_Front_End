import React, { useState } from "react";
import "./GameGenre.css";
import Action from "./assets/icon/Action";
import Puzzle from "./assets/icon/Puzzle";
import Adventure from "./assets/icon/Adventure";
import RPG from "./assets/icon/RPG";
import Strategy from "./assets/icon/Strategy";
import Sports from "./assets/icon/Sports";
import Horror from "./assets/icon/Horror";

const GameGenre = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreSelect = (genre) => {
        if (selectedGenres.includes(genre)) {
        setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
        setSelectedGenres([...selectedGenres, genre]);
        }
    };

  return (
    <div className="GameGenre flex flex-col">
      <h1 className="text-xl pb-[15px]">Game Genre</h1>

      <div
        className="gameGenreOption flex justify-between cursor-pointer"
        id="genreOption"
      >
        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("Action")}
        >
          <Action />
          <div className="font-jakarta font-bold text-center"> Action </div>
        </button>

        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("Puzzle")}
        >
          <Puzzle />
          <div className="font-jakarta font-bold text-center"> Puzzle </div>
        </button>

        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("Adventure")}
        >
          <Adventure />
          <div className="font-jakarta font-bold text-center"> Adventure </div>
        </button>

        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("RPG")}
        >
          <RPG />
          <div className="font-jakarta font-bold text-center"> RPG </div>
        </button>

        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("Strategy")}
        >
          <Strategy />
          <div className="font-jakarta font-bold text-center"> Strategy </div>
        </button>

        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("Sports")}
        >
          <Sports />
          <div className="font-jakarta font-bold text-center"> Sports </div>
        </button>

        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("Horror")}
        >
          <Horror />
          <div className="font-jakarta font-bold text-center"> Horror </div>
        </button>

        <button
          className="genre_box flex outline w-[123px] h-[53px] rounded justify-center items-center gap-[5px] hover:bg-[#FDD400] focus:bg-[#FDD400]"
          onClick={() => handleGenreSelect("Other")}
        >
          <div className="font-jakarta font-bold text-center"> Other </div>
        </button>
      </div>
    </div>
  );
};

export default GameGenre;
