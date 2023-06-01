import React from "react";
import "./Top.css";
import top2 from "./assets/kucing2.png"
import top1 from "./assets/orang1.png"
import top3 from "./assets/orang3.png"

const Top = () => {
    return (
        <div className="Top flex flex-col">
            <h1 className="title text-4xl font-extrabold text-center"> Top Developer Of The Month </h1>
                <div className="top flex justify-center gap-[40px] pt-[40px]">
                    <div className="flex flex-col">
                        <img className="foto" src={top2} alt="top2" />
                        <div className="absolute flex place-items-star p-[20px] text-center">
                            <h1 className="bg-[#D0EA57] py-[5px] px-[15px] rounded-full outline text-[24px] font-bold text-black font-jakarta">#2</h1>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <img className="foto" src={top1} alt="top1" />
                        <div className="absolute flex place-items-star p-[20px] text-center">
                            <h1 className="bg-[#FFD7C3] py-[5px] px-[15px] rounded-full outline text-[24px] font-bold text-black font-jakarta">#1</h1>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <img className="foto" src={top3} alt="top3" />
                        <div className="absolute flex place-items-star p-[20px] text-center">
                            <h1 className="bg-[#32CBFC] py-[5px] px-[15px] rounded-full outline text-[24px] font-bold text-black font-jakarta">#3</h1>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Top;