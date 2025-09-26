import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/layout-components/NewsCard";

const Category_News = () => {
  const news = useLoaderData();

  return (
    <div>
      <h2 className="text-xl font-semibold text-left mb-4 bg-gray-300 p-3 rounded-md">
        Dragon News Home
      </h2>
      <div>
        {news.data.map((newsCard) => (
          <NewsCard newsCard={newsCard} key={newsCard._id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category_News;
