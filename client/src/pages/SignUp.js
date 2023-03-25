import React, { useState } from "react";
import SignUpImg from "../assets/sign-up.svg";
import Button from "../components/input/Button.js";
import useMediaQuery from "../hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const isBelowLargeScreens = useMediaQuery("(max-width: 1024px)");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (username.length > 0 && password.length > 0) {
        if (confirmPassword === password) {
          const res = await axios.post("/auth/register", {
            username,
            password,
          });
          if (res.status === 201) {
            return navigate("/login", { replace: true });
          }
        } else {
          alert("password not equal to confirm password");
        }
      } else {
        alert("username or password not long enough");
      }
    } catch (error) {
      console.log(error);
      alert("registration failed");
    }
  }

  return (
    <div className={"d-flex flex-row content-center h-full"}>
      <div
        className={`max-w-[1400px] mx-auto h-[calc(100%-40px)] flex content-center ${
          isAboveMediumScreens ? "justify-between" : "justify-center"
        } items-center gap-8 px-4`}
      >
        {/* Sign Up Form */}
        <form
          className={`w-[480px] h-[620px] bg-white p-10 place-self-end self-center rounded-xl shadow-md flex flex-col justify-center z-[30] ${
            isBelowLargeScreens ? "ml-auto" : ""
          } ${!isAboveMediumScreens ? "ml-0" : ""}`}
          onSubmit={handleSubmit}
        >
          <div>
            <h1 className="text-center font-bold text-5xl">Sign Up</h1>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center top-[5px]">
                <div className="w-full border-2 border-black-500 border-opacity-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 font-semibold text-2xl my-7">
                  Create an account
                </span>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="username" className="font-bold py-1">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-bold py-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="h-12 px-3 -white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirm" className="font-bold py-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm"
                  className="h-12 px-3 -white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" content="Sign up"></Button>

            <div className="py-6">
              Already have an account?{" "}
              <a href="/Login" className="underline text-[#89CDFE]">
                Log in
              </a>
            </div>
          </div>
        </form>

        {/* Image Right */}
        <div
          className={`${
            isBelowLargeScreens
              ? "absolute -left-[3vw] top-[50%] -translate-y-[50%]"
              : ""
          }`}
        >
          <img src={SignUpImg} alt="sign-up-img" />
        </div>
      </div>
      <div className="h-[10px] text-[#A9A9A9] ml-[10%]">
        ©2022 Tetra Fuel, All Rights reserved
      </div>
    </div>
  );
};

export default SignUp;
