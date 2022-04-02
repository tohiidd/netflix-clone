import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popup.css";
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
      <div className="flex items-center bg-black rounded-lg h-2/4  w-10/12 relative z-50">
        <div className="p-4 w-1/2">
          <h1 className="text-red-600 mb-28 text-3xl">{movie.name}</h1>
          <p className="text-white">{movie.desc}</p>
        </div>
        <div className="w-1/2 h-full">
          <img src={`${movie.img}`} alt="" className="h-full" />
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
