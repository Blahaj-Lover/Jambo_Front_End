import React from "react";
import LoginNav from "../components/LoginNav";
import Footer from "../components/Footer";
import UploadTitle from "../components/uploadPage/UploadTitle";
import UploadDesc from "../components/uploadPage/UploadDesc1";
import UploadDesc2 from "../components/uploadPage/UploadDesc2";
import UploadDesc3 from "../components/uploadPage/UploadDesc3";
import UploadFileAPK from "../components/uploadPage/UploadFileApk";
import GameGenre from "../components/uploadPage/GameGenre";
import Crowdfund from "../components/uploadPage/OpenCrowdfund";
import Platform from "../components/uploadPage/Platform";

function UploadPage()  {
    return (
        <div className="About">
            <div className="w-[1440px] h-[136px]">
                <LoginNav />
            </div>
            <div className="flex flex-col items-center gap-[30px] pb-[50px]">
                <UploadTitle />
                <GameGenre />
                <UploadDesc />
                <UploadDesc2 />
                <UploadDesc3 />
                <UploadFileAPK />
                <Platform />
                <Crowdfund />
            </div>
            <Footer />
        </div>
    );
};

export default UploadPage;