import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import HomeHeader from "../Header/HomeHeader";
import List from "../List/List";
import "./home.css";
import requests from "./request";

function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("./api/data.json");
      console.log(data);
      setMovieList(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section>
      <HomeHeader />
      <section>
        {/* <List
          fetchUrl={requests.fetchNetflixOriginals}
          title={"Netflix Original"}
          isLarge
        />
        <List movieList={requests.fetchActionMovies} title={"Action"} />
        <List movieList={requests.fetchComedyMovies} title={"Drama"} />
        <List
          movieList={requests.fetchHorrorMovies}
          title={"Science Fiction"}
        /> */}
        <List movieList={movieList} title={"Netflix Original"} isLarge />
        <List movieList={movieList} title={"Action"} />
        <List movieList={movieList} title={"Drama"} />
        <List movieList={movieList} title={"Science Fiction"} />
      </section>

      <Footer bgColor={"bg-black"} />
    </section>
  );
}

export default Home;
