import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./form.css";
import { useContext, useState } from "react";
import { netflixContext } from "../../context/netflixContext";
import { useForm } from "react-hook-form";

export function EmailForm() {
  const [emailValue, setEmailValue] = useState("");
  const context = useContext(netflixContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("success");
    console.log(data);
    submitData();
  };
  const onError = (errors) => {
    console.log("failed");
    console.log(errors);
  };

  const navigate = useNavigate();
  function submitData() {
    context.signUpEmail = emailValue;
    navigate("/sign-up", {
      replace: true,
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h3 className="mb-3 text-lg lg:text-xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="relative mx-8 sm:mx-24 md:mx-44 lg:mx-24 flex justify-center flex-wrap py-1">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="login-email px-7 rounded-sm outline-none text-black"
          value={emailValue}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email",
            },
          })}
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <button
          type="submit"
          className="login-email-btn flex items-center w-auto mt-3  text-base  lg:text-3xl px-7 rounded-sm bg-red-700 hover:bg-red-600"
        >
          <span>Get Started</span>
          <span className="lg:h-3/5 ml-1 text-base lg:text-2xl xl:text-3xl">
            <FontAwesomeIcon className=" ml-1" icon={faAngleRight} />
          </span>
        </button>
      </div>
      <div className="sign-in-email-error-message relative text-xs md:text-base text-left lg:left-24 lg:ml-2  lg:top-0  w-60">
        <span className="text-orange-600">{errors.email?.message}</span>
      </div>
    </form>
  );
}
