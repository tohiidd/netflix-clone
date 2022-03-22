import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
function TopHeader() {
  const location = useLocation();

  return (
    <div className="z-20 flex justify-between items-start w-11/12 mx-auto pt-7">
      <Link to="/">
        <img
          src="../images/netflixLogo.png"
          alt="netflixLogo"
          className="w-20 h-6 sm:w-32 sm:h-8 xl:w-40 xl:h-11"
        />
      </Link>
      {location.pathname === "/sign-up" && (
        <Link
          to="/sign-in"
          className="float-right mr-3 font-semibold text-lg text-gray-800"
        >
          Sign In
        </Link>
      )}

      {location.pathname === "/" && (
        <div className="flex items-center">
          <div className="text-white border p-0.5 sm:p-1  border-solid rounded-sm border-white text-sm">
            <FontAwesomeIcon icon={faGlobe} />
            <select name id className="bg-transparent border-none outline-none">
              <option value className="bg-black">
                English
              </option>
              <option value className="bg-black">
                Espanol
              </option>
            </select>
          </div>
          <Link
            to="/sign-in"
            className="bg-red-600 text-white px-2.5 py-0.5 sm:px-4 sm:py-1 rounded-sm ml-3 lg:ml-7 cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}

export default TopHeader;
