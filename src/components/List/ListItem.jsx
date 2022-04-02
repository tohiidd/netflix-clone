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

function ListItem({
  img,
  trailer,
  fullVideo,
  isLarge,
  handlePlay,
  id,
  handlePopup,
}) {
  // const [showTrailer, setShowTrailer] = useState(false);
  const context = useContext(netflixContext);

  context.fullVideo = fullVideo;
  // context.trailer = trailer;

  return (
    <div className=" list-item  px-3">
      <Link to="/watch">
        <img
          src={`${img}`}
          alt="item"
          className={`${isLarge && "img-height"}`}
        />
      </Link>

      <div className="show-button hidden justify-center items-center absolute top-0 left-0 right-0 bottom-0">
        <div className=" text-2xl">
          <button onClick={() => handlePlay(trailer)}>
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
