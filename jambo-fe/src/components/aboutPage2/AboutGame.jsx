import React from "react";
import "./AboutGame.css";
import banner_1 from "./assets/Banner1.png";
import banner_2 from "./assets/Banner2.png";
import banner_3 from "./assets/Banner3.png";


const AboutGame = () => {
    return (
        <div className="AboutGame2">
            <div className="flex flex-col gap-[34px]">
                <h1 className="britanica text-[35px]"> About This Game </h1>

                <text className="text-[18px] font-jakarta"> Survival: The game design revolves around the player's ability to gather resources, craft items, and survive in a hostile forest environment. It emphasizes the importance of resource management, strategic decision-making, and adapting to challenging situations. </text>

                <img src={banner_1} alt="Banner 1"></img>

                <text className="text-[18px] font-jakarta"> Exploration: The game encourages players to explore the procedural forests, discovering new areas, encountering different creatures, and uncovering hidden secrets. Exploration is a key component of the gameplay, providing a sense of adventure and discovery. </text>

                <img src={banner_2} alt="Banner 2"></img>

                <text className="text-[18px] font-jakarta"> Progression: The game incorporates elements of progression by offering unlockable characters and trinkets. As players overcome challenges and defeat enemies, they can unlock new playable characters with unique abilities or acquire powerful trinkets that enhance their abilities </text>

                <img src={banner_3} alt="Banner 3"></img>
            </div>
        </div>
    );
}

export default AboutGame