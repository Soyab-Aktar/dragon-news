import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Left_Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-left mb-4 bg-gray-300 p-3 rounded-md">
        All Category
      </h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className={({ isActive }) =>
              isActive
                ? "btn bg-gray-500 text-white border-2 border-gray-600"
                : "btn bg-gray-200 border-2 border-gray-500"
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Left_Navbar;
