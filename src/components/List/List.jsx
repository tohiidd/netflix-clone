import { useRef, useState } from "react";
import ListItem from "./ListItem";
import "./list.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List({ movieList, title }) {
  const [isMoved, setIsMoved] = useState(false);
  const movieListRef = useRef();

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

  return (
    <div className="bg-black pb-8 ">
      <div className="relative">
        <div>
          <h1 className="text-white font-semibold text-2xl ml-12 py-2">
            {title}
          </h1>
        </div>
        <div className="relative">
          {isMoved && (
            <div
              className="slider-arrow absolute flex items-center justify-center h-full w-10 text-4xl z-10"
              onClick={() => handleSlider("left")}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          )}
          <div
            className="slider-arrow absolute flex items-center justify-center h-full w-10 text-4xl right-0 z-10"
            onClick={() => handleSlider("right")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div
            ref={movieListRef}
            className="slider-items flex w-max "
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
