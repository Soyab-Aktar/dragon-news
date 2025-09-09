import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest_News = () => {
  return (
    <div className=" bg-gray-300 p-3 rounded-md">
      <div className="flex gap-2 items-center">
        <p className="bg-red-500 rounded-md text-white font-semibold px-3 py-2">
          Latest
        </p>
        <Marquee
          pauseOnHover="true"
          autoFill="true"
          className="bg-gray-400 px-3 py-2 rounded-md space-x-8"
        >
          <Link>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quos.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default Latest_News;
