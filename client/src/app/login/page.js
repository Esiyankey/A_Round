"use client";
import React from "react";
import { BiUser, BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export default function login() {
  return (
    <div className="flex  flex-col justify-center items-center">
      <div className="mt-32 flex flex-col justify-center items-center text-center ">
        <h1>Welcome</h1>
        <h3>Welcome! Log in to continue your journey with us.</h3>

        <form>
          <div className="flex">
            <BiUser />
            <input type="text" placeholder="username" />
          </div>
          <div className="flex ">
            <AiOutlineLock />
            <input placeholder="Password" type="text" />
            <div>
              <AiOutlineEye />
              <AiOutlineEyeInvisible />
            </div>
          </div>
          <button>Log In</button>
          <h4>................Login with Others................</h4>
          <div>
            <FcGoogle />
            <input type="text" placeholder="login with google" />
          </div>
          <div>
            <BiLogoFacebookCircle />
            <input type="text" placeholder="login with facebook" />
          </div>
        </form>
      </div>
    </div>
  );
}
