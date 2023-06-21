import React from "react";
import "./UploadDesc.css";

const UploadDesc = () => {
    return(
        <div className="UploadDesc flex flex-col">
            <div className="desc1">
                <h1 className="py-[15px] text-xl">Upload Game Description Image 1</h1>
                <div className="drop flex justify-center content-center py-[70px] outline-dashed bg-[#D9D9D9] opacity-50">
                    <h1 className="">Only JPG, JPEG and PNG formats are allowed.</h1>
                </div>

                <div>
                    <h1 for="gameDesc1" className="py-[15px] text-xl"> Game Description Text 1 </h1>
                    <input type="text" name="" id="gameDesc1" className="h-[40px] w-full outline outline-black opacity-50 bg-[#FFFFF3] text-base "/>
                </div>
            </div>

            <div className="desc2">
                <h1 className="py-[15px] text-xl"> Upload Game Description Image 2 </h1>
                <div className="drop flex justify-center content-center py-[70px] outline-dashed bg-[#D9D9D9] opacity-50">
                    <h1 className="">Only JPG, JPEG and PNG formats are allowed.</h1>
                </div>

                <div>
                    <h1 for="gameDesc2" className="py-[15px] text-xl"> Game Description Text 2 </h1>
                    <input type="text" name="" id="gameDesc2" className="h-[40px] w-full outline outline-black opacity-50 bg-[#FFFFF3] text-base "/>
                </div>
            </div>

            <div className="desc3">
                <h1 className="py-[15px] text-xl"> Upload Game Description Image 3 </h1>
                <div className="drop flex justify-center content-center py-[70px] outline-dashed bg-[#D9D9D9] opacity-50">
                    <h1 className="">Only JPG, JPEG and PNG formats are allowed.</h1>
                </div>

                <div>
                    <h1 for="gameDesc3" className="py-[15px] text-xl"> Game Description Text 3 </h1>
                    <input type="text" name="" id="gameDesc3" className="h-[40px] w-full outline outline-black opacity-50 bg-[#FFFFF3] text-base "/>
                </div>
            </div>
        </div>
    );
};

export default UploadDesc;