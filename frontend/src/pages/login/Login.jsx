import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [show, setShow] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="box">
      <div className="glassmorphism">
        <form className="flex flex-col" onSubmit={handleSubmit}>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Link to={"/signup"} className="formLink animate">
                Don't have an account?
              </Link>
            </div>
            <div>
              <button className="formButton animate" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
