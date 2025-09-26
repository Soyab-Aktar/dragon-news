import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <div className="p-8 border border-gray-600 rounded-md shadow-xl w-full max-w-md bg-white">
        <h1 className="text-4xl font-bold mb-5 text-center">Login Here</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="flex justify-left text-gray-500 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full p-3 text-lg rounded-md bg-gray-200 border-1 border-gray-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="flex justify-left text-gray-500 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full p-3 text-lg rounded-md bg-gray-200 border-1 border-gray-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Password"
            />
          </div>

          {error.login && (
            <div className="flex justify-end text-red-500 font-semibold">
              <span>{error.login}</span>
            </div>
          )}

          <div className="flex justify-end">
            <a className="link link-hover text-gray-500 font-bold">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-neutral mt-4 w-full">Login</button>

          <div className="text-center text-gray-500">
            Already have an account?
            <Link to="/auth/register" className="font-bold underline">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
