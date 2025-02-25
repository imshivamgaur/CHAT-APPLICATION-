import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="box">
      <div className="glassmorphism">
        <form className="flex flex-col">
          <h1 className="text-center mb-10 text-4xl ">
            Login <span className="text-green-500 font-semibold">LetsChat</span>
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-2xl">
              <label htmlFor="email" className="text-base">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username..."
                className="textInput animate"
              />
            </div>

            <div className="flex flex-col gap-1 text-2xl relative">
              <label htmlFor="password" className="text-base">
                Password
              </label>
              <input
                placeholder="Enter password..."
                type={show ? "text" : "password"}
                className="passwordInput animate"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="passwordEye"
              >
                {show ? <LuEye /> : <LuEyeOff />}
              </button>
            </div>

            <div>
              <a href="" className="formLink animate">
                Don't have an account?
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

export default Login;
