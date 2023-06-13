import React from "react";
import "./UploadTitle.css";

const UploadTitle = () => {
    return(
        <div className="UploadTitle flex flex-col">
            <div className="">
                <h1 className="text-4xl">Upload Game</h1>
                <h2 className="text-xl">Get Ready To Upload Your Unique Game</h2>
            </div>

            <div className="droptext">
                <h1 className="py-[15px] text-xl">Game Banner/Thumbnail</h1>
                <div className="drop flex justify-center content-center py-[200px] outline-dashed bg-[#D9D9D9] opacity-50">
                    <h1 className="">Upload Images <br /> Only JPG, JPEG and PNG formats are allowed.</h1>
                </div>

                <div>
                    <h1 for="gameTitle" className="py-[15px] text-xl"> Game Title </h1>
                    <input type="text" name="" id="gameTitle" className="h-[40px] w-full outline outline-black opacity-50 bg-[#FFFFF3] text-base "/>
                </div>
            </div>
        </div>
    );
};

export default UploadTitle;