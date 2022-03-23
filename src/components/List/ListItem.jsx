import "./listItem.css";
import {
  faPlay,
  faPlus,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { netflixContext } from "../../context/netflixContext";

function ListItem({ img, trailer, desc, fullVideo }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState();
  const context = useContext(netflixContext);

  console.log(context);
  context.fullVideo = fullVideo;
  function hoverEnter() {
    const hover = setTimeout(() => {
      setIsHovered(true);
    }, 1500);
    setHoverTimeout(hover);
  }
  function hoverLeave() {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  }
  return (
    <div
      className="mr-2 relative cursor-pointer list-item"
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
    >
      <Link to="/watch">
        <img src={`${img}`} alt="item" className="-z-10" />
      </Link>
      {isHovered && (
        <div className="video-container absolute top-0 z-50 bg-black">
          <video
            src={`${trailer}`}
            autoPlay
            loop
            muted
            className="object-cover"
          />
          <div className="text-white text-sm p-3">
            <div className="">
              <Link to="/watch">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="border-2 border-white border-solid py-2 px-3 rounded-3xl mr-2 cursor-pointer"
                />
              </Link>
              <FontAwesomeIcon
                icon={faPlus}
                className="border-2 border-white border-solid py-2 px-3 rounded-3xl mr-2 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="border-2 border-white border-solid py-2 px-3 rounded-3xl mr-2 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faThumbsDown}
                className="border-2 border-white border-solid py-2 px-3 rounded-3xl cursor-pointer"
              />
            </div>
            <div className="my-2">
              <span>2 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="text-justify">{desc}</div>
            <div className="genre">Action</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
