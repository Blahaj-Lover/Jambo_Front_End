import React, { useState } from "react";
import "./UploadDesc.css";
import Trash from "./assets/icon/Trash";
import Files from "./assets/icon/Files";

const UploadDesc = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <div className="UploadDesc flex flex-col">
      <div className="fileGame">
        <h1 className="py-[15px] text-xl">Upload File Game</h1>

        <form
          action=""
          className="drop flex justify-center content-center h-[150px] outline-dashed bg-[#D9D9D9] rounded bg-opacity-50"
          onClick={() => document.querySelector(".inputFieldAPK").click()}
        >
          <input
            type="file"
            accept="image/*"
            className="inputFieldAPK"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {image ? (
            <img src={image} width={150} height={150} alt={fileName} />
          ) : (
            <>
              <p className="flex items-center">
                .apk, .exe, etc
              </p>
            </>
          )}
        </form>
        <section className="flex my-[10px] justify-between items-center py-[15px] px-[20px] rounded bg-[#D9D9D9] bg-opacity-50">
          <Files />
          <span className="flex">
            {fileName} -
            <Trash
              onClick={() => {
                setFileName("No selected Files");
                setImage(null);
              }}
            />
          </span>
        </section>
      </div>      
    </div>
  );
};

export default UploadDesc;
