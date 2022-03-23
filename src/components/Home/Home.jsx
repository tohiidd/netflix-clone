import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import HomeHeader from "../Header/HomeHeader";
import List from "../List/List";
import "./home.css";

function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("./api/data.json");
      setMovieList(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="overflow-hidden">
      <HomeHeader />
      <section>
        <List movieList={movieList} title={"Action"} />
        <List movieList={movieList} title={"Drama"} />
        <List movieList={movieList} title={"Science Fiction"} />
      </section>

      <Footer bgColor={"bg-black"} />
    </section>
  );
}

export default Home;
