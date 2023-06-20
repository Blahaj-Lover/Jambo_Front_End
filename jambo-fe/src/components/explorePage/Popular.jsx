import React from "react";
import "./Popular.css";
import popular_1 from "./assets/Popular Banner (1).png";
import popular_2 from "./assets/Popular Banner (2).png";
import popular_3 from "./assets/Popular Banner (3).png";
import popular_4 from "./assets/Popular Banner (4).png";
import Windows from "./assets/icon/Windows";
import Android from "./assets/icon/Android";
import Genre2 from "./assets/icon/Genre2";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="Popular">
      <div class="flex flex-col gap-10">
        <div class="header flex justify-between">
          <h1 class="text-[40px]"> Popular Games This Week </h1>

          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-[462px]">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="h-[46px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Games / Showcase"
                required
              ></input>
            </div>
            <button
              type="submit"
              class="searchButton p-2.5 ml-2 text-sm font-medium text-black rounded-lg border outline dark:bg-[#FDD400]"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>

        <div class=" image flex gap-10">
          <Link to="/spirit-well">
            <div class="relative w-[855px] h-[480px] cursor-pointer">
              <img
                src={popular_1}
                alt="Popular 1"
                className="absolute bottom-1 w-full rounded-xl brightness-75 h-[480px]"
              ></img>

              <div className="absolute bottom-1 w-full h-full rounded-xl bg-black bg-opacity-40">
                <div class="absolute flex flex-col bottom-0 left-0 right-0 px-10 gap-[20px] pb-[40px]">
                  <h1 class="bannerTitle text-[35px] text-white font-bold">
                    SPIRIT WELL
                  </h1>
                  <p className="font-jakarta text-white text-[14px]">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor <br></br> incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="flex gap-[20px] items-center">
                    <div className="flex bg-[#FDD400] w-[74px] h-[37px] font-jakarta items-center justify-center font-semibold text-[15px] rounded">
                      FREE
                    </div>
                    <div className="flex gap-[8px] bg-[#FDD400] items-center justify-center rounded w-[60px] h-[37px]">
                      <Windows />
                      <Android />
                    </div>
                    <div className="flex gap-[10px]">
                      <Genre2 />
                      <text className="text-white font-jakarta text-[16px]">
                        {" "}
                        Action, Adventure, Puzzle{" "}
                      </text>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Link>

          <div className="flex flex-col gap-10 cursor-pointer">
            <div className="relative w-[347px] h-[133px]">
              <img src={popular_2} alt="Popular 2"></img>

              <div className="absolute bottom-2 top-0 w-full rounded-xl opacity-0 bg-black hover:opacity-100 hover:bg-opacity-40">
                <div className="absolute flex flex-col bottom-0 left-0 gap-[20px] pb-[20px] px-5">
                  
                  <div className="flex flex-col gap-[2px]">
                    <h1 className="bannerTitle text-white">
                      {" "}
                      Dark Story: Rise Of Dragons{" "}
                    </h1>
                    <div className="flex gap-[5px] items-center">
                      <div className="flex bg-[#FDD400] w-[50px] h-[18px] font-jakarta items-center justify-center font-semibold text-[10px] rounded">
                        FREE
                      </div>
                      <div className="flex gap-[8px] bg-[#FDD400] items-center justify-center rounded w-[50px] h-[18px]">
                        <Windows />
                        <Android />
                      </div>

                      <div className="flex gap-[10px] items-center">
                        <Genre2 />
                        <text className="text-white font-jakarta text-[10px]">
                          Action, Adventure, Puzzle
                        </text>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>
            </div>

            <div className="relative w-[347px] h-[133px]">
              <img src={popular_3} alt="Popular 2"></img>

              <div className="absolute bottom-2 top-0 w-full rounded-xl opacity-0 bg-black hover:opacity-100 hover:bg-opacity-40">
                <div className="absolute flex flex-col bottom-0 left-0 gap-[20px] pb-[20px] px-5">
                  
                  <div className="flex flex-col gap-[2px]">
                    <h1 className="bannerTitle text-white">
                      {" "}
                      Dark Story: Rise Of Dragons{" "}
                    </h1>
                    <div className="flex gap-[5px] items-center">
                      <div className="flex bg-[#FDD400] w-[50px] h-[18px] font-jakarta items-center justify-center font-semibold text-[10px] rounded">
                        FREE
                      </div>
                      <div className="flex gap-[8px] bg-[#FDD400] items-center justify-center rounded w-[50px] h-[18px]">
                        <Windows />
                        <Android />
                      </div>

                      <div className="flex gap-[10px] items-center">
                        <Genre2 />
                        <text className="text-white font-jakarta text-[10px]">
                          Action, Adventure, Puzzle
                        </text>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>
            </div>

           <div className="relative w-[347px] h-[133px]">
              <img src={popular_4} alt="Popular 4"></img>

              <div className="absolute bottom-2 top-0 w-full rounded-xl opacity-0 bg-black hover:opacity-100 hover:bg-opacity-40">
                <div className="absolute flex flex-col bottom-0 left-0 gap-[20px] pb-[20px] px-5">
                  
                  <div className="flex flex-col gap-[2px]">
                    <h1 className="bannerTitle text-white">
                      {" "}
                      Dark Story: Rise Of Dragons{" "}
                    </h1>
                    <div className="flex gap-[5px] items-center">
                      <div className="flex bg-[#FDD400] w-[50px] h-[18px] font-jakarta items-center justify-center font-semibold text-[10px] rounded">
                        FREE
                      </div>
                      <div className="flex gap-[8px] bg-[#FDD400] items-center justify-center rounded w-[50px] h-[18px]">
                        <Windows />
                        <Android />
                      </div>

                      <div className="flex gap-[10px] items-center">
                        <Genre2 />
                        <text className="text-white font-jakarta text-[10px]">
                          Action, Adventure, Puzzle
                        </text>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
