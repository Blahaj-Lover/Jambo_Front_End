import React, { useState } from "react";
import "./UploadTitle.css";
import Trash from "./assets/icon/Trash";
import Files from "./assets/icon/Files";

const UploadTitle = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!image.some((e) => e.name === files[i].name)) {
      }
    }
  }

  function onDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!image.some((e) => e.name === files[i].name)) {
        setFileName(files[i].name);
        setImage(URL.createObjectURL(files[i]));
      }
    }
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  return (
    <div className="UploadTitle flex flex-col">
      <div className="">
        <h1 className="text-4xl">Upload Game</h1>
        <h2 className="text-xl">Get Ready To Upload Your Unique Game</h2>
      </div>

      <div
        className="droptext"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <h1 className="py-[15px] text-xl">Game Banner/Thumbnail</h1>

        <form
          action=""
          className="drop flex justify-center content-center h-[370px] outline-dashed rounded bg-[#D9D9D9] bg-opacity-50"
          onClick={() => document.querySelector(".inputField").click()}
        >
          <input
            type="file"
            accept="image/*"
            className="inputField"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {image ? (
            <img src={image} width={750} height={150} alt={fileName} />
          ) : (
            <>
              <div className="flex flex-col justify-center items-center">
                <p className="">
                    Drag and Drop Images
                </p>
                <p>
                    Only JPG, JPEG, and PNG formats are allowed.
                </p>
              </div>
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
          <h1 htmlFor="gameTitle" className="py-[15px] text-xl">
            Game Title
          </h1>
          <input
            type="text"
            name=""
            id="gameTitle"
            className="h-[40px] w-full outline outline-black opacity-50 rounded bg-[#FFFFF3] text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadTitle;