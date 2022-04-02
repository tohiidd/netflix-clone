import HomeNav from "./HomeNav";

function HomeHeader() {
  return (
    <section className="header-background">
      <HomeNav />
      <div className="mx-auto w-11/12 text-white pt-5">
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
