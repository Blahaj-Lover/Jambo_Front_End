import React from "react";
import "./New.css";
import game_banner1 from "./assets/new_banner1.png";
import game_banner2 from "./assets/new_banner2.png";
import game_banner3 from "./assets/new_banner3.png";
import game_banner4 from "./assets/new_banner4.png";
import game_banner5 from "./assets/new_banner5.png";
import game_banner6 from "./assets/new_banner6.png";
import game_banner7 from "./assets/new_banner7.png";
import game_banner8 from "./assets/new_banner8.png";
import Developer1 from "./assets/new_developer1.png";
import Developer2 from "./assets/new_developer2.png";
import Developer3 from "./assets/new_developer3.png";
import Developer4 from "./assets/new_developer4.png";
import Developer5 from "./assets/new_developer5.png";
import Developer6 from "./assets/new_developer6.png";
import Developer7 from "./assets/new_developer7.png";
import Developer8 from "./assets/new_developer8.png";
import Arrow from "./assets/icon/Arrow";
import Windows from "./assets/icon/Windows";
import Android from "./assets/icon/Android";
import Genre from "./assets/icon/Genre";

const New = () => {
  return (
    <div className="New">
      <div className="Featured flex flex-col gap-[30px]">
        <div className="header flex justify-between">
          <h1 className="text-4xl font-bold"> New Uploaded Games </h1>
          <button className="button_1 flex text-[20px] font-semibold items-center justify-center gap-[5px] font-jakarta">
            {" "}
            View All <Arrow />{" "}
          </button>
        </div>

        <div className="flex gap-[17px]">
          <div className="flex flex-col gap-[17px]">
            <div className="flex gap-[17px]">
              <div className="banner flex flex-col gap-[12px] outline w-[296px] rounded-md">
                <img
                  src={game_banner1}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> Vessels of Decay </text>

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
                        src={Developer1}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        SimonJakobsson{" "}
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
                  src={game_banner2}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> Zefyr - A Thief's Melody </text>

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
                        Action, Adventure{" "}
                      </text>
                    </div>

                    <div className="flex gap-[10px]">
                      <img
                        src={Developer2}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        OneiricWorlds{" "}
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
                  src={game_banner3}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> illagus </text>

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
                        Adventure{" "}
                      </text>
                    </div>

                    <div className="flex gap-[10px]">
                      <img
                        src={Developer3}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        illagus{" "}
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
                  src={game_banner4}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> Rainswept </text>

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
                        Puzzle{" "}
                      </text>
                    </div>

                    <div className="flex gap-[10px]">
                      <img
                        src={Developer4}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        FrostwoodInteractive{" "}
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
                  src={game_banner5}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> Zefyr - Thirteen & Half Cats </text>

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
                        Puzzle{" "}
                      </text>
                    </div>

                    <div className="flex gap-[10px]">
                      <img
                        src={Developer5}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        Nekomatata{" "}
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
                  src={game_banner6}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> Takume </text>

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
                        Action, Adventure{" "}
                      </text>
                    </div>

                    <div className="flex gap-[10px]">
                      <img
                        src={Developer6}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        talecrafter{" "}
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
                  src={game_banner7}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> Rabbit Story </text>

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
                        Puzzle{" "}
                      </text>
                    </div>

                    <div className="flex gap-[10px]">
                      <img
                        src={Developer7}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        slava_bushuev{" "}
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
                  src={game_banner8}
                  alt="banner"
                  className="w-[296px] h-[126px]"
                ></img>
                <div className="flex items-center gap-[30px] pr-[10px] pl-[10px] pb-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <text className="name text-[20px]"> The Librarian </text>

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
                        src={Developer8}
                        alt="icon"
                        className="w-[15px] h-[15px]"
                      ></img>
                      <text className="text-[14px] font-jakarta">
                        {" "}
                        davidchen{" "}
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
    </div>
  );
};

export default New;
