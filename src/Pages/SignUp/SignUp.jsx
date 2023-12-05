import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvideer";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const { googleSignIn, emailPassSignUp } = useContext(AuthContext);
  const [signUpError, setsignUpError] = useState(null);
  const navigate = useNavigate();

  const handleSugnUp = (e) => {
    setsignUpError("");
    e.preventDefault();
    console.log("clicked");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    console.log({ name, email, image, password });

    // password validation
    if (!/^.{6,}$/.test(password)) {
      setsignUpError(`Must have at least 6 characters`);
      return;
    } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setsignUpError(`Must have at least 1 capital letter`);
      return;
    } else if (!/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~])\S+$/.test(password)) {
      setsignUpError(`Must have at least 1 special character`);
      return;
    }

    emailPassSignUp(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateProfile(currentUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log(`user updated`, currentUser);
          })
          .catch((error) => {
            console.log(error);
          });
        if (currentUser) {
          toast(" Sign Up Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setsignUpError(error.message);
      });
  };

  // Google Sign up
  const handleGoogleButton = () => {
    setsignUpError("");
    googleSignIn()
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        if (currentUser) {
          toast(" Sign Up Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setsignUpError(error.message);
      });
  };

  return (
    <div className="dark:bg-gray-900 flex flex-col gap-10 py-10 ">
      <div className="mx-auto  shadow-md dark:shadow-emerald-50  lg:w-1/2">
        <form onSubmit={handleSugnUp} className="mx-auto w-full p-10">
          <p className="capitalize text-2xl font-bold text-center dark:text-white m-10 border-b w-fit mx-auto">
            Sign Up to ByteCanvas Account!{" "}
          </p>
          <div className="md:flex md:items-center mb-6">
            <div className="lg:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Full Name
              </label>
            </div>
            <div className="">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="lg:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Image Url
              </label>
            </div>
            <div className="">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="image"
                placeholder="Image Url"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="lg:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Your Email
              </label>
            </div>
            <div className="">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="lg:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                placeholder="******************"
                name="password"
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="lg:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="md:w-1/3 lg:mx-auto mt-5">
            <p className="text-red-500">{signUpError}</p>{" "}
            <p className="dark:text-gray-200 ">
              Don't have an account?
              <br />
              <Link
                className="inline-block align-baseline font-bold  text-blue-500 text-xl hover:text-blue-800"
                to={"/signup"}
              >
                {" "}
                Sign Up.
              </Link>
            </p>
          </div>
        </form>

        <div className="mb-10  w-fit  mx-auto">
          <button
            onClick={handleGoogleButton}
            type=""
            className="hover:scale-110 transition items-center text-base flex outline gap-5 px-5 focus:ring-4 focus:outline-none font-medium rounded-lg  py-2.5 text-center dark:bg-blue-600 "
          >
            <FcGoogle className="text-lg"></FcGoogle> Sign Up With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
