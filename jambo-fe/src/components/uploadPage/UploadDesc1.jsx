import React, { useState } from "react";
import "./UploadDesc.css";
import Trash from "./assets/icon/Trash";
import Files from "./assets/icon/Files";

const UploadDesc = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <div className="UploadDesc flex flex-col">
      <div className="desc1">
        <h1 className="py-[15px] text-xl">Upload Game Description Image 1</h1>

        <form
          action=""
          className="drop flex justify-center content-center h-[150px] outline-dashed bg-[#D9D9D9] rounded bg-opacity-50"
          onClick={() => document.querySelector(".inputFieldDesc").click()}
        >
          <input
            type="file"
            accept="image/*"
            className="inputFieldDesc"
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
                Only JPG, JPEG and PNG formats are allowed.
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

        <div>
          <h1 for="gameDesc1" className="py-[15px] text-xl">
            {" "}
            Game Description Text 1{" "}
          </h1>
          <textarea
            type="text"
            name=""
            id="gameDesc1"
            className="h-[400px] w-full outline outline-black opacity-50 bg-[#FFFFF3] rounded text-base "
          />
        </div>
      </div>      
    </div>
  );
};

export default UploadDesc;
