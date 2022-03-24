import { useRef, useState } from "react";
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import TopHeader from "../Header/TopHeader";

import "./signIn.css";

function SignIn() {
  const [buttonText, setButtonText] = useState(true);
  var passwordInput = useRef();
  var showButton = useRef();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("success");
    console.log(data);
    navigate("/home", {
      replace: true,
    });
  };
  const onError = (errors) => {
    console.log("error");
    console.log(errors);
  };
  function showPassword() {
    let input = passwordInput.current.children[0];
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
    setButtonText((prevButtonText) => !prevButtonText);
  }
  function visibleButton() {
    showButton.current.style.display = "block";
  }

  return (
    <section className="story-card">
      <Helmet>
        <title>Netflix </title>
      </Helmet>
      <div className="sign-in-background">
        <TopHeader />
        {/* <SignInForm /> */}
        <div className="flex justify-center items-center mb-12">
          <div className="sign-in-form-background w-full md:w-fit rounded-md px-8 py-1 md:p-12">
            <h1 className="text-white text-3xl font-semibold mb-6">Sign In</h1>
            <form
              className="w-full flex flex-col"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div className="mb-4">
                <input
                  name="email"
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="sign-in-form-input outline-none w-full py-3 rounded-md px-6 text-white"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <div>
                  <span className="text-orange-600  text-xs ml-1">
                    {errors.email?.message}
                  </span>
                </div>
              </div>
              <div className="mb-1 h-20 relative" ref={passwordInput}>
                <input
                  onFocus={visibleButton}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="sign-in-form-input outline-none w-full py-3 rounded-md px-6 text-white"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message:
                        "Your password should be between 6 and 16 characters.",
                    },
                    maxLength: {
                      value: 16,
                      message:
                        "Your password should be between 6 and 16 characters.",
                    },
                  })}
                />
                <div className="password-error-message">
                  <span className="block  text-orange-600 text-xs ml-1">
                    {errors.password?.message}
                  </span>
                </div>
                <button
                  ref={showButton}
                  onClick={showPassword}
                  className="text-gray-500 absolute top-3 right-3 hidden show-btn"
                >
                  {buttonText ? "SHOW" : "HIDE"}
                </button>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold rounded-md p-3 mb-5"
              >
                Sign In
              </button>
              <div className="sign-in-form-checkbox-container flex justify-between text-xs">
                <div className="relative flex">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="sign-in-form-remember-me w-4 h-4 rounded-lg"
                  />
                  <label htmlFor="checkbox" className="ml-2">
                    Remember me
                  </label>
                </div>
                <div>
                  <a>Need Help?</a>
                </div>
              </div>
            </form>
            <div className="sign-in-others flex flex-col text-white mt-4">
              <div>
                <img
                  src="images/facebook-Logo__blue_57.png"
                  alt="facebook-logo"
                  className="w-5 h-5 inline-block mr-2"
                />
                <span>
                  <a>Log in with Facebook</a>
                </span>
              </div>
              <div className="my-3">
                <span className="mr-2">New to Netflix?</span>
                <span>
                  <Link to="/sign-up" className="text-white">
                    Sign up now
                  </Link>
                </span>
              </div>
              <div className="text-sm w-auto md:w-72">
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                <span>
                  <a className="text-blue-700">Learn more</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer bgColor={"sign-in-footer-wrapper "} />
      </div>
    </section>
  );
}

export default SignIn;
