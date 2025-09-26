import React from "react";
import Header from "../components/Header";
import Right_Navbar from "../components/layout-components/Right_Navbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5 ">
        <section className="col-span-9">
          <div className=" p-3 rounded-md border border-gray-400 shadow-sm">
            <figure className="">
              <img src={news?.image_url} className="rounded-md" />
            </figure>
            <div className="card-body text-justify p-2 mt-2">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to="/"
                  className="btn bg-gray-500 border-gray-700 text-white"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <Right_Navbar></Right_Navbar>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
