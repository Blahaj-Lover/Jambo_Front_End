import React from "react";
import Windows from "./assets/icon/Windows";
import Apple from "./assets/icon/Apple";
import Linux from "./assets/icon/Linux";

const Download = () => {
    return (
        <div className="Download">
            <div className="bg-[#FFD7C3] w-[1125px] h-[179px] outline rounded">

                <div className="flex flex-col gap-[13px] pt-[27px] pb-[27px]">
                    <h1 className="text-[30px] font-bold text-center"> Download Spirit Well Now </h1>

                    <div className="flex gap-[13px] justify-center">

                        <div className="flex gap-[8px] bg-[#FDD400] w-[231px] h-[56px] outline rounded items-center justify-center">
                            <button className="flex gap-[8px]">
                                <Windows />
                                <text className="text-[14px] font-bold"> Download </text>
                                <text className="text-[14px]"> (2GB) </text>
                            </button>
                        </div>

                        <div className="flex gap-[8px] bg-[#FDD400] w-[231px] h-[56px] outline rounded items-center justify-center">
                            <button className="flex gap-[8px]">
                                <Apple />
                                <text className="text-[14px] font-bold"> Download </text>
                                <text className="text-[14px]"> (2GB) </text>
                            </button>
                        </div>

                        <div className="flex gap-[8px]">
                            <button className="flex gap-[8px] bg-[#FDD400] w-[231px] h-[56px] outline rounded items-center justify-center">
                                <Linux />
                                <text className="text-[14px] font-bold"> Download </text>
                                <text className="text-[14px]"> (2GB) </text>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Download