import "./cards.css";
import Questions from "./Questions";

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
      <Questions />
    </div>
  );
}

export default Cards;
