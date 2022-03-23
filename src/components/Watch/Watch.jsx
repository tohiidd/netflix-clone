import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { netflixContext } from "../../context/netflixContext";

function Watch() {
  const context = useContext(netflixContext);

  return (
    <div className="w-screen h-screen">
      <div className="absolute text-white m-6 text-xl z-10">
        <Link to="/home">
          <span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>
          <span className="ml-3">Home</span>
        </Link>
      </div>
      <video
        src={`${context.fullVideo}`}
        autoPlay
        controls
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default Watch;
