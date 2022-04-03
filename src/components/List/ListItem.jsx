import "./listItem.css";
import {
  faInfo,
  faInfoCircle,
  faPlay,
  faPlus,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { netflixContext } from "../../context/netflixContext";

const base_url = "https://image.tmdb.org/t/p/original/";

function ListItem({
  imgBackdrop,
  imgPoster,
  name,
  trailer,
  fullVideo,
  isLarge,
  handlePlay,
  id,
  handlePopup,
}) {
  const context = useContext(netflixContext);

  context.fullVideo = fullVideo;
  let imgUrl = isLarge ? imgPoster : imgBackdrop;

  return (
    <div className=" list-item px-3">
      <Link to="/watch">
        <img src={`${base_url}${imgUrl}`} alt={`${name}`} />
      </Link>

      <div className="show-button hidden justify-center items-center absolute top-0 left-0 right-0 bottom-0">
        <div className=" text-2xl">
          <button onClick={() => handlePlay(id)}>
            <FontAwesomeIcon
              icon={faPlay}
              className="text-red-600 mr-4 cursor-pointer"
            />
          </button>
          <button onClick={() => handlePopup(id)}>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-white cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
