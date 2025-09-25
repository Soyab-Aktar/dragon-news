import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between bg-gray-300 p-3 rounded-md">
      <div className="space-x-5 text-xl font-semibold text-gray-600 ">
        <h1>Hello {user && user.email}</h1>
      </div>
      <div className="space-x-5 text-xl font-semibold text-gray-600 ">
        <Link to="/">Home</Link>
        <Link>Career</Link>
        <Link>About</Link>
      </div>
      <div className="flex gap-2.5 items-center">
        <img className="rounded-full" src={userIcon} alt="" />

        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn bg-gray-400 border-2 border-gray-500"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-gray-400 border-2 border-gray-500"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
