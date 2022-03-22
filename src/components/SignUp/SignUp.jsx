import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { netflixContext } from "../../context/netflixContext";
import Footer from "../Footer/Footer";
import TopHeader from "../Header/TopHeader";
import "./signUp.css";
function SignUp() {
  const context = useContext(netflixContext);
  const [signUpEmail, setSignUpEmail] = useState(context.signUpEmail);

  const navigate = useNavigate();
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
  function submitData() {
    navigate("/home", { replace: true });
  }
  return (
    <section>
      <div>
        <div>
          <TopHeader />
          <div className="clear-both" />
          <div className="flex justify-center items-center mt-6">
            <div className="register-form-container my-8 mb-20">
              <div>
                <div className="mb-3">
                  <h1 className="text-3xl font-semibold">
                    Create a password to start your membership
                  </h1>
                </div>
                <div className="text-lg mb-1">
                  <span>Just a few more steps and you're done!</span>
                </div>
                <div className="text-lg mb-2">
                  <span>We hate paperwork, too.</span>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="mb-5">
                  <input
                    type="text"
                    name="email"
                    value={signUpEmail}
                    placeholder="Email"
                    className="w-full border border-solid border-red-700 px-2 py-4 outline-none rounded-sm"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    onChange={(event) => setSignUpEmail(event.target.value)}
                  />
                  <div>
                    <span className="text-red-600">
                      {errors.email?.message}
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="Add a password"
                    className="w-full border border-solid border-red-700 px-2 py-4 outline-none rounded-sm"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                        message:
                          "Your password should contain numbers, capital letters and between 6 and 16 characters.",
                      },
                    })}
                  />
                  <div>
                    <span className="text-red-600">
                      {errors.password?.message}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mb-5">
                  <input type="checkbox" className="w-5 h-5" />
                  <label htmlFor className="ml-2">
                    Yes, please email me Netflix special offers.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 py-4 text-white rounded"
                >
                  Sign Up
                </button>
              </form>{" "}
            </div>
          </div>
          <Footer bgColor={"sign-up-footer-wrapper"} />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
