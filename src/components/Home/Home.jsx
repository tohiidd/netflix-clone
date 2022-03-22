import Footer from "../Footer/Footer";
import HomeHeader from "../Header/HomeHeader";
import List from "../List/List";
import "./home.css";

function Home() {
  return (
    <section>
      <HomeHeader />
      <section>
        <List />
      </section>

      <Footer bgColor={"bg-black"} />
    </section>
  );
}

export default Home;
