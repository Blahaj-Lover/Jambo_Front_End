import React, { useState } from "react";
import "./Platform.css";
import Windows from "./assets/icon/Windows";
import Mac from "./assets/icon/Mac";
import Linux from "./assets/icon/Linux";
import Web from "./assets/icon/Web";

const Platform = () => {
    const [showFormWindows, setShow] = useState(false)

    return(
        <div className="Platform flex flex-col">
            <div className="choosePlatform">
                <h1 className="text-2xl"> Game Platform </h1>
                <h2 className="text-base opacity-50"> *Which platform your game can be played </h2>
                <div className="flex py-[20px] gap-[15px]">
                    <button className="flex justify-center items-center w-[231px] outline rounded focus:bg-[#FDD400] hover:bg-[#FDD400]" onClick={()=>setShow(true)}>
                        <Windows />
                        <h2 className="p-[10px] font-jakarta font-bold"> Windows </h2>
                    </button>

                    <button className="flex justify-center items-center w-[231px] outline rounded focus:bg-[#FDD400] hover:bg-[#FDD400]" onClick={()=>setShow(true)}>
                        <Mac />
                        <h2 className="p-[10px] font-jakarta font-bold"> MacOS </h2>
                    </button>

                    <button className="flex justify-center items-center w-[231px] outline rounded focus:bg-[#FDD400] hover:bg-[#FDD400]" onClick={()=>setShow(true)}>
                        <Linux />
                        <h2 className="p-[10px] font-jakarta font-bold"> Linux </h2>
                    </button>

                    <button className="flex justify-center items-center w-[231px] outline rounded focus:bg-[#FDD400] hover:bg-[#FDD400]" onClick={()=>setShow(false)}>
                        <Web />
                        <h2 className="p-[10px] font-jakarta font-bold"> Web Based </h2>
                    </button>
                </div>
            </div>

            { showFormWindows &&
                <div className="formPlatform flex flex-col">
                    <h1 className="flex justify-center pt-[10px] pb-[20px] text-[25px]"> Windows </h1>
                    <div className="forms flex justify-between">
                        <form action="" className="flex flex-col gap-[20px] outline py-[20px] px-[30px] rounded">
                            <h1 className="flex justify-center text-[25px]"> Minimum Requirement </h1>
                            <div id="email" className="flex flex-row">
                                <div className="">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Minimum Windows Version <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>
                            
                            <div id="email" className="flex flex-row">
                                <div className="">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Minimum Processor/CPU <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>

                            <div id="email" className="flex flex-row">
                                <div className="">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Minimum Memory RAM <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>

                            <div id="email" className="flex flex-row">
                                <div className="pb-[20px]">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Minimum Storage <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>                        
                        </form>

                        <form action="" className="flex flex-col gap-[20px] outline py-[20px] px-[30px] rounded">
                            <h1 className="flex justify-center text-[25px]"> Recommended Requirement </h1>
                            <div id="email" className="flex flex-row">
                                <div className="">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Recommended Windows Version <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>
                            
                            <div id="email" className="flex flex-row">
                                <div className="">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Recommended Processor/CPU <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>

                            <div id="email" className="flex flex-row">
                                <div className="">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Recommended Memory RAM <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>

                            <div id="email" className="flex flex-row">
                                <div className="pb-[20px]">
                                    <h1 for="text" className="pb-[20px] text-[18px]">
                                    {" "}
                                    Recommended Storage <br></br>{" "}
                                    </h1>
                                    <input
                                    type="text"
                                    name=""
                                    id="winVersion"
                                    className="h-[35px] w-[400px] outline rounded text-sm pl-2 bg-[#FFFFF3]"
                                    />
                                </div>
                            </div>                        
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default Platform;