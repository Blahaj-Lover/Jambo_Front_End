import React from "react";
import "./Login.css";
import Nav2 from "../Nav2";
import signkiri from "./assetSign/signKiri.png";
import signkanan from "./assetSign/signKanan.png";
import { Link } from "react-router-dom";

//backend {
  import axios from "axios";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
//backend }

const Login = () => {

//backend {
  const [login, setLogin] = useState({
    UsUsername:"",
    UsPassword:"",
  });
  const [error,setError] = useState(false)

  var loginSuccess = false;

  const navigate = useNavigate()

  const handleChangeLogin = (e) => {
      setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(login);

  const handleClickLogin = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post("http://localhost:8800/login", login)
        loginSuccess = res.data;
        console.log(loginSuccess)
        if(loginSuccess != false) navigate("/")
      } catch (err) {
        console.log(err)
        setError(true)
      }
  }
  //backend }

  return (
    <div className="Login">
      <Nav2 />
      <div className="flex flex-row justify-between items-center h-screen">
        <img
          src={signkiri}
          alt="signKiri"
          className="flex justify-items-start self-end"
        />
        
        <div
          id="form"
          className="box outline rounded-md bg-[#FFD7C3] w-96 px-16 pt-16 hover:drop-shadow-red"
        >
          <form action="">
            <h2 className="flex flex-row text-black-700 text-3xl font-semibold pb-10 justify-center">
              {" "}
              Sign In{" "}
            </h2>
            <div id="username" className="flex flex-row">
              <div className="pb-4">
                <label for="username" className="">
                  {" "}
                  Username{" "}
                </label>
                <input
                  type="text"
                  name="UsUsername"
                  id="username"
                  className="h-8 w-full border-black border-b-2 text-sm pl-2 bg-[#FFD7C3] shadow-sm"
                  onChange={handleChangeLogin}
                />
              </div>
            </div>

            <div id="password" className="flex flex-row">
              <div className="">
                <label for="password" className="mr-1">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  name="UsPassword"
                  id="password"
                  className="h-8 w-full border-black border-b-2 text-sm pl-2 bg-[#FFD7C3] shadow-sm"
                  onChange={handleChangeLogin}
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
                    className="text-sm mx-1 "
                  ></input>
                  <p>Remember Me</p>
                </div>
                <div id="forgot" className="text-sm mb-2">
                  {" "}
                  <p>Forgot Password</p>{" "}
                </div>
              </div>
            </div>
            <button
              type="sumbit"
              name=""
              id="SignIn"
              className="bg-[#FDD400] w-full border-2 border-black  h-10 cursor-pointer text-black text-xl rounded-md font-medium"
              onClick={handleClickLogin}
            >
              SIGN IN
            </button>
            <div className="flex justify-center text-xs my-2 pt-16 self-end">
                <p className="">
                Don't have an account?
                </p>
                <Link to="/sign-up"> Create new one </Link>
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

export default Login;