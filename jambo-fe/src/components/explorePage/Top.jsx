import React from "react";
import "./Top.css";
import top2 from "./assets/kucing2.png";
import top1 from "./assets/orang1.png";
import top3 from "./assets/orang3.png";
import GamePublish from "./assets/icon/GamePublish";
import Visitor from "./assets/icon/Visitor";

const Top = () => {
  return (
    <div className="Top flex flex-col gap-[30px]">
      <h1 className="title text-[40px] text-center">
        {" "}
        Top Developer Of The Month{" "}
      </h1>

      <div className="flex gap-[40px]">
        <div className="topBox flex flex-col gap-[20px] bg-[#D0EA57] h-[500px] outline rounded-xl">
          <img src={top2} alt="Top 2"></img>
          <div className="absolute flex place-items-star p-[20px]">
            <h1 className="flex justify-center items-center bg-[#D0EA57] w-[71px] h-[50px] rounded-full outline text-[24px] font-bold text-black font-jakarta">
              #2
            </h1>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <text className="title flex text-[32px]"> Ciawmiaw </text>

            <div className="flex gap-[14px]">
              <div className="flex gap-[7px] items-center justify-center outline w-[162px] h-[38px] rounded-sm">
                <div className="flex gap-[6px]">
                  <GamePublish />
                  <text className="font-jakarta text-[12px] font-bold">
                    {" "}
                    5 Games Published{" "}
                  </text>
                </div>
              </div>

              <div className="flex gap-[7px] items-center justify-center outline w-[162px] h-[38px] rounded-sm">
                <div className="flex gap-[6px]">
                  <Visitor />
                  <text className="font-jakarta text-[12px] font-bold">
                    {" "}
                    1.000.000 Visitors{" "}
                  </text>
                </div>
              </div>
            </div>

            <button className="topBtn w-[338px] h-[42px] bg-[#FDD400] outline rounded-sm">
              View Profile
            </button>

          </div>
        </div>

        <div className="topBox flex flex-col gap-[20px] bg-[#FFD7C3] h-[500px] outline rounded-xl">
          <img src={top1} alt="Top 1"></img>
          <div className="absolute flex place-items-star p-[20px]">
            <h1 className="flex justify-center items-center bg-[#FFD7C3] w-[71px] h-[50px] rounded-full outline text-[24px] font-bold text-black font-jakarta">
              #1
            </h1>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <text className="title flex text-[32px]"> Leeonlee Gurl </text>

            <div className="flex gap-[14px]">
              <div className="flex gap-[7px] items-center justify-center outline w-[162px] h-[38px] rounded-sm">
                <div className="flex gap-[6px]">
                  <GamePublish />
                  <text className="font-jakarta text-[12px] font-bold">
                    {" "}
                    8 Games Published{" "}
                  </text>
                </div>
              </div>

              <div className="flex gap-[7px] items-center justify-center outline w-[162px] h-[38px] rounded-sm">
                <div className="flex gap-[6px]">
                  <Visitor />
                  <text className="font-jakarta text-[12px] font-bold">
                    {" "}
                    1.500.000 Visitors{" "}
                  </text>
                </div>
              </div>
            </div>

            <button className="topBtn w-[338px] h-[42px] bg-[#FDD400] outline rounded-sm">
              View Profile
            </button>

          </div>
        </div>

        <div className="topBox flex flex-col gap-[20px] bg-[#32CBFC] h-[500px] outline rounded-xl">
          <img src={top3} alt="Top 3"></img>
          <div className="absolute flex place-items-star p-[20px]">
            <h1 className="flex justify-center items-center bg-[#32CBFC] w-[71px] h-[50px] rounded-full outline text-[24px] font-bold text-black font-jakarta">
              #3
            </h1>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <text className="title flex text-[32px]"> KeeMuck </text>

            <div className="flex gap-[14px]">
              <div className="flex gap-[7px] items-center justify-center outline w-[162px] h-[38px] rounded-sm">
                <div className="flex gap-[6px]">
                  <GamePublish />
                  <text className="font-jakarta text-[12px] font-bold">
                    {" "}
                    4 Games Published{" "}
                  </text>
                </div>
              </div>

              <div className="flex gap-[7px] items-center justify-center outline w-[162px] h-[38px] rounded-sm">
                <div className="flex gap-[6px]">
                  <Visitor />
                  <text className="font-jakarta text-[12px] font-bold">
                    {" "}
                    800.000 Visitors{" "}
                  </text>
                </div>
              </div>
            </div>

            <button className="topBtn w-[338px] h-[42px] bg-[#FDD400] outline rounded-sm">
              View Profile
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Top;
