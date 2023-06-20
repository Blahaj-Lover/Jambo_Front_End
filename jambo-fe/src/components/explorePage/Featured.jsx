import React from "react";
import "./Featured.css";
import game_banner from "./assets/Game Banner.png";
import Developer from "./assets/Developer.png";
import Arrow from "./assets/icon/Arrow";
import Windows from "./assets/icon/Windows";
import Android from "./assets/icon/Android";
import Genre from "./assets/icon/Genre";

//backend {
  import axios from "axios";
  import { useState } from "react";
  import { useEffect } from "react";
//backend }

const Featured = () => {

  //backend {
  const [game, setGame] = useState([]);
  
  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const tag = 'Featured'
        const res = await axios.get("http://localhost:8800/game", {params:{tag}});
        setGame(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllGames();
  }, []);

  console.log(game[0].GaCover)
  //backend }

  return (
    <div className="Featured flex flex-col gap-[30px]">
      <div className="header flex justify-between">
        <h1 className="text-4xl font-bold"> Featured Games </h1>
        <button className="button_1 flex bg-[#FDD400] w-[121px] h-[36px] rounded text-[20px] font-semibold items-center justify-center gap-[5px] font-jakarta">
          {" "}
          View All <Arrow />{" "}
        </button>
      </div>

      <div className="flex gap-[17px]">
        {game.map((g) => (
          <div className="flex flex-col gap-[17px]" key={g.GaID}>
            <div className="flex gap-[17px]">
              <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
                <img
                  src={require(g.GaCover)}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> {g.GaName} </text>

                    <div className="flex gap-[15px]">
                      <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                        {" "}
                        {g.GaPrice}{" "}
                      </text>

                      <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                        <Windows />
                        <Android />
                      </div>
                    </div>

                    <div className="flex gap-[10px]">
                      <Genre />
                      <text className="text-[13px] font-jakarta">
                        {" "}
                        {g.GaCtgy}{" "}
                      </text>
                    </div>

                    <div className="flex gap-[10px]">
                      <img
                        src={Developer}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        {g.GaDev}{" "}
                      </text>
                    </div>
                  </div>

                  <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                    {" "}
                    <Arrow />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[17px]">

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded font-jakarta">
                      {" "}
                      Free to Play{" "}
                    </text>

                    <div className="flex gap-[5px] bg-[#FDD400] outline p-[5px] rounded items-center">
                      <Windows />
                      <Android />
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <Genre />
                    <text className="text-[13px] font-jakarta">
                      {" "}
                      Action, Adventure, Puzzle{" "}
                    </text>
                  </div>

                  <div className="flex gap-[10px]">
                    <img
                      src={Developer}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    ></img>
                    <text className="text-[14px] font-jakarta">
                      {" "}
                      Davidchen{" "}
                    </text>
                  </div>
                </div>

                <button className="button_2 flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
