import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

function HomeNav() {
  const [navBg, setNavBg] = useState(false);
  const [showSearchbox, setShowSearchbox] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setNavBg(true);
      } else setNavBg(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  function handleSearchbox(event) {
    event.preventDefault();
    setShowSearchbox(true);
    // inputRef.current.autoFocus = true;
    console.log(inputRef);
  }

  return (
    <div className={`${navBg && "nav-bg "} z-30 fixed w-full`}>
      <div className="mx-auto w-11/12 text-white pt-4 pb-3">
        <div className="inline-block mr-3 lg:mr-6">
          <img
            src="images/netflixLogo.png"
            alt="netflixLogo"
            className="w-24 h-6 lg:w-32 lg:h-8"
          />
        </div>
        <div className="hidden md:flex float-right items-center text-sm lg:text-lg">
          <form className="mx-2 lg:mx-4">
            <button
              type="submit"
              className="mr-2 lg:mr-4"
              onClick={handleSearchbox}
            >
              <i className="fa-solid fa-magnifying-glass" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="cursor-pointer"
              />
            </button>
            <input
              type="text"
              className={` bg-transparent searchbox outline-none border border-white border-solid rounded-md text-sm p-1    ${
                showSearchbox && " show-searchbox"
              }`}
              placeholder="Search anything"
              ref={inputRef}
              autoFocus={true}
            />
          </form>
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
            </div>
            <div className="absolute text-sm flex-col profile-dropdown-options bg-black rounded-md p-1">
              <span className="p-1">Settings</span>
              <span className="p-1">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
