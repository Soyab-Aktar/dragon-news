import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Social_Login = () => {
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-xl font-semibold text-left mb-4 bg-gray-300 p-3 rounded-md">
        Login With
      </h2>
      <button className="btn bg-blue-200 border-2 border-blue-500 w-full">
        <FaGoogle></FaGoogle>
        Login With Google
      </button>
      <button className="btn bg-purple-200 border-2 border-purple-500 w-full">
        <FaGithub></FaGithub>
        Login With Github
      </button>
    </div>
  );
};

export default Social_Login;
