import { EmailForm } from "../Form/Form";
import "./header.css";
import TopHeader from "./TopHeader";
function Header() {
  return (
    <section>
      <div className="story-card w-full h-full">
        <div className="background-gradient w-full h-full border-bottom">
          <TopHeader />
          <div className="flex justify-center text-center">
            <div className="our-story-card w-full text-white mt-16 sm:mt-28 md:mt-40 pb-40">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold mx-6 md:mx-24">
                Unlimited movies, TV shows, and more.
              </h1>
              <h3 className="text-lg sm:text-2xl my-4">
                Watch anywhere. Cancel anytime.
              </h3>
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
