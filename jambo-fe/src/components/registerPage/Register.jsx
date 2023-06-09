import React from "react";
import "./Register.css";
import Nav2 from "../Nav2";
import signkiri from "./assetSign/signKiri.png";
import signkanan from "./assetSign/signKanan.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="Register">
      <Nav2 />
      <div className="flex justify-between items-center h-screen">
        <img
          src={signkiri}
          alt="signKiri"
          className="flex justify-items-start self-end"
        />

        <div
          id="form"
          className="box outline rounded-md bg-[#D0EA57] w-96 px-16 pt-16 "
        >
          <form action="">
            <div className="flex pb-10 justify-center">
                <h2 className="flex text-black-700 text-3xl font-semibold">
                  Sign Up
                </h2>
            </div>
            <div id="username" className="flex flex-row">
              <div className="pb-4">
                <label for="username" className="">
                  {" "}
                  Username <br></br>{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id="username"
                  className="h-8 w-[250px] border-black border-b-2 text-sm pl-2 bg-[#D0EA57] shadow-sm"
                />
              </div>
            </div>

            <div id="email" className="flex flex-row">
              <div className="pb-4">
                <label for="email" className="">
                  {" "}
                  Email <br></br>{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id="email"
                  className="h-8 w-[250px]  border-black border-b-2 text-sm pl-2 bg-[#D0EA57] shadow-sm"
                />
              </div>
            </div>

            <div id="password" className="flex flex-row">
              <div className="">
                <label for="password" className="">
                  {" "}
                  Password <br></br>{" "}
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  className="h-8 w-[250px] border-black border-b-2 text-sm pl-2 bg-[#D0EA57] shadow-sm"
                />
              </div>
            </div>

            <div id="confirmpassword" className="flex flex-row pt-3">
              <div className="">
                <label for="confirmpassword" className="">
                  {" "}
                  Confirm Password <br></br>{" "}
                </label>
                <input
                  type="password"
                  name=""
                  id="confirmpassword"
                  className="h-8 w-[250px] border-black border-b-2 text-sm pl-2 bg-[#D0EA57] shadow-sm"
                />
              </div>
            </div>

            <div id="remember&forgot" className="flex flex-row">
              <div className="flex flex-row gap-8 pt-1 pb-10">
                <div
                  id="remember"
                  className="flex flex-row text-sm mb-2 italic"
                >
                  <input
                    type="checkbox"
                    name="remember"
                    className="text-sm mx-1"
                  ></input>
                  <p>Remember Me</p>
                </div>
                <div id="forgot" className="text-sm mb-2">
                  {" "}
                  <p>Forgot Password</p>{" "}
                </div>
              </div>
            </div>

            <Link to="/Explore">
              <button
                type="sumbit"
                name=""
                id="SignUp"
                  className="bg-[#FFFFF3] F w-full border-2 border-black h-10 cursor-pointer text-black text-xl rounded-md font-medium"
                  >
                SIGN UP
              </button>
            </Link>

            <div className="flex justify-center text-xs my-2 pt-16 self-end">
                <p className="">
                Already have an account?
                </p>
                <Link to="/sign-in"> Sign in </Link>
            </div>
          </form>
        </div>

        <img
          src={signkanan}
          alt="signKanan"
          className="flex self-start pt-[20px]"
        />
      </div>
    </div>
  );
};

export default Register;
