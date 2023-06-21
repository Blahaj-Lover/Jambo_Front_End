import React from "react";
import "./AboutGame.css";
import banner_1 from "./assets/Banner_1.png";
import banner_2 from "./assets/Banner_2.png";

const AboutGame = () => {
  return (
    <div className="AboutGame">
      <div className="flex flex-col gap-[34px]">
        <h1 className="britanica text-[35px]"> About This Game </h1>

        <text className="text-[18px] font-jakarta">
          {" "}
          Play as a meek, lost child who runs away from home and falls into a
          strange well... Now, he must embark on a journey through the Spirit
          World to find his way home. Become part of a found family as you
          travel through the SPIRITWELL and discover its many secrets...{" "}
        </text>

        <img src={banner_1} alt="Banner 1"></img>

        <text className="text-[18px] font-jakarta">
          {" "}
          Features <br></br>
          A charming cast of characters to befriend <br></br>
          A story-rich world to explore and get lost in <br></br>
          Beautiful and expressive hand-crafted pixel art and animation <br></br> 
          Tactile, nonviolent mini-games designed around the characters and story <br></br>
          A spirited, wholly original soundtrack by Danna Yun <br></br>
          You save the game by talking to a snail. <br></br>
          There is also a frog.{" "}
        </text>

        <img src={banner_2} alt="Banner 2"></img>
      </div>
    </div>
  );
};

export default AboutGame;
