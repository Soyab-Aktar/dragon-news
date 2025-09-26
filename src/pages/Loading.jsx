import React from "react";
import Header from "../components/Header";

const Loading = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </main>
    </div>
  );
};

export default Loading;
