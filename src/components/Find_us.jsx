import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Find_us = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-left mb-4 bg-gray-300 p-3 rounded-md">
        Find Us
      </h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item border-2 border-gray-400 border-b-0 rounded-md rounded-b-none bg-cyan-200 ">
          <FaFacebook></FaFacebook> FaceBook
        </button>
        <button className="btn join-item border-2 border-gray-400 border-b-0 border-t-0 rounded-md rounded-t-none rounded-b-none bg-blue-300">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item border-2 border-gray-400 border-t-0 rounded-md rounded-t-none bg-pink-300">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default Find_us;
