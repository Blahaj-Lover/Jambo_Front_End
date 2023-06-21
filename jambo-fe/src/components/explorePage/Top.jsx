import React from "react";
import "./Top.css";
import top2 from "./assets/kucing2.png"
import top1 from "./assets/orang1.png"
import top3 from "./assets/orang3.png"
import GamePublish from "./assets/icon/GamePublish";
import Visitor from "./assets/icon/Visitor";

const Top = () => {
    return (
        <div className="Top flex flex-col">
            <h1 className="title text-4xl font-extrabold text-center"> Top Developer Of The Month </h1>
                <div className="top flex justify-center gap-[40px] pt-[40px]">
                    <div className="topDev flex flex-col outline bg-[#D0EA57]">
                        <img className="foto" src={top2} alt="top2" />
                        <div className="absolute flex place-items-star p-[20px] text-center">
                            <h1 className="bg-[#D0EA57] py-[5px] px-[15px] rounded-full outline text-3xl font-bold text-black font-jakarta">#2</h1>
                        </div>
                        <div className="devCart flex flex-col pt-[15px] pb-[30px] px-[27.45px]">
                            <div className="devName">
                                <h1 className="text-2xl">Ciawmiaw</h1>
                            </div>

                            <div className="flex justify-between py-[15px]">
                                <div className="gamePub flex justify-center gap-[5px] outline rounded-sm w-[160px] py-[5px]">
                                    <GamePublish className="pt-[3px]"/>
                                    <span className="font-bold">5 Games Published</span>
                                </div>
                                <div className="gamePub flex justify-center gap-[5px] outline rounded-sm w-[160px] py-[5px]">
                                    <Visitor className="pt-[3px]"/>
                                    <h1 className="font-bold">1.000.000 Visitors</h1>
                                </div>
                            </div>

                            <button className="view bg-[#FDD400] outline rounded-sm w-full h-[42px]">View Profile</button>
                        </div>
                    </div>

                    <div className="topDev flex flex-col outline bg-[#FFD7C3]">
                        <img className="foto" src={top1} alt="top1" />
                        <div className="absolute flex place-items-star p-[20px] text-center">
                            <h1 className="bg-[#FFD7C3] py-[5px] px-[15px] rounded-full outline text-3xl font-bold text-black font-jakarta">#1</h1>
                        </div>
                        <div className="devCart flex flex-col pt-[15px] pb-[30px] px-[27.45px]">
                            <div className="devName">
                                <h1 className="text-2xl">Ciawmiaw</h1>
                            </div>

                            <div className="flex justify-between py-[15px]">
                                <div className="gamePub flex justify-center gap-[5px] outline rounded-sm w-[160px] py-[5px]">
                                    <GamePublish className="pt-[3px]"/>
                                    <span className="font-bold">5 Games Published</span>
                                </div>
                                <div className="gamePub flex justify-center gap-[5px] outline rounded-sm w-[160px] py-[5px]">
                                    <Visitor className="pt-[3px]"/>
                                    <h1 className="font-bold">1.000.000 Visitors</h1>
                                </div>
                            </div>

                            <button className="view bg-[#FDD400] outline rounded-sm w-full h-[42px]">View Profile</button>
                        </div>
                    </div>

                    <div className="topDev flex flex-col outline bg-[#32CBFC]">
                        <img className="foto" src={top3} alt="top3" />
                        <div className="absolute flex place-items-star p-[20px] text-center">
                            <h1 className="bg-[#32CBFC] py-[5px] px-[15px] rounded-full outline text-3xl font-bold text-black font-jakarta">#3</h1>
                        </div>
                        <div className="devCart flex flex-col pt-[15px] pb-[30px] px-[27.45px]">
                            <div className="devName">
                                <h1 className="text-2xl">Ciawmiaw</h1>
                            </div>

                            <div className="flex justify-between py-[15px]">
                                <div className="gamePub flex justify-center gap-[5px] outline rounded-sm w-[160px] py-[5px]">
                                    <GamePublish className="pt-[3px]"/>
                                    <span className="font-bold">5 Games Published</span>
                                </div>
                                <div className="gamePub flex justify-center gap-[5px] outline rounded-sm w-[160px] py-[5px]">
                                    <Visitor className="pt-[3px]"/>
                                    <h1 className="font-bold">1.000.000 Visitors</h1>
                                </div>
                            </div>

                            <button className="view bg-[#FDD400] outline rounded-sm w-full h-[42px]">View Profile</button>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Top;