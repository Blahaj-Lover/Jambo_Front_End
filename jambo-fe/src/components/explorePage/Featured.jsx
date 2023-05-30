import React from "react";
import "./Featured.css";
import game_banner from "./assets/Game Banner.png";
import Developer from "./assets/Developer.png";
import Arrow from "./assets/icon/Arrow";
import Windows from "./assets/icon/Windows";
import Android from "./assets/icon/Android";
import Genre from "./assets/icon/Genre";

const Featured = () => {
  return (
    <div className="Featured flex flex-col gap-[30px]">
      <div className="header flex justify-between">
        <h1 className="text-4xl font-bold"> Featured Games </h1>
        <button className="button_1 flex text-[18px] font-semibold items-center justify-center gap-[5px]">
          {" "}
          View All <Arrow />{" "}
        </button>
      </div>

      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
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
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
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
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
                  {" "}
                  <Arrow />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[12px] outline w-[296px] rounded">
              <img
                src={game_banner}
                alt="banner"
                className="w-[296px] h-[126px]"
              ></img>
              <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <text className="name text-[20px]"> SPIRITWELL </text>

                  <div className="flex gap-[15px]">
                    <text className="bg-[#FDD400] outline pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded">
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
                    <text className="text-[14px]">
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
                    <text className="text-[14px]"> Davidchen </text>
                  </div>
                </div>

                <button className="flex w-[57px] h-[45px] bg-[#FDD400] rounded text-center outline justify-center items-center">
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
