import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="box">
      <div className="glassmorphism">
        <form className="flex flex-col">
          <h1 className="text-center mb-10 text-4xl ">
            Signup{" "}
            <span className="text-green-500 font-semibold">LetsChat</span>
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-2xl">
              <label htmlFor="text" className="text-base">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="textInput animate"
              />
            </div>

            <div className="flex flex-col gap-1 text-2xl">
              <label htmlFor="text" className="text-base">
                Username
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="textInput animate"
              />
            </div>

            <div className="flex flex-col gap-1 text-2xl relative">
              <label htmlFor="password" className="text-base">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                className="passwordInput animate"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="passwordEye animate"
              >
                {show ? <LuEye /> : <LuEyeOff />}
              </button>
            </div>

            <div className="flex flex-col gap-1 text-2xl relative">
              <label htmlFor="password" className="text-base">
                Confirm Password
              </label>
              <input
                placeholder=""
                type={showConfirm ? "text" : "password"}
                className="passwordInput animate"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="passwordEye animate"
              >
                {showConfirm ? <LuEye /> : <LuEyeOff />}
              </button>
            </div>

            {/* GENDER CHECKBOX */}
            <GenderCheckbox />

            <div>
              <a href="" className=" formLink animate">
                Already have an account?
              </a>
            </div>

            <div>
              <button className="formButton animate">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
