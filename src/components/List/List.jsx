import { useContext, useRef, useState } from "react";
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

function List({ movieList, title, isLarge }) {
  const [isMoved, setIsMoved] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [showPopup, setShowPopup] = useState(false);

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

  function handlePlay(trailer) {
    if (!showTrailer) {
      setShowTrailer((prev) => !prev);
    } else if (trailer === movieTrailer) {
      setShowTrailer(false);
    }
    setMovieTrailer(trailer);
  }
  function handlePopup(id) {
    let movie = movieList.filter((movie) => movie.id == id);
    setSelectedMovie(movie);
    showPopupHandler();
  }
  function showPopupHandler() {
    setShowPopup((prev) => !prev);
  }
  return (
    <div className="bg-black pb-4 ">
      <div className="relative">
        <div>
          <h1 className="text-white font-semibold text-2xl ml-12 py-2">
            {title}
          </h1>
        </div>
        <div className="relative overflow-x-scroll lg:overflow-x-hidden py-2 scroll-items">
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
            className="slider-items relative flex w-max "
            id="slider-items"
          >
            {movieList.map((movie) => (
              <ListItem
                key={movie.id}
                id={movie.id}
                name={movie.name}
                img={movie.img}
                desc={movie.desc}
                trailer={movie.trailer}
                fullVideo={movie.fullVideo}
                isLarge={isLarge}
                handlePlay={handlePlay}
                handlePopup={handlePopup}
              />
            ))}
          </div>
        </div>
        {showTrailer && (
          <div>
            <video
              src={`${movieTrailer}`}
              autoPlay
              loop
              muted
              className="object-cover"
            />
          </div>
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
