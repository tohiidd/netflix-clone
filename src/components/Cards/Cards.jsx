import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmailForm } from "../Form/Form";
import "./cards.css";

function Cards() {
  return (
    <div>
      <section className="bg-black">
        <div className="py-14 px-4 md:px-14 border-bottom">
          <div className="flex items-center justify-center flex-col lg:flex-row xl:mx-16 2xl:mx-44">
            <div className="one-story-text-container text-center lg:pr-16 lg:text-left w-full lg:w-1/2 text-white">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
                Enjoy on your TV.
              </h1>
              <h2 className="text-lg md:text-2xl mt-5 font-semibold">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h2>
            </div>
            <div className="one-story-video-container-parent w-full sm:w-auto relative">
              <img
                src="../images/tv.png"
                alt="tv-frame"
                className="relative z-20"
              />
              <div className="one-story-video-container absolute z-10 w-full h-full">
                <video className="w-full h-full" autoPlay muted loop>
                  <source src="../videos/video-tv-0819.m4v" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="py-14 px-4 md:px-14 border-bottom">
          <div className="flex items-center justify-center flex-col lg:flex-row-reverse xl:mx-16 2xl:mx-44">
            <div className="one-story-text-container text-center lg:pr-16 lg:text-left w-full lg:w-1/2 text-white">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
                Download your shows to watch offline.
              </h1>
              <h2 className="text-lg md:text-2xl mt-5 font-semibold">
                Save your favorites easily and always have something to watch.
              </h2>
            </div>
            <div className="w-full sm:w-auto lg:w-1/3 relative">
              <img
                src="../images/mobile-0819.jpg"
                alt="tv-frame"
                className="relative z-20"
              />
              <div className="one-story-card-animation flex items-center w-full sm:w-3/5 lg:w-3/5 absolute bg-black rounded-xl p-3 z-30 flex-grow-0 flex-shrink-0">
                <div>
                  <img
                    src="../images/boxshot.png"
                    alt="stranger-things-box-shot"
                    className="w-8 h-12 md:w-14 md:h-20"
                  />
                </div>
                <div className="flex-grow flex-shrink ml-2">
                  <div className="text-white text-base font-semibold">
                    Stranger Things
                  </div>
                  <div className="text-blue-700 text-sm font-semibold">
                    Downloading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="py-14 px-4 md:px-14 border-bottom">
          <div className="flex items-center justify-center flex-col lg:flex-row xl:mx-16 2xl:mx-44">
            <div className="one-story-text-container lg:pr-16 text-center lg:text-left w-full lg:w-1/2 text-white">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
                Watch everywhere.
              </h1>
              <h2 className="text-lg md:text-2xl mt-5 font-semibold">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </h2>
            </div>
            <div className="w-full sm:w-auto lg:w-1/2 relative">
              <img
                src="../images/device-pile.png"
                alt="tv-frame"
                className="relative z-20"
              />
              <div className="one-story-video-container-v2 absolute z-10 w-full h-full">
                <video className="w-full h-full" autoPlay muted loop>
                  <source src="../videos/video-devices.m4v" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="py-14 px-4 md:px-14 border-bottom">
          <div className="flex items-center justify-center flex-col lg:flex-row-reverse xl:mx-16 2xl:mx-44">
            <div className="one-story-text-container text-center lg:pr-16 lg:text-left w-full lg:w-1/2 text-white">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
                Create profiles for kids.
              </h1>
              <h2 className="text-lg md:text-2xl mt-5 font-semibold">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h2>
            </div>
            <div className="w-full sm:w-auto lg:w-1/2 relative">
              <img
                src="../images/kids.png"
                alt="tv-frame"
                className="relative z-20"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="text-white py-10 lg:py-20 lg:px-40 border-bottom">
          <h1 className="text-2xl mx-auto w-2/3 sm:w-4/5 lg:w-full pt-5 md:text-5xl font-semibold text-center">
            Frequently Asked Questions
          </h1>
          <ul className="faq-list w-full sm:w-5/6 lg:w-4/5 mx-auto my-10">
            <li className="mb-2">
              <button className="faq-question w-full text-left rounded-sm text-lg md:text-2xl font-normal">
                <span className="md:align-middle">
                  What can I watch on Netflix?
                </span>
                <span className="float-right text-2xl md:text-3xl">
                  <FontAwesomeIcon icon={faPlus} className="md:align-middle" />
                </span>
              </button>
              <div className="p-8 mt-0.5 hidden">
                <span className="text-2xl">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                  <br />
                  <br />
                  <a href className="underline">
                    Check out some of our content
                  </a>
                </span>
              </div>
            </li>
            <li className="mb-2">
              <button className="faq-question w-full text-left rounded-sm text-lg md:text-2xl font-normal">
                <span className="md:align-middle"> What is Netflix? </span>
                <span className="float-right text-2xl md:text-3xl">
                  <FontAwesomeIcon icon={faPlus} className="md:align-middle" />
                </span>
              </button>
              <div className="p-8 mt-0.5 hidden">
                <span className="text-2xl">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                  <br />
                  <br />
                  <a href className="underline">
                    Check out some of our content
                  </a>
                </span>
              </div>
            </li>
            <li className="mb-2">
              <button className="faq-question w-full text-left rounded-sm text-lg md:text-2xl font-normal">
                <span className="md:align-middle">
                  {" "}
                  How much does Netflix cost?{" "}
                </span>
                <span className="float-right text-2xl md:text-3xl">
                  <FontAwesomeIcon icon={faPlus} className="md:align-middle" />
                </span>
              </button>
              <div className="p-8 mt-0.5 hidden">
                <span className="text-2xl">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from €7,99 to €17,99 a month. No extra costs, no contracts.
                  <br />
                  <br />
                  <a href className="underline">
                    Check out some of our content
                  </a>
                </span>
              </div>
            </li>
            <li className="mb-2">
              <button className="faq-question w-full text-left rounded-sm text-lg md:text-2xl font-normal">
                <span className="md:align-middle"> Where can I watch? </span>
                <span className="float-right text-2xl md:text-3xl">
                  <FontAwesomeIcon icon={faPlus} className="md:align-middle" />
                </span>
              </button>
              <div className="p-8 mt-0.5 hidden">
                <span className="text-2xl">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br />
                  <br />
                  <a href className="underline">
                    Check out some of our content
                  </a>
                </span>
              </div>
            </li>
            <li className="mb-2">
              <button className="faq-question w-full text-left rounded-sm text-lg md:text-2xl font-normal">
                <span className="md:align-middle"> How do I cancel? </span>
                <span className="float-right text-2xl md:text-3xl">
                  <FontAwesomeIcon icon={faPlus} className="md:align-middle" />
                </span>
              </button>
              <div className="p-8 mt-0.5 hidden">
                <span className="text-2xl">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                  <br />
                  <br />
                  <a href className="underline">
                    Check out some of our content
                  </a>
                </span>
              </div>
            </li>
            <li className="mb-2">
              <button className="faq-question w-full text-left rounded-sm text-lg md:text-2xl font-normal">
                <span className="md:align-middle">
                  {" "}
                  Is Netflix good for kids?{" "}
                </span>
                <span className="float-right text-2xl md:text-3xl">
                  <FontAwesomeIcon icon={faPlus} className="md:align-middle" />
                </span>
              </button>
              <div className="p-8 mt-0.5 hidden">
                <span className="text-2xl">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                  <br />
                  <br />
                  <a href className="underline">
                    Check out some of our content
                  </a>
                </span>
              </div>
            </li>
          </ul>
          <EmailForm />
        </div>
      </section>
    </div>
  );
}

export default Cards;
