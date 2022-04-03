import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popup.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Popup({ show, movieInfo, showPopupHandler }) {
  const [movie] = movieInfo;
  console.log(movie);
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      }  w-screen h-screen justify-center items-center  z-50 fixed top-0 left-0 `}
    >
      <div
        className="popup-bg w-screen h-screen fixed top-0 left-0  "
        onClick={showPopupHandler}
      ></div>
      <div className="flex items-center bg-black rounded-lg py-4  w-10/12 relative z-50">
        <div className="p-4 w-2/5">
          <h1 className="text-red-600 mb-10 text-3xl">{movie.name}</h1>
          <p className="text-white">{movie.overview}</p>
        </div>
        <div className="w-3/5 h-full">
          <img
            src={`${base_url}${movie.backdrop_path}`}
            alt=""
            className="h-full max-w-full object-cover"
          />
          <button
            className="text-white absolute top-0 right-0 p-3 text-2xl"
            onClick={showPopupHandler}
          >
            <FontAwesomeIcon icon={faMultiply} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
