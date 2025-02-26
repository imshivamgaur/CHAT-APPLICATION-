import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  // show password state
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // singup state
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs);
  };

  return (
    <div className="box">
      <div className="glassmorphism">
        <form className="flex flex-col" onSubmit={handleSubmit}>
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
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
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
                value={inputs.username}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    username: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1 text-2xl relative">
              <label htmlFor="password" className="text-base">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                className="passwordInput animate"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    password: e.target.value,
                  })
                }
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
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    confirmPassword: e.target.value,
                  })
                }
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
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />

            <div>
              <Link to={"/login"} className=" formLink animate">
                Already have an account?
              </Link>
            </div>

            <div>
              <button className="formButton animate " disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign up"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
