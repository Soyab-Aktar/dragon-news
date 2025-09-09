import Header from "../components/Header";
import Latest_News from "../components/Latest_News";

const Home_Layout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <Latest_News></Latest_News>
        </section>
      </header>
    </div>
  );
};

export default Home_Layout;
