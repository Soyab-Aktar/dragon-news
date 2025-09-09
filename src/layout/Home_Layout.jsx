import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Latest_News from "../components/Latest_News";
import Left_Navbar from "../components/layout-components/Left_Navbar";
import Right_Navbar from "../components/layout-components/Right_Navbar";
import Navbar from "../components/Navbar";

const Home_Layout = () => {
  return (
    <div className="font-inter">
      <header>
        <Header></Header>
        <section className="mb-6">
          <Latest_News></Latest_News>
        </section>
        <section className="mb-6">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="grid grid-cols-12 mb-6 gap-1.5">
        <aside className="left col-span-2">
          <Left_Navbar></Left_Navbar>
        </aside>
        <section className="col-span-7">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <Right_Navbar></Right_Navbar>
        </aside>
      </main>
    </div>
  );
};

export default Home_Layout;
