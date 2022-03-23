import {
  faBell,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeHeader() {
  return (
    <section className="header-background">
      <div className="mx-auto w-11/12 text-white pt-5">
        <div className="w-full">
          <div className="inline-block mr-3 lg:mr-6">
            <img
              src="images/netflixLogo.png"
              alt="netflixLogo"
              className="w-24 h-6 lg:w-32 lg:h-8"
            />
          </div>
          <div className="hidden md:inline-block align-top mt-1">
            <nav className="text-sm lg:text-base">
              <a href className="ml-2 lg:ml-3">
                Homepage
              </a>
              <a href className="ml-2 lg:ml-3">
                Movies
              </a>
              <a href className="ml-2 lg:ml-3">
                Series
              </a>
              <a href className="ml-2 lg:ml-3">
                New And Popular
              </a>
              <a href className="ml-2 lg:ml-3">
                My List
              </a>
            </nav>
          </div>
          <div className="hidden md:flex float-right items-center text-sm lg:text-lg">
            <div className="mx-2 lg:mx-4">
              <span className="mr-2 lg:mr-4">
                <i className="fa-solid fa-magnifying-glass" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <span className="mr-2 lg:mr-4">KID</span>
              <span>
                <i className="fa-solid fa-bell" />
                <FontAwesomeIcon icon={faBell} />
              </span>
            </div>
            <div>
              <img
                src="images/user.png"
                alt="user"
                className="w-8 h-8 rounded-md object-cover"
              />
            </div>
            <div className="profile-dropdown relative ml-4 w-8 cursor-pointer">
              <div className="text-center">
                <FontAwesomeIcon icon={faCaretDown} />
                <i className="fa-solid fa-caret-down mt-1" />
              </div>
              <div className="absolute profile-dropdown-options bg-black rounded-md p-1">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
        {/* header  */}
        <div className="mt-36 pb-24">
          <div className="md:w-8/12 lg:w-full">
            <h1 className="text-yellow-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
              THE BATMAN
            </h1>
            <p className="pr-10 text-sm sm:text-lg movie-summery w-11/12">
              When the Riddler, a sadistic serial killer, begins murdering key
              political figures in Gotham, Batman is forced to investigate the
              city's hidden corruption and question his family's involvement.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-white text-black text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-md font-bold mr-2">
              <i className="fa-solid fa-play mr-1" />
              <span>Play</span>
            </button>
            <button className="bg-gray-500 text-white text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-md font-bold">
              <i className="fa-solid fa-circle-info mr-1" />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
