import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="flex items-center gap-2 flex-col justify-center py-2 mb-6">
        <img className="w-2xs pb-2" src={logo} alt="" />
        <h2 className="font-semibold text-gray-500">
          Journalism Without Fear or Favour
        </h2>
        <p className="font-semibold text-gray-700 text-xl">
          {moment().format("dddd, MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
