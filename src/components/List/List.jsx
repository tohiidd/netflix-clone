import { useContext, useEffect, useRef, useState } from "react";
import ListItem from "./ListItem";
import "./list.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { netflixContext } from "../../context/netflixContext";
import Popup from "../Popup/Popup";
import axios from "../Home/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function List({ title, isLarge, fetchUrl }) {
  const [isMoved, setIsMoved] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState([]);

  const movieListRef = useRef();
  // const context = useContext(netflixContext);

  function handleSlider(direction) {
    let div = movieListRef.current.children[0].offsetWidth;
    let coordinates = movieListRef.current.getBoundingClientRect();
    let distance = window.innerWidth - coordinates.width;

    setIsMoved(true);

    if (direction === "left" && coordinates.x < 0) {
      movieListRef.current.style.transform = `translateX(${
        div + coordinates.x
      }px)`;
    }

    if (direction === "right" && coordinates.x > distance + div) {
      movieListRef.current.style.transform = `translateX(${
        -div + coordinates.x
      }px)`;
    } else if (direction === "right" && coordinates.x > distance) {
      movieListRef.current.style.transform = `translateX(${
        -div + coordinates.x + 180
      }px)`;
    }
  }

  function handlePlay(id) {
    let movie = movieList.filter((movie) => movie.id == id);

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    // if (!showTrailer) {
    //   setShowTrailer((prev) => !prev);
    // } else if (trailer === movieTrailer) {
    //   setShowTrailer(false);
    // }
    // trailerHandler();
    // setMovieTrailer(trailer);
  }

  function handlePopup(id) {
    console.log(id);
    let movie = movieList.filter((movie) => movie.id == id);
    console.log(movie);
    setSelectedMovie(movie);
    showPopupHandler();
  }
  function showPopupHandler() {
    setShowPopup((prev) => !prev);
  }
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(fetchUrl);
      console.log(data.results);
      setMovieList(data.results);
    }
    fetchData();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  let imgHeight = isLarge ? "max-height-250" : "max-height-100";
  return (
    <div className="bg-black pb-4 ">
      <div className="relative">
        <div>
          <h1 className="text-white font-semibold text-2xl ml-12 py-2">
            {title}
          </h1>
        </div>
        <div className="relative overflow-x-scroll lg:overflow-x-hidden py-4 scroll-items">
          {isMoved && (
            <div
              className="slider-arrow hidden lg:flex absolute  items-center justify-center h-4/5 top-0 w-10 text-4xl z-20 "
              onClick={() => handleSlider("left")}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          )}
          <div
            className="slider-arrow hidden lg:flex absolute  items-center justify-center h-4/5 top-0 w-10 text-4xl right-0 z-20"
            onClick={() => handleSlider("right")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div
            ref={movieListRef}
            className={`${imgHeight}  slider-items relative flex w-max`}
            id="slider-items"
          >
            {movieList.map((movie) => (
              <ListItem
                key={movie.id}
                id={movie.id}
                name={movie.name}
                imgBackdrop={movie.backdrop_path}
                imgPoster={movie.poster_path}
                desc={movie.overView}
                trailer={movie.trailer}
                fullVideo={movie.fullVideo}
                isLarge={isLarge}
                handlePlay={handlePlay}
                handlePopup={handlePopup}
              />
            ))}
          </div>
        </div>
        {trailerUrl && (
          // <div>
          //   <video
          //     src={`${movieTrailer}`}
          //     autoPlay
          //     loop
          //     muted
          //     className="object-cover"
          //   />
          // </div>
          <YouTube videoId={trailerUrl} opts={opts} />
        )}
      </div>
      {selectedMovie && (
        <Popup
          show={showPopup}
          movieInfo={selectedMovie}
          showPopupHandler={showPopupHandler}
        />
      )}
    </div>
  );
}

export default List;
