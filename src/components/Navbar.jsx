import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-300 p-3 rounded-md">
      <div className="space-x-5 text-xl font-semibold text-gray-600 ">
        <Link>Home</Link>
        <Link>Career</Link>
        <Link>About</Link>
      </div>
      <div className="flex gap-2.5 items-center">
        <img className="rounded-full" src={userIcon} alt="" />
        <button className="btn bg-gray-400 border-2 border-gray-500">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
